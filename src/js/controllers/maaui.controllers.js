!function(ng){

'use strict';
	
	var module = ng.module('maauiStyleGuide.controllers', []);
	
	module.config(['$controllerProvider', '$provide',
	               function ($controllerProvider, $provide) {

        module.lazy = {
            controller: $controllerProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

	}]);
	
	//App Controller
    (function ($ng, $module) {

        function Controller($scope,$location, $window) {

        	var $this = this;
        	$this.$scope = $scope;
        	
	    	$scope.setWindowTitle = function (title) {
	            $scope.windowTitle = title;
	
	        };  
	        $scope.toggleTooltip = $ng.bind(this, this.toggleTooltip);
            return this;
        }
        
        Controller.prototype = {
        	toggleTooltip: function(event) {
        		
        		
        		setTimeout(function(){
        			$ng.element(event.currentTarget).find('.tt-large').trigger('click');
        		}, 0);
        	}
        };
        
        $module.controller('AppCtrl', ['$scope', '$location', '$window', Controller]);
        
    })(ng, module);
    
  //SkipLinks Controller
    (function ($ng, $module) {

        function Controller($scope) {
            $scope.skip = $ng.bind(this, this.skip);
            $scope.focus = $ng.bind(this, this.focusHandler);
            $scope.blur = $ng.bind(this, this.blurHandler);

            return this;
        }
        
        Controller.prototype = {
    		skip: function($event) {
                var anchor = "#" + $event.target.href.split("#")[1];
                
                $ng.element(anchor).attr('tabindex', -1).on('blur focusout', function(){
                	$ng.element(this).removeAttr('tabindex');
                }).focus().effect('highlight', {}, 1000);
                
            },
            
            focusHandler: function($event) {

            	$ng.element($event.currentTarget).closest('.skipLinks').addClass('show-on-focus');
                
            },
            
            blurHandler: function($event) {
            	
            	$ng.element($event.currentTarget).closest('.skipLinks').removeClass('show-on-focus');
                
            }
        };
        
        $module.controller('skipLinksCtrl', ['$scope', Controller]);
        
    })(ng, module);
    
	//Header Controller
    (function ($ng, $module) {

        function Controller($scope) {
           

            return this;
        }
        
        Controller.prototype = {
            
        };
        
        $module.controller('HeaderCtrl', ['$scope', Controller]);
        
    })(ng, module);
    
	//BillSummary Controller
    (function ($ng, $module) {

        function Controller($scope, tooltipService) {
           
        	var viewModel = $scope.viewModel = {};
        	viewModel.selectedAccount = '9034672187';
        	viewModel.statementDateTip = tooltipService.statementDateTip();
        	
        	$scope.$on('quickLinksChanged', function(evt, $selectEl){
        		
        		
        		evt.stopPropagation();
        		
        		if(!isNaN($selectEl.val())){
        			viewModel.selectedAccount = $selectEl.val();
        		}
        		
        		
        	});
        	
        	return this;
        }
        
        Controller.prototype = {
           
        };
        
        $module.controller('billSummaryCtrl', ['$scope', 'tooltipService', Controller]);
        
    })(ng, module);
    
	//Payment Activity Controller
    (function ($ng, $module) {

        function Controller($scope, tooltipService) {
           
        	var viewModel = $scope.viewModel = {};
        	viewModel.paymentSourceTip = tooltipService.paymentSourceTip();
        	
        	
            return this;
        }
        
        Controller.prototype = {
           
        };
        
        $module.controller('paymentActivityCtrl', ['$scope', 'tooltipService', Controller]);
        
    })(ng, module);
    
  //OneTimePayment Controller
    (function ($ng, $module) {

        function Controller($scope) {
        	
        	$scope.bank = {
        		acctType: 'Checking'
        	};
        	
           
        	$scope.submit = function(){
        		
        		//debugger;
        	}
        	
            return this;
        }
        
        Controller.prototype = {
           
        };
        
        $module.controller('oneTimePaymentCtrl', ['$scope', Controller]);
        
    })(ng, module);
    
    
    //MakePayment Controller
    (function ($ng, $module) {
    	
    	var checkPayment = function(e){
    		
    		$ng.element(e.currentTarget).closest('tr').find(':checkbox').prop('checked', 'checked');
    		
    	};
    	
        function Controller($scope,tooltipService) {
           
        	var viewModel = $scope.viewModel = {};
        	viewModel.currentBalanceTip = tooltipService.currentBalanceTip();
        	this.$scope = $scope;
        	
        	
        	$scope.totalPayment = 0;
        	$scope.addPayments = $ng.bind(this, this.addPayments);
        	
        	$scope.doRecalc = $ng.bind(this, this.doRecalc);
        	$scope.tbFocusHandler = $ng.bind(this, this.tbFocusHandler);
        	$scope.init = $ng.bind(this, this.init);
        	
        	$scope.amount = 147.97;
        	
        	
            return this;
        }
        
        Controller.prototype = {
           addPayments: function(e){
        	   
        	   var total = 0;
         	   $ng.forEach($ng.element('#tblMakePayment :text'),function(el, idx){
         		   var tmp = parseFloat(el.value),
         		       active = $ng.element(el).closest('tr').find(':checkbox').prop('checked');
         		   
         		   if(!isNaN(tmp)){
         			   
         			   if(active){
         				   total += tmp;
         			   } else {
         				   //single account
         				   if($ng.element(el).closest('tr').find(':checkbox').length === 0){
         					  total += tmp;
         				   }
         			   }
         			   
         		   }
         	   });
         	   
         	   this.$scope.totalPayment = total.toFixed(2);
           },
           
           doRecalc: function(e){
        	   
        	   var total = 0;
        	   
         	   $ng.forEach($ng.element('#tblMakePayment :text'),function(el, idx){
         		   var tmp = parseFloat(el.value),
         		       active = $ng.element(el).closest('tr').find(':checkbox').prop('checked');
         		   
         		   if(!isNaN(tmp)){
         			   
         			   if(active)
         				   total += tmp;
         			   
         		   }
         	   });
         	   
         	   this.$scope.totalPayment = total.toFixed(2);
           },
           
           tbFocusHandler: function(e){
        	  
        	   checkPayment(e);
        	  
           },

           init: function(e){
        	  
        	   var $this = this;
        	   $ng.forEach($ng.element(':checked'), function(el, idx){
        		  $this.$scope[el.id] = true; 
        		  $this.doRecalc();
        	   });
        	  
           }
        };
        
        $module.controller('makePaymentCtrl', ['$scope', 'tooltipService', Controller]);
        
    })(ng, module);
    
  //onlineAutopayInfoCtrl Controller
    (function ($ng, $module) {
    	
    	function safeApply(scope, fn) {
            (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
    	};
   	
        function Controller($scope, $timeout) {
           
        	
        	var $this = this;
        	this.$scope = $scope;
        	this.$timeout = $timeout;
        	
        	var viewModel = $scope.viewModel = {};
        	viewModel.accounts = [
        	  {name: '23 Sequoia Tree', accountNum:'8933242668'},
        	  {name: '23 Redwood Sapling', accountNum:'9034672187'},
        	  {name: '12 Maple', accountNum:'7005673208'}
        	];
        	//$scope.activate = $ng.bind(this, this.activate);
        	
        	
        	
            return this;
        }
        
        Controller.prototype = {
    		activate: function(e){
    			//set focus to the select element
    			var select = $ng.element('#' + $ng.element(e.currentTarget).attr('for')),
    				event = select.parent().hasClass('open') ? 'blur':'focus',
    				$this = this;
    			
    			
    			
    			
    			$this.$timeout(function(){
    				safeApply($this.$scope, function(){
        				//select.trigger($ng.element.Event(event), {src: e.currentTarget});
        				
        			});
    			}, 0);
    		}
        };
        
        $module.controller('onlineAutopayInfoCtrl', ['$scope', '$timeout',Controller]);
        
    })(ng, module);
    
    
  //DropdownsCtrl Controller
    (function ($ng, $module) {
    	
    	
   	
        function Controller($scope, $timeout) {
           
        	var viewModel = $scope.viewModel = {};
        	viewModel.css = viewModel.cssCopy = '.dropdown .dropdown-menu {\n\t' +
        	'box-shadow: 0 3px 5px #ccc;\n\t' +
        	'border: 1px solid #ccc;\n\t' + 
        	'padding: 10px;\n\t' + 
        	'border-top: none; \n} \n\n .dropdown-menu { \n\t' +
        	'top: 100%; \n\tleft: 0; \n\tbackground-color: #fff; \n\t' +
        	'border-radius: 0 0 3px 3px; \n\tmargin: 0; \n } \n\n' + 
        	'.dropdown-menu > li { \n\tborder-top: #0878b5;\n}\n\n' + 
        	'.dropdown-menu > li:hover { \n\tbackground: #0078bf;\n}\n\n' + 
        	'.dropdown-menu > li:hover a { \n\tcolor: #fff;\n}';
      
        	
        	viewModel.html = viewModel.htmlCopy = '<div class="dropdown">\n\t' +
            '<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel" >\n\t\t' +
            '<li><a href="#" tabindex="-1">Action</a></li>\n\t\t' + 
            '<li><a href="#" tabindex="-1">Another action</a></li>\n\t\t' + 
            '<li><a href="#" tabindex="-1">Something else</a></li>\n\t\t' + 
            '<li><a href="#" tabindex="-1">Separated link</a></li>\n\t' + 
            '</ul>\n</div>';
        
            return this;
        }
        
        Controller.prototype = {
    		
        };
        
        $module.controller('DropdownsCtrl', ['$scope',Controller]);
        
    })(ng, module);
    
  //buildingBlocksCtrl Controller
    (function ($ng, $module) {
    	
    	
   	
        function Controller($scope, $location, $anchorScroll) {
           
        	$scope.groups = {
        		navigation: false,
        		tables: false,
        		forms: false,
        		buttons: false,
        		links: false,
        		widgets: false,
        		modules: false,
        		errors: false,
        		printer: false
        	};
        	
        	var 
        		tables = {},
        		forms = {
        			redasterisk: false,
        			textfields: false,
        			dropdowns: false,
        			radios: false,
        			checkboxes: false,
        			scheduler: false,
        			printfriendly: false
        		},
        		buttons = {
        			green: false,
        			blue: false
        		},
        		
        		widgets = {
        			quickLinks: false,
        			progressIndicator: false,
        			calendar: false,
        			scheduler: false,
        			tooltips: false,
        			alerts: false
        		},
        		viewModel = $scope.viewModel = {
        			
        			tables: tables,
        			forms: forms,
        			buttons: buttons,
        			widgets: widgets
        	};
        	
        	var paymentSoureTip = function(){
        		
        		var paragraph = '<p>This is a clickable tooltip.</p>',
    				item1 = '<li>I can contain complex html ' +
   			 		'</li>',
   			 		item2 = '<li>Click anywhere in the document body to close me.</li>',
   			 		item3 = '<li>You may click the close link as well.</li>',
   			 		list = '<ul>' + item1 + item2 + item3 + '</ul>',
   			 		close = '<a eat-click="" href="#" data-value=\'close\'>Close</a>';
        		
        		return paragraph + list + close;
        	};
        	
        	viewModel.paymentSourceTip = paymentSoureTip();
        	
        	$scope.checkAccordion = function(){
        		
        		
        		if(!$scope.isUndefined($scope.groups[window.location.hash.substr(2)])){
        			$scope.groups[window.location.hash.substr(2)] = true;
        		}
        		
        	};
        	
        	$scope.toggleTooltip = function(event){
        		
        		setTimeout(function(){
        			$ng.element(event.currentTarget).find('.tt-large').trigger('click');
        		}, 0);
        	};
        	
        	$scope.checkAccordion();
        	
        	this.$location = $location;
        	this.$anchorScroll = $anchorScroll;
        	$scope.scrollToNav = $ng.bind(this, this.scrollToNav);
            return this;
        }
        
        Controller.prototype = {
    		scrollToNav: function(){
    			
    			this.$location.hash('top');
    			this.$anchorScroll();
    		}
        };
        
        $module.controller('buildingBlocksCtrl', ['$scope', '$location', '$anchorScroll', Controller]);
        
    })(ng, module);
	
    //designElementsCtrl Controller
    (function ($ng, $module) {
    	
    	
   	
        function Controller($scope) {
           
        	$scope.groups = {
        		logos: false,
        		colors: false,
        		typography: false,
        		iconography: false,
        		photography: false
        	};
        	
        	var 
        		logos = {
        			
        		},
        		
        		colors = {
        			
        		},
        		
        		typography = {
        			
        		},
        		
        		iconography = {
        			
        		},
        		
        		photography = {
            			
        		},
        		
        		viewModel = $scope.viewModel = {
        			
        			logos: logos,
        			colors: colors,
        			typography: typography,
        			iconography: iconography,
        			photography: photography
        	};
        	
        	$scope.checkAccordion = function(){
        		
        		
        		if(!$scope.isUndefined($scope.groups[window.location.hash.substr(1)])){
        			$scope.groups[window.location.hash.substr(1)] = true;
        		};
        		
        		if(!$scope.isUndefined($scope.groups[window.location.hash.substr(2)])){
        			$scope.groups[window.location.hash.substr(2)] = true;
        		};
        	};
        	
        	
        	
        	$scope.checkAccordion();
        	
            return this;
        }
        
        Controller.prototype = {
    		
        };
        
        $module.controller('designElementsCtrl', ['$scope',Controller]);
        
    })(ng, module);
    
  //guidelinesCtrl Controller
    (function ($ng, $module) {
    	
    	
   	
        function Controller($scope) {
           
        	$scope.groups = {
        		voice: false,
        		copy: false,
        		sentence: false,
        		date: false,
        		glossary: false,
        		audiovideo: false,
        		social: false
        	};
        	
        	var 
        		voice = {
        			
        		},
        		
        		copy = {
        			
        		},
        		
        		sentence = {
        			
        		},
        		
        		date = {
        			
        		},
        		
        		glossary = {
            			
        		},
        		
        		audiovideo = {
            			
        		},
        		
        		social = {
        			
        		},
        		
        		viewModel = $scope.viewModel = {
        			
        			voice: voice,
        			copy: copy,
        			sentence: sentence,
        			date: date,
        			glossary: glossary,
        			audiovideo: audiovideo,
        			social: social
        	};
        	
        	$scope.checkAccordion = function(){
        		if(!$scope.isUndefined($scope.groups[window.location.hash.substr(1)])){
        			$scope.groups[window.location.hash.substr(1)] = true;
        		};
        		
        		if(!$scope.isUndefined($scope.groups[window.location.hash.substr(2)])){
        			$scope.groups[window.location.hash.substr(2)] = true;
        		};
        			
        	};
        	
        	
        	
        	$scope.checkAccordion();
        	
            return this;
        }
        
        Controller.prototype = {
    		
        };
        
        $module.controller('guidelinesCtrl', ['$scope',Controller]);
        
    })(ng, module);
    
}(angular);