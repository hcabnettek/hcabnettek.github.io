define([
        './module'
        ], function(directives){
	'use strict';
	
	  function Directive($q) {
          
		  function controller($scope){
      		
      		this.getMaxRows = function(){
      			
      			var deferred = $q.defer();
      			setTimeout(function(){
      				
      				$scope.$apply(function(){
      					var tables = angular.element('.ui-datepicker-group table tbody');
          				deferred.resolve($scope.max($scope.map(tables, function(tbody){
          					return tbody.childElementCount;
          				})));
      				});
      				
          		}, 0);
      			
      			return deferred.promise;
      			
      		};
      		
      		this.updateBorderHeight = function(rows){
      			
      			var containers = angular.element('.ui-datepicker-group');
      			
      			(rows>5)? containers.addClass('big'): containers.removeClass('big');
      		};
      		
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
              			
              			var offset = angular.element('.ui-datepicker-trigger').offset();
              			
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

	  directives.directive('jqDatepicker', ['$q', Directive]);
		
});
