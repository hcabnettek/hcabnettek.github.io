define([
        './module', 
        'hoverIntent', 
        'easing'
        ], function(directives){
	'use strict';
	
	function safeApply(scope, fn) {
        (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
	};
	
	function Directive (){
	
		function Controller($scope, $element){
			
			 this.api = {
                hoverIn : function(){

                    $element
                        .find('.dropdown-menu')
                        .first()
                        .stop(true, true)
                        .slideDown('150', 'easeOutExpo')
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
		
		Controller.prototype = {
				
		};
		
		
		return {
			 restrict: 'A',
             controller: Controller,
             link: function(scope, iElement, iAttrs, controller){

                 iElement.hoverIntent({
                     over: controller.api.hoverIn,
                     out: controller.api.hoverOut,
                     interval:100

                 });
                 
                 iElement.on('click', 'li a', function(){
                	 controller.api.hoverOut();
                 });
             }
		};
	}
	
	
	directives.directive('hoverMenu', [Directive]);
	
});