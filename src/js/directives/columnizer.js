define([
        './module', 
        'columnizer'
        ], function(directives){
	'use strict';
	
	function safeApply(scope, fn) {
        (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
	};
	
	function Directive (){
	
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
		
		Controller.prototype = {
				
		};
		
		
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
	
	
	directives.directive('columnizer', [Directive]);
	
});