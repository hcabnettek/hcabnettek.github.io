define(['./module'], function(controllers){
	'use strict';
	
	function Controller ($scope){
	
        $scope.skip = angular.bind(this, this.skip);
        $scope.focus = angular.bind(this, this.focusHandler);
        $scope.blur = angular.bind(this, this.blurHandler);

        return this;
	}
	
	Controller.prototype = {
		skip: function($event) {
            var anchor = "#" + $event.target.href.split("#")[1];
            
            angular.element(anchor).attr('tabindex', -1).on('blur focusout', function(){
            	angular.element(this).removeAttr('tabindex');
            }).focus().effect('highlight', {}, 1000);
            
        },
        
        focusHandler: function($event) {

        	angular.element($event.currentTarget).closest('.skipLinks').addClass('show-on-focus');
            
        },
        
        blurHandler: function($event) {
        	
        	angular.element($event.currentTarget).closest('.skipLinks').removeClass('show-on-focus');
            
        }
    };
	
	controllers.controller('skipLinksCtrl', ['$scope', Controller]);
	
});