define([
        './module'
        ], function(directives){
	'use strict';
	
	function safeApply(scope, fn) {
        (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
	}
	
	function Directive($q) {
	  
	   var controller = function($scope, $element, $attrs){
		
	  		this.strategies = {
	  			3 :	 {
	      			step1: {src:'images/stepindicator/step1-3.png', alt:'Step 1 of 2'},
	      			step2: {src:'images/stepindicator/step2-3.png', alt:'Step 2 of 2'},
	      			step3: {src:'images/stepindicator/step3-3.png', alt:'Success'}
	      		},
	      		
	      		4 :	 {
	      			step1: {src:'images/stepindicator/step1-4.png', alt:'Step 1 of 3'},
	      			step2: {src:'images/stepindicator/step2-4.png', alt:'Step 2 of 3'},
	      			step3: {src:'images/stepindicator/step3-4.png', alt:'Step 3 of 3'},
	      			step4: {src:'images/stepindicator/step4-4.png', alt:'Success'}
	      		},
	      		
	      		5 :	 {
	      			step1: {src:'images/stepindicator/step1-5.png', alt:'Step 1 of 4'},
	      			step2: {src:'images/stepindicator/step2-5.png', alt:'Step 2 of 4'},
	      			step3: {src:'images/stepindicator/step3-5.png', alt:'Step 3 of 4'},
	      			step4: {src:'images/stepindicator/step4-5.png', alt:'Step 4 of 4'},
	      			step5: {src:'images/stepindicator/step5-5.png', alt:'Success'}
	      		},
	      		
	      		6 :	 {
	      			step1: {src:'images/stepindicator/step1-6.png', alt:'Step 1 of 5'},
	      			step2: {src:'images/stepindicator/step2-6.png', alt:'Step 2 of 5'},
	      			step3: {src:'images/stepindicator/step3-6.png', alt:'Step 3 of 5'},
	      			step4: {src:'images/stepindicator/step4-6.png', alt:'Step 4 of 5'},
	      			step5: {src:'images/stepindicator/step5-6.png', alt:'Step 5 of 5'},
	      			step6: {src:'images/stepindicator/step6-6.png', alt:'Success'}
	      		},
	      		
	      		7 :	 {
	      			step1: {src:'images/stepindicator/step1-7.png', alt:'Step 1 of 6'},
	      			step2: {src:'images/stepindicator/step2-7.png', alt:'Step 2 of 6'},
	      			step3: {src:'images/stepindicator/step3-7.png', alt:'Step 3 of 6'},
	      			step4: {src:'images/stepindicator/step4-7.png', alt:'Step 4 of 6'},
	      			step5: {src:'images/stepindicator/step5-7.png', alt:'Step 5 of 6'},
	      			step6: {src:'images/stepindicator/step6-7.png', alt:'Step 6 of 6'},
	      			step7: {src:'images/stepindicator/step7-7.png', alt:'Success'}
	      		},
	      		
	      		8 :	 {
	      			step1: {src:'images/stepindicator/step1-8.png', alt:'Step 1 of 7'},
	      			step2: {src:'images/stepindicator/step2-8.png', alt:'Step 2 of 7'},
	      			step3: {src:'images/stepindicator/step3-8.png', alt:'Step 3 of 7'},
	      			step4: {src:'images/stepindicator/step4-8.png', alt:'Step 4 of 7'},
	      			step5: {src:'images/stepindicator/step5-8.png', alt:'Step 5 of 7'},
	      			step6: {src:'images/stepindicator/step6-8.png', alt:'Step 6 of 7'},
	      			step7: {src:'images/stepindicator/step7-8.png', alt:'Step 7 of 7'},
	      			step8: {src:'images/stepindicator/step8-8.png', alt:'Success'}
	      		}
	  		};
  		
	  		return this;
	   };
  	
	  	return {
	        restrict: 'A',
	        controller: controller,
	        scope: true,
	        link: function (scope, iElement, iAttrs, controller) {
	        	
	        	var stepNum = scope.$eval(iAttrs.stepIndicator),
	        		steps = scope.$eval(iAttrs.stepIndicatorSteps) || 2,
	        		viewModel = controller.strategies[steps]['step'+stepNum];
	        	
	        	var	template = angular.element('<img src="' +  viewModel.src +'" alt="'+ viewModel.alt +'" />');
	        	
	        	
	        	
	        	safeApply(scope, function(){
	        		iElement.replaceWith(template);
	        	})
	        	
	        		
	        }
	    };
	}

	directives.directive('stepIndicator', [Directive]);
		
});