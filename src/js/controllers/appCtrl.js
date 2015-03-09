define(['./module'], function(controllers){
	'use strict';
	
	function Controller($scope,$location, $window) {

    	$scope.setWindowTitle = function (title) {
            $scope.windowTitle = 'My Account | Style Guide | ' + title;
            
            // Scroll to the top of the page whenever the view changes
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        };
        
        $scope.capital = angular.bind(this, this.capital);
        $scope.toggleTooltip = angular.bind(this, this.toggleTooltip);
        return this;
    }
	
	Controller.prototype = {
    	toggleTooltip: function(event) {   				
    		setTimeout(function(){
    			angular.element(event.currentTarget).find('.tt-large').trigger('click');
    		}, 0);
    	},
    	//move me to a service please where I belong! =)
    	capital: function(string){
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
    };
	
	controllers.controller('AppCtrl', ['$scope', '$location', '$window', Controller]);
	
});