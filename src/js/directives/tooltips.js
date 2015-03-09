define([
        './module'
        ], function(directives){
	'use strict';
	
	var $ng = angular;
	
	function safeApply(scope, fn) {
        (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
	};
	
	(function(){
		function Directive($rootScope, $q, $modal, $document) {
	          
			  
			  
			  function controller($scope){
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

		  directives.directive('maauiTooltip', ['$rootScope','$q', '$modal', '$document', Directive]);

	}());
	
	(function(){
		  function Directive(){
			  return {
	              restrict: 'A',
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
	              	
	              	$ng.element('<span />', {'class':'spokenOnly', 'html': $ng.element(iAttrs.tooltipHtmlUnsafe).not('a')}).insertBefore(iElement);
	              	
	              }
	          };
		  }
		  directives.directive('tooltipHtmlUnsafe', ['$tooltip', Directive]);
	}());
	
	
});