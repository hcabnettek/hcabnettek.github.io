define(['./module'], function (services) {
    'use strict';

    (function ($ng, $module) {
    	
        $module.constant('maauiAppSettings', {
            name:'myAccountStyleGuide',
            imagepath:'',
            jspath: '',
            months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            monthsLong:['January','February','March','April','May','June','July','August','September','October','November','December'],
            days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        });

    })(angular, services);
    
    //moment
    (function ($services) {

        function Service($document, $q, $rootScope) {

            var deferred = $q.defer();
            
            require(['moment'], function(moment){
                
                $rootScope.$apply(function () {
                    
                    deferred.resolve(window.moment);
                });
            });
          

            return {
                moment: function() { return deferred.promise; }
            }



        }

        $services.factory('$momentService', ['$document', '$q', '$rootScope', Service]);

    })(services);
    
    //mediaCheck
    (function ($services) {

        function Service($document, $q, $rootScope) {

            var deferred = $q.defer();
            
            require(['mediaCheck'], function(mediaCheck){
                
                $rootScope.$apply(function () {
                    
                    deferred.resolve(window.mediaCheck);
                });
            });
          

            return {
                mediaCheck: function() { return deferred.promise; }
            }



        }

        $services.factory('$mediaCheckService', ['$document', '$q', '$rootScope', Service]);

    })(services);

    (function ($services) {
    	
        $services.value('keyDownValue', {});

    })(services);
    
    (function ($services) {

        function Service() {

           
        	var paymentSoureTip = function(){
        		
        		var paragraph = '<p>Payments made using My Account are identified ' +
    			'as Online under Payment Source. There are several different types of payment sources. ' +
    			'Here are a few helpful definitions for ones requiring a little more explanation.</p>',
    				item1 = '<li>Bill Matrix: Our third party provider for payments using debit/ATM cards, Electronic ' +
   			 		'Check, MasterCard or Visa credit cards.</li>',
   			 		item2 = '<li>Returned payment: Returned payment by your bank or financial institution.</li>',
   			 		item3 = '<li>Transfer payment: Payment was corrected.</li>',
   			 		list = '<ul>' + item1 + item2 + item3 + '</ul>',
   			 		close = '<a eat-click="" href="#" data-value=\'close\'>Close</a>';
        		
        		return paragraph + list + close;
        	}, currentBalanceTip = function(){
        		
        		var paragraph = '<p>Current Balance may not reflect payments ' +
    			'scheduled for today.  If your current balance is less than $100000.00, ' +
    			'it will be carried over to your next bill.  <a href="#" data-value=\'close\'>Close</a></p>';
        		
        		return paragraph;
        	}, statementDateTip = function(){
        		
        		var paragraph = '<p>Statement Date is ' +
    			'scheduled for today.  If your current balance is less than $1.00, ' +
    			'it will be carried over to your next bill.  <a href="#" data-value=\'close\'>Close</a></p>';
        		
        		return paragraph;
        	}, gasTermTip = function(){
        		
        		var paragraph = '<p>One British therm (symbol thm) is a non-SI unit of heat energy equal to 100,000 ' +
        		'British thermal units (BTU). It is approximately the energy equivalent of burning 100 cubic feet ' +
        		'(often referred to as 1 CCF) of natural gas. <a href="#" data-value="close" >Close</a></p>';
        		
        		return paragraph;
        	},	electricTermTip = function(){
        		
        		var paragraph = '<p>The kilowatt-hour (symbolized kWh) is a unit of energy equivalent to one kilowatt '+ 
    			'(1 kW) of power expended for one hour. <a href="#" data-value="close">Close</a></p>';
        		
        		return paragraph;
        	};
        	
            return {
            	paymentSourceTip: paymentSoureTip(), 
            	currentBalanceTip: currentBalanceTip(), 
            	statementDateTip: statementDateTip(),
            	gasTermTip: gasTermTip(),
            	electricTermTip: electricTermTip()
            };
        }

        $services.constant('tooltipData', Service());

    })(services);
    
    (function ($services) {

        function Service($rootScope, $q, tooltipData) {

           
            return {
            	paymentSourceTip: function(){
            		
            		return tooltipData.paymentSourceTip;
            	}, 
            	
            	currentBalanceTip: function(){
            		
            		return tooltipData.currentBalanceTip;
            	}, 
            	
            	statementDateTip: function(){
            		
            		return tooltipData.statementDateTip;
            	},
            	
            	gasTermTip: function(){
            		
            		return tooltipData.gasTermTip;
            	},
            	
            	electricTermTip: function(){
            		
            		return tooltipData.electricTermTip;
            	}
            	
            };
        }

        $services.factory('tooltipService', ['$rootScope', '$q', 'tooltipData', Service]);

    })(services);
    
    
    (function ($services) {

        function Service($q, $timeout, $rootScope) {
        	
        	var $transition = function(element, trigger, options) {
        	    options = options || {};
        	    var deferred = $q.defer();
        	    var endEventName = $transition[options.animation ? "animationEndEventName" : "transitionEndEventName"];

        	    var transitionEndHandler = function(event) {
        	      $rootScope.$apply(function() {
        	        element.unbind(endEventName, transitionEndHandler);
        	        deferred.resolve(element);
        	      });
        	    };

        	    if (endEventName) {
        	      element.bind(endEventName, transitionEndHandler);
        	    }

        	    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
        	    $timeout(function() {
        	      if ( angular.isString(trigger) ) {
        	        element.addClass(trigger);
        	      } else if ( angular.isFunction(trigger) ) {
        	        trigger(element);
        	      } else if ( angular.isObject(trigger) ) {
        	        element.css(trigger);
        	      }
        	      //If browser does not support transitions, instantly resolve
        	      if ( !endEventName ) {
        	        deferred.resolve(element);
        	      }
        	    });

        	    // Add our custom cancel function to the promise that is returned
        	    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
        	    // i.e. it will therefore never raise a transitionEnd event for that transition
        	    deferred.promise.cancel = function() {
        	      if ( endEventName ) {
        	        element.unbind(endEventName, transitionEndHandler);
        	      }
        	      deferred.reject('Transition cancelled');
        	    };

        	    return deferred.promise;
        	  };

        	  // Work out the name of the transitionEnd event
        	  var transElement = document.createElement('trans');
        	  var transitionEndEventNames = {
        	    'WebkitTransition': 'webkitTransitionEnd',
        	    'MozTransition': 'transitionend',
        	    'OTransition': 'oTransitionEnd',
        	    'transition': 'transitionend'
        	  };
        	  var animationEndEventNames = {
        	    'WebkitTransition': 'webkitAnimationEnd',
        	    'MozTransition': 'animationend',
        	    'OTransition': 'oAnimationEnd',
        	    'transition': 'animationend'
        	  };
        	  function findEndEventName(endEventNames) {
        	    for (var name in endEventNames){
        	      if (transElement.style[name] !== undefined) {
        	        return endEventNames[name];
        	      }
        	    }
        	  }
        	  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
        	  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
        	  return $transition;
           
        }

        $services.factory('$transition', ['$q', '$timeout', '$rootScope', Service]);

    })(services);
});