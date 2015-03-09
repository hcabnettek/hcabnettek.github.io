!function(ng){

	function safeApply(scope, fn) {
        (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
	};
	
    var module = ng.module('maauiStyleGuide.directives', []);
/*
    (function($ng, $module){

        function Directive($compile){

            function Controller($scope){

            	
            	
            	
            	return this;
            }

            return {
                restrict: 'A',
                controller: Controller,
                link: function(scope, iElement, iAttrs, controller){

                	var isCss = iElement.html().toLowerCase().indexOf('css') > -1,
                		clipboard = isCss ? scope.viewModel.css: scope.viewModel.html;
                	
                	scope.tooltip = 'Copy ' + (isCss ? 'css': 'html') + ' to the clipboard!';
                	iElement.zeroclipboard({
                		dataRequested: function(e, setText){
                			
                			
                			setText(clipboard);
                		},
                		
                		complete: function(){
                			var _cur = iElement.html(),
                			 _old = scope.tooltip;
                			scope.tooltip = (isCss? 'Css': 'Html') + ' was copied to the clipboard!';
                			iElement.toggleClass('btn-info btn-success').html((isCss ? 'Css': 'Html') + ' was copied to clipboard!');
                			setTimeout(function(){
                				iElement.toggleClass('btn-info btn-success').html(_cur);
                				scope.tooltip = _old;
                			}, 3500);
                			
                		}
                		
                	});
                   
                   
                }
            };
        }

        $module.directive('copyButton', [ Directive]);


    (function($ng, $module){

        function Directive(){

            function Controller($scope, $element){

                this.api = {
                    hoverIn : function(){

                        $element
                            .find('.dropdown-menu')
                            .first()
                            .stop(true, true)
                            .slideDown('200', 'easeOutExpo')
                            .css('cursor', 'pointer');

                    },
                    hoverOut: function(){

                        $element
                            .find('.dropdown-menu')
                            .first()
                            .stop(true, true)
                            .hide()
                            .css('cursor', 'default');

                    }
                };

                return this;
            }

            return {
                restrict: 'A',
                controller: Controller,
                link: function(scope, iElement, iAttrs, controller){

                    iElement.hoverIntent({
                        over: controller.api.hoverIn,
                        out: controller.api.hoverOut,
                        interval:100

                    });
                }
            };
        }

        $module.directive('hoverMenu', [Directive]);

    })(ng, module);

    (function($ng, $module){

        function Directive(){

            function Controller($scope, $element, $attrs){

                //**** css classes *****
                // columnbreak
                // dontsplit
                // dontend
                // removeiffirst
                // removeiflast


                var _defaults = {
                    columns : 2,
                    callback : function(){},
                    onResize: true
                }


                this.api = {

                };

                return this;
            }

            return {
                restrict: 'A',
                controller: Controller,
                link: function(scope, iElement, iAttrs, controller){

                    if(Modernizr.csscolumns){
                        iElement.columnize({columns: parseInt(iAttrs.columnizer) || 2})

                    }
                }
            };
        }

        $module.directive('columnizer', [Directive]);

    })(ng, module);

    //QuickLinks
    (function ($ng, $module) {

        function Directive($compile, $routeParams, $location) {
        	
        	function loadPageVar(sVar){
        	
        		return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + 
        				"(?:\\=([^&]*))?)?.*$","i"), "$1"));
        	}
        	
        	function controller($scope, $element, $attrs){
        		
        		this.toggle = function(e){
        			
        			$element.find('.dropdown-toggle').trigger('click');
        		};
        		
        	
        		return this;
        	}
        	
        	return {
                restrict: 'A',
                scope: true,
                controller: controller,
                link: function (scope, iElement, iAttrs, controller) {
                	
                	scope.selectItem = function(evt){
                		
                		var link = $ng.element(evt.currentTarget);
                		//set the dropdown
                		iElement.find('select option').filter(function(){
                			return $ng.element(this).val() == link.attr('data-value');
                		}).prop('selected', true);
                		
                		iElement.find('.dropdown-toggle')
                			.text(iElement.find('select option:selected').text())
                			.attr('data-value', link.attr('data-value'));
						scope.$emit('quickLinksChanged', select);
                	};
                	
                	function topLinkData($select){
                		
                		var item = select.find(':selected').length ? select.find(':selected').get(0) : select.find('option').get(0);
                		
                		
                		return {
                			text: item.text || 'Please choose...',
                			data: item.value || 'Unknown'
                		};
                	}
                		
                	var select = iElement.find('select'),
                		label = $ng.element('label[for=' + select.attr('id') + ']'),
                		data = topLinkData(select),
                		topLink = $ng.element('<a class="dropdown-toggle" aria-expanded="false" href="#" data-value="' + data.data + '">' + data.text + '</a>'),
                		ul = $ng.element('<ul class="dropdown-menu" role="menu"></ul>');
                	
                	
                	label.on('click.dropdown.data-api', function(e){
                		
                		e.stopPropagation();
                		e.preventDefault();
                		select.focus();
                		
                	});
                	
                	select
                		.on('focus', function(e){
                			
                			
                			controller.toggle(e);
                		})
                		.on('focusout',function(e){
                			
                			
                			//controller.toggle(e);
                		});
                	
                	$ng.forEach(select.find('option'), function(val, idx){
                		
                		var li = $ng.element('<li/>');
                		li.append($ng.element('<a />', {'ng-click': 'selectItem($event)', 'eat-click': '', 'text': val.text, 'data-value': val.value}));
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
                	
                	var template = topLink.add(ul);
                	$compile(template)(scope);
                	
                	iElement.append(template);
                	

                }
            };
        }

        $module.directive('quickLinks', ['$compile', '$routeParams', '$location', Directive]);

    })(ng, module);
    
    //jq-datepicker
    (function ($ng, $module) {
    	
    	function Directive($q) {
        	
        	function controller($scope){
        		
        		this.getMaxRows = function(){
        			
        			var deferred = $q.defer();
        			setTimeout(function(){
        				
        				$scope.$apply(function(){
        					var tables = $ng.element('.ui-datepicker-group table tbody');
            				deferred.resolve($scope.max($scope.map(tables, function(tbody){
            					return tbody.childElementCount;
            				})));
        				});
        				
            		}, 0);
        			
        			return deferred.promise;
        			
        		};
        		
        		this.updateBorderHeight = function(rows){
        			
        			var containers = $ng.element('.ui-datepicker-group');
        			
        			(rows>5)? containers.addClass('big'): containers.removeClass('big');
        		}
        		
        		return this;
        	}
        	
        	return {
                restrict: 'A',
                controller: controller,
                link: function (scope, iElement, iAttrs, controller) {
                	
                	var row = iElement.closest('.row-fluid'),
                		curPaddingBottom = row.css('paddingBottom');
                	iElement.datepicker({ 
                		beforeShow: function(tb, instance){
                			
                			controller.getMaxRows().then(function(maxRows){
                				controller.updateBorderHeight(maxRows);
                			});
                			
                			
                			row.addClass('extended');
                			
                			var offset = $ng.element('.ui-datepicker-trigger').offset();
                			
                			setTimeout(function(){
                				instance.dpDiv.css({
                    				top: offset.top + 51,
                    				left: offset.left - 236
            		            });
                			}, 0);
                			
                			
                		},
                		onClose: function(date, el){
                			
                			row.removeClass('extended');
                			
                		},
                		onChangeMonthYear: function(year, month, datepicker){

                			controller.getMaxRows().then(function(maxRows){
                				controller.updateBorderHeight(maxRows);
                			});
                			
                		}
                	});
                }
            };
        }

        $module.directive('jqDatepicker', ['$q', Directive]);

    })(ng, module);
*/
    //maaui tooltip
    (function ($ng, $module) {
    	
    	function Directive($rootScope, $q, $modal, $document) {
        	
        	function controller($scope, $element, $attrs){
        		
        		this.closeTooltip = function(e){
        			
        			
        			
        			$ng.element('.tt-large').each(function(idx, val){
            			
        				
            			if(!($ng.element(this).is(e.target) || $ng.element(this).has(e.target).length > 0)
            				&& $ng.element(this).siblings('.tooltip').length !== 0
            				&& $ng.element(this).siblings('.tooltip').has(e.target).length === 0) {
            			
            				//Remove the popover element from the DOM 
            				var tip = $ng.element(this);
            				tip.siblings('.tooltip').remove();
                            //Set the state of the popover in the scope to reflect this          
                            tip.scope().tt_isOpen = false;
                            
                           
                            //todo: revisit this. set the focus after closing tooltip
                            /*
                            if(tip.parent().prop('tagName')=== 'a'){
                            	 tip.parent().focus();
                            	
                            } else {
                            	 tip.attr('tabindex', -1).on('blur focusout', function(){
                                 	tip.removeAttr('tabindex');
                                 }).focus();
                            }
                           
                            */
            			}
            		});
        		};
        		
        		return this;
        	}
        	
        	return {
                restrict: 'A',
                controller: controller,
                link: function (scope, iElement, iAttrs, controller) {
                	
                	
                	$document.on('click', function(e){
                		
                		controller.closeTooltip(e);
                	});
                	
                	$document.on('click', '.tooltip-inner a', function(){
                		
                		
                		//Remove the popover element from the DOM          
                        iElement.siblings('.tooltip').remove();
                        //Set the state of the popover in the scope to reflect this          
                        iElement.scope().tt_isOpen = false;
                        
                        //iElement.closest('a').focus();
                       
                	});
                }
            };
        }

        $module.directive('maauiTooltip', ['$rootScope','$q', '$modal', '$document', Directive]);

    })(ng, module);
    
    
    //tooltipHtmlUnsafe override AngularUIBootstrap
    (function ($ng, $module) {
    	
    	function Directive($rootScope, $q, $modal) {
        	
        	function controller($scope, $element){
        		
        		
        		
        		return this;
        	}
        	
        	
        	
        	return {
                restrict: 'A',
                controller: controller,
                priority: 100,
                link: function (scope, iElement, iAttrs, controller) {
                	
                	scope.$watch('tt_isOpen', function(tooltipOpen){
                		
                		if(tooltipOpen){
                			var $tip = iElement.next();
                    		if($tip.length){
                    			$tip.setUniqueId();
                    			$tip.attr('role', 'tooltip');
                    			safeApply(scope, function(){
                    				iElement.attr('aria-describedby', $tip.attr('id'));
                    			});
                    			
                    		}
                    		
                		} else {
                			iAttrs.$set('aria-describedby', '');
                		}
                		
                	});
                	
                	$ng.element('<span />', {"class":"spokenOnly", "html": $ng.element(iAttrs.tooltipHtmlUnsafe).not('a')}).insertBefore(iElement);
                	
                }
            };
        }

        $module.directive('tooltipHtmlUnsafe', ['$tooltip', Directive]);

    })(ng, module);
}(angular);