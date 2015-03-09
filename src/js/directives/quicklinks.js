define([
        './module',
        'angular'
        ], function(directives, $ng){
	'use strict';
	 
		function safeApply(scope, fn) {
			(scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
		};
	  function Directive($compile, $location, $filter) {
		  	function loadPageVar(sVar){
	        	
      			return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + 
      				"(?:\\=([^&]*))?)?.*$","i"), "$1"));
      		}
      	
		  	function killEvent(event) {
      	        event.preventDefault();
      	        event.stopPropagation();
		  	}
      	 
	      	 function indexOf(value, array) {
	  	        var i = 0, l = array.length;
	  	        for (; i < l; i = i + 1) {
	  	            if (equal(value, array[i])) return i;
	  	        }
	  	        return -1;
	  	    }
      	 
	      	 function equal(a, b) {
	      	        if (a === b) return true;
	      	        if (a === undefined || b === undefined) return false;
	      	        if (a === null || b === null) return false;
	      	        // Check whether 'a' or 'b' is a string (primitive or object).
	      	        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
	      	        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
	      	        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
	      	        return false;
	      	 }
      	 
	      	 function installKeyUpChangeEvent(element) {
	  	        var key="keyup-change-value";
	  	        element.on("keydown", function () {
	  	            if ($ng.element.data(element, key) === undefined) {
	  	            	
	  	            	$ng.element.data(element, key, element.val());
	  	            	
	  	            }
	  	        });
	  	        element.on("keyup", function () {
	  	            var val= $ng.element.data(element, key);
	  	            
	  	            if (val !== undefined && element.val() !== val) {
	  	            	
	  	                $ng.element.removeData(element, key);
	  	                element.trigger("keyup-change");
	  	            }
	  	        });
	      	}
      	 
      	function id(e) { return e.id; };
      	 
	      	
	    var unique = (function (){
	      	var counter = 1;
	      	return function(){ return counter++; };
	    }());
      	
      	var KEY;
      	
      	KEY = {
      			TAB: 9,
      	        ENTER: 13,
      	        ESC: 27,
      	        SPACE: 32,
      	        LEFT: 37,
      	        UP: 38,
      	        RIGHT: 39,
      	        DOWN: 40,
      	        SHIFT: 16,
      	        CTRL: 17,
      	        ALT: 18,
      	        PAGE_UP: 33,
      	        PAGE_DOWN: 34,
      	        HOME: 36,
      	        END: 35,
      	        BACKSPACE: 8,
      	        DELETE: 46,
      	        isArrow: function (k) {
      	            k = k.which ? k.which : k;
      	            switch (k) {
      	            case KEY.LEFT:
      	            case KEY.RIGHT:
      	            case KEY.UP:
      	            case KEY.DOWN:
      	                return true;
      	            }
      	            return false;
      	        },
      	        isControl: function (e) {
      	            var k = e.which;
      	            switch (k) {
      	            case KEY.SHIFT:
      	            case KEY.CTRL:
      	            case KEY.ALT:
      	                return true;
      	            }

      	            if (e.metaKey) return true;

      	            return false;
      	        },
      	        isFunctionKey: function (k) {
      	            k = k.which ? k.which : k;
      	            return k >= 112 && k <= 123;
      	        }
      	};
      	
      	function controller($scope, $element, $attrs){
      		
      		this.clear = function(triggerChange) {
                  var data=$element.find('dropdown-toggle').data('dropdown-data');
                  if (data) { // guard against queued quick consecutive clicks
                      var evt = $.Event('dropdpown-clearing');
                      $element.find('select').trigger(evt);
                      if (evt.isDefaultPrevented()) {
                          return;
                      }
                     
                      if (triggerChange !== false){
                          this.opts.element.trigger({ type: 'drpodpown-removed', val: this.id(data), choice: data });
                          this.triggerChange({removed:data});
                      }
                  }
              }
      		
      		this.triggerSelect = function(data){
      			 var evt = $.Event('dropdown-selecting', { val: id(data), object: data });
      	         $element.find('select').trigger(evt);
      	         return !evt.isDefaultPrevented();
      		}
      		
      		this.triggerChange = function(details){
      			details = details || {};
                  details= $.extend({}, details, { type: 'change', val: $element.find('select').val() });
      			
  				var $el = $element.find('select');
  			 	$el.data("dropdown-change-triggered", true);
  			 	$el.trigger(details);
  			 	$el.data("dropdown-change-triggered", false);
  			 	
  			 	$el.click();
      		}
      		
      		this.data = function(value){
          		
          		var data,
          			triggerChange = false;
          		
          		
          		if (arguments.length === 0) {
                      data = $element.find('.dropdown-toggle').data('dropdown-data');
                      if (data == undefined) data = null;
                      return data;
                  } else {
                      if (arguments.length > 1) {
                          triggerChange = arguments[1];
                      }
                      if (!value) {
                          this.clear(triggerChange);
                      } else {
                      	
                          data = this.data();
                          $element.find('select').val(!value ? "" : this.id(value));
                          this.updateSelection(value);
                          if (triggerChange) {
                              this.triggerChange({added: value, removed:data});
                          }
                      }
                  }
                  
                
          	}

      		
      		this.onSelect = function(data, options){
      			
      			if(!this.triggerSelect(data)) { return; }
      			
      			var _select = $element.find('select');
      			var old = _select.val(),
      	            oldData = this.data();
      			
      			
      			safeApply($scope, function(){
      				var ctrl = _select.controller('ngModel');
      				ctrl.$setViewValue(id(data));
      				ctrl.$render();
      				
      			});
      			
      			
      			this.updateSelection(data);
      			this.close();
      			if (!options || !options.noFocus)
                      $element.find('dropdown-focuser').focus();
      	       
      			this.triggerChange({added:data, removed:oldData});
      		};
      		
      		this.updateSelection = function(data){
      			 var container=$element.find('.dropdown-chosen');
      			 $element.find('.dropdown-toggle').data('dropdown-data', data);
      			 
      			 
      	         $scope.selectItem(data, container);
      	           
      		}
      		
      		this.shouldOpen = function(){
      			
      			var event;

                  if (this.opened()) return false;
                  event = $ng.element.Event('dropdown-opening');
                  $element.find('select').trigger(event);
      			return !event.isDefaultPrevented();
      		}
      		
      		this.open = function(){
      			
      			if(!this.shouldOpen()) return false;
      			this.opening();
      			
      			return true;
      		};
      		
      		this.opening = function(){
      			
      			$element.addClass('dropdown-open').addClass('open');
      			//highlight current item
      			//var hasplaceHolder
      			
      			this.highlight($element.find('select')[0].selectedIndex);
      			
      			
      			
      			$element.find('.dropdown-input').focus();
      			
      			$element.find('.dropdown-menu').addClass('dropdown-dropdown-open');
      			$element.find('.dropdown-focuser').prop('disabled', true).val('');
      			$element.find('select').trigger($.Event('dropdown-open'));
      			
      			$element.closest('body').on('click', $ng.bind(this, function(e){
      				if(this.opened()){
      					this.close();
      					$element.closest('body').off();
      				}
      			}))
      		};
      		
      		this.opened = function(){
      			
      			return $element.hasClass('dropdown-open');
      		};
      		
      		this.close = function(params){
      			
      			if (!this.opened()) return;
      			
      			$element.find('.dropdown-menu').removeClass('dropdown-dropdown-open');
      			$element.removeClass('dropdown-open').removeClass('open');
      			$element.find('select').trigger($.Event('dropdown-close'));
      			
      			params = params || {focus: true};
      			var focuser = $element.find('.dropdown-focuser');
      			focuser.removeAttr('disabled');
      			if(params.focus){
      				focuser.focus();
      			}
      		};
      		
      		this.ensureHighlightVisible = function(){
      			var index = this.highlight(), rb, hb, menu, y;

      			menu = $element.find('.dropdown-menu');
      			
                  if (index < 0) return;
                  if (index === 0){
                  	menu.scrollTop(0);
                  	return;
                  }
                  
                  var children = this.findHighlightableChoices();
                  var child = $(children[index]);
                  
                  hb = child.offset().top + child.outerHeight(true);
                  
                  
                  rb = menu.offset().top + menu.outerHeight(true);
                  if(hb > rb){
                  	menu.scrollTop(menu.scrollTop() + (hb - rb));
                  }
                  
                  y = child.offset().top - menu.offset().top;
                  
               // make sure the top of the element is visible
                  if (y < 0 && child.css('display') != 'none' ) {
                      menu.scrollTop(menu.scrollTop() + y); // y is negative
                  }
      		};
      		
      		this.highlight = function(index) {
      			
      			var choices = $element.find('li'),
                  choice,
                  data;

	                if (arguments.length === 0) {
	                    return indexOf(choices.filter('.dropdown-highlighted')[0], choices.get());
	                }

	                if (index >= choices.length) index = choices.length - 1;
	                if (index < 0) index = 0;

	                this.removeHighlight();

	                choice = $(choices[index]);
	                choice.addClass('dropdown-highlighted');

	                this.ensureHighlightVisible();

	                data = choice.data('dropdown-data');
	                
	                if (data) {
	                    $element.find('select').trigger({ type: 'dropdown-highlight', val: id(data), choice: data });
	                }
      			
      		}
      		
      		this.highlightUnderEvent = function (event) {
  	            var el = $(event.target).closest(".dropdown-result-selectable");
  	            if (el.length > 0 && !el.is(".dropdown-highlighted")) {
  	                var choices = this.findHighlightableChoices();
  	                this.highlight(choices.index(el));
  	            } else if (el.length == 0) {
  	                // if we are over an unselectable item remove all highlights
  	                this.removeHighlight();
  	            }
  	        }
      		
      		this.moveHighlight = function (delta) {
      			
                  var choices = $element.find('li'),
                      index = this.highlight();

                  while (index > -1 && index < choices.length) {
                      index += delta;
                      this.highlight(index);
                      break;
                  
                  }
              };

              this.removeHighlight = function(){
              	
                 $element.find(".dropdown-highlighted").removeClass("dropdown-highlighted");
              };
              
              this.cancel = function(e){
              	
              	this.close(e);
              	
              	$scope.focuser.removeAttr('disabled');
              	$scope.focuser.focus();
              	
              };
              
              this.blur = function(){
              	//never gets called
              	
              	 this.selectHighlighted({noFocus: true});
          	 	 this.close();
                   $element.removeClass("dropdown-active");
                   // synonymous to .is(':focus'), which is available in jquery >= 1.6
                  // this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                  
              }
              
              this.findHighlightableChoices = function() {
                  return $element.find(".dropdown-result-selectable:not(.dropdown-selected)");
              };
              
              this.selectHighlighted = function (options) {
              	
              	
                  var index=this.highlight(),
                      highlighted=$element.find(".dropdown-highlighted"),
                      data = highlighted.closest(".dropdown-result").data("dropdown-data");

                 
                  if (data) {
                  	
                      this.highlight(index);
                      this.onSelect(data, options);
                  } else if (options && options.noFocus) {
                  	
                      this.close();
                  }
              };
              
      		return this;
      	}
      	
      	return {
              restrict: 'A',
              scope: true,
              controller: controller,
              link: function (scope, iElement, iAttrs, controller) {
              	
              	
              	scope.selectItem = function(data, $el){
              		
              		
              		var display = iElement.find('select option:selected').text();
              		iElement.find('span[role=status]').text(display);
              		
              		$el.text($filter('characters')(display, 25, true))
              			.attr('data-value', data.id);
						
              	};
              	
              	function topLinkData($select){
              		
              		var _current = $select.val();
              		var _currentModelProp = $select.attr('ng-model').split('.');
              		
              		safeApply(scope, function(){
              			scope[_currentModelProp[0]][_currentModelProp[1]] = _current;
              		});
              		
              		
              		var item = select.find(':selected').length ? select.find(':selected').get(0) : select.find('option').get(0);
              		
              		//scope.highlightText = item.text || 'Please choose...';
              		//scope.highlightVal = item.value || 'Unknown';
              		
              		return {
              			text: item.text || 'Please choose...',
              			data: item.value || 'Unknown',
              			element: item
              		};
              	}
              		
              	var select = iElement.find('select'),
              		label = $ng.element('label[for=' + select.attr('id') + ']'),
              		data = topLinkData(select),
              		focuser,
              		container = $ng.element(document.createElement('div'))
              						.attr('class', 'maaui-dropdown-container')
              						.html('<a></a>'),
              		topLink = $ng.element(['<a class="dropdown-toggle"',
              		                       'aria-expanded="false"',
              		                       'onclick="return false;"',
              		                       'tabindex="-1"',
              		                       'href="javascript:void(0)"',
              		                       'data-value="' + data.data + '">',
              		                       '<span class="dropdown-chosen">' + data.text + '</span></a>',
              		                       '<input type="text" tabindex="0" class="dropdown-focuser"/>'].join(' ')),
              		ul = $ng.element('<ul class="dropdown-menu" role="listbox"></ul>');
              	
              	if (select.data('maaui-dropdown') !== undefined &&
                      select.data('maaui-dropdown') !== null) {
                      select.data('maaui-dropdown').destroy();
                  }
              	
              	select.attr('tabindex', '-1');
              	select.attr('aria-haspopup', true);
              	
              	
              	select.on('dropdown-focus', $ng.bind(controller, function(event){
              		
              		
              		this.selectHighlighted();
              		
              	})).on('dropdown-opening', $ng.bind(controller, function(event){
              		
              		
              		
              	})).on('dropdown-blur', $ng.bind(controller, function(event){
              		
              		
              		
              	})).on('dropdown-close', $ng.bind(controller, function(e){
              		
              		
              	})).on('dropdown-highlight', $ng.bind(controller, function(event){
              		
              		var data = event.choice,
              			val = event.val;
              		
              	}));
              	
              	ul.on('mouseup', $ng.bind(controller, function(e){
              		 if ($(e.target).closest('li').length > 0) {
              			
                           this.highlightUnderEvent(e);
                           this.selectHighlighted(e);
                       }
              	}));
              	
              	
              	
              	focuser = topLink.eq(2).attr('id', 'dropdown-focuser-' + unique());
              	label.attr('for', focuser.attr('id'));
              	
              	focuser.on('keydown', $ng.bind(controller, function(e){
              		
              		 if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
              			 
              			 return;
                       }
              		 
              		 if (e.which == KEY.DOWN || e.which == KEY.UP
                               || e.which == KEY.ENTER ) {

                           if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;

                           this.open(); 
                           killEvent(e);
                           return;
                           
                         
                          
                       }

                       if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                           
                           killEvent(e);
                           return;
                       }
              		
              	}));
              	
              	installKeyUpChangeEvent(focuser);
              	
              	focuser.on('keyup-change input', function(e) {
                     
                  }).on('focus', function(e){
              		
                  	if (!iElement.hasClass('dropdown-active')) {
                          select.trigger($ng.element.Event('dropdown-focus', {srcEvt: 'focuser'}));
                      }
              		
                      iElement.addClass('dropdown-active');
                      
                      
              	}).on('blur', $ng.bind(controller, function(e){
              		
              		if (!this.opened()) {
              			iElement.removeClass('dropdown-active');
                          select.trigger($ng.element.Event('dropdown-blur'));
                      }
              		
              	}));
          	
              	iElement.on('mousedown', '.dropdown-toggle', $ng.bind(controller, function (e) {

                      if (!iElement.hasClass('dropdown-active')) {
                      	
                          select.trigger($ng.element.Event('dropdown-focus', {srcEvt:'mousedown'}));
                      }
                      
                      iElement.addClass('dropdown-active');
                      if(this.opened()){
                      	
                      	this.close();
                      } else {
                      	this.open();
                      	
                      }

                      killEvent(e);
                  }));
              	
              	label.on('click.dropdown.data-api', $ng.bind(controller, function(e){
              		
              		if(!this.opened()){
              			iElement.addClass('dropdown-active');
              			this.open();
              		} else {
              			
              			this.blur(e);
              		}
              		killEvent(e);
              		
              		
              	}));
              	
              	
              	$ng.forEach(select.find('option'), function(val, idx){
              		
              		var li = $ng.element('<li></li>');
              		li.append($ng.element('<a />', { 'eat-click': '', 
              			'text': $filter('characters')(val.text, 25, true), 'data-value': val.value}));
              		li.addClass('dropdown-result');
                      li.addClass('dropdown-result-selectable');
                      
                      if(val.selected){
                      	li.addClass('dropdown-highlighted');
                      }
                      
                      li.data('dropdown-data', {css: undefined, element: $(val), id: val.value, text: val.text} );
              		ul.append(li);
              		
              	});
              	
              	
              	iAttrs.$observe('quickLinksWidth', function (val) {
              		iElement.css('width', parseInt(val || 200, 10));
              		iElement.find('ul').css('width', parseInt(val || 200, 10) + 6);
                  });
              	
              	iAttrs.$observe('quickLinksQs', function (val) {
              		
              		if(val){
              			var qsVar = loadPageVar(val);
	                		
	                		if(qsVar.length){
	                			
	                			//find the select element and set its value
	                			iElement.find('select option').filter(function(){
	                    			return $ng.element(this).val() == qsVar;
	                    		}).prop('selected', true);
	                			//set the top level link equal to the correct link
	                			iElement.find('.dropdown-toggle').text(iElement.find('select option:selected').text()).attr('data-value',qsVar);
	                			scope.$emit('quickLinksChanged', select);
	                		} else {
	                			iElement.find('.dropdown-toggle').text(select.find('option').get(0).text).attr('data-value','');
	                		}
              		
              		}
                  });
              	
              	var ddlInput = $ng.element('<input type="text" tabindex="-1" class="dropdown-input" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off" />');
              	ddlInput.on('keydown', $ng.bind(controller, function(e){
              		if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                          // prevent the page from scrolling
                          killEvent(e);
                          return;
                      }
              		
              		 switch (e.which) {
	                         case KEY.UP:
	                         case KEY.DOWN:
	                             this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
	                             killEvent(e);
	                             return;
	                         case KEY.ENTER:
	                             this.selectHighlighted();
	                             killEvent(e);
	                             return;
	                         case KEY.TAB:
	                             this.selectHighlighted({noFocus: true});
	                             return;
	                         case KEY.ESC:
	                        	 
	                             this.cancel(e);
	                             killEvent(e);
	                             return;
	                     }
              		
              	})).on('focus', $ng.bind(controller, function(){
              		
              		ddlInput.addClass("dropdown-focused");
              		
              	})).on('blur', $ng.bind(controller, function(){
              		
              		ddlInput.removeClass("dropdown-focused");
              		
              	})).on('keyup-change input paste', $ng.bind(controller, function(){
              		
              		
              	}));
              	
              	installKeyUpChangeEvent(ddlInput);
              	

              	var liveRegion = $ng.element('<span>', {
              		role: 'status',
              		'aria-live': 'polite'
              	});
              	
              	
              	scope.focuser = focuser;
              	var template = liveRegion.add(topLink).add(ul).add(ddlInput);
              	$compile(template)(scope);
              	
              	iElement.append(template);
              	iElement.find('.dropdown-toggle').data('dropdown-data', data);

              }
          };
      }
      

	  directives.directive('quickLinks', ['$compile', '$location', '$filter', Directive]);
	
	
});