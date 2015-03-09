define(['maaui'], function(routes){
	'use strict';
	
	function Controller ($scope, $window){
		
		var _map = {
			0: 'basic',
			1: 'multicolumn'
		};
		
		$scope.viewModel = {
			
		};	
		
		$scope.prettyprint = function(tab){
			
			$window.prettyPrint && prettyPrint();
			$scope.viewModel[tab].collapsed = !$scope.viewModel[tab].collapsed;
			
		};
		
		$scope.$on('$viewContentLoaded', function(event){
			
			var appCtrl = $scope.$parent.$parent.$parent;
			
			var title = 'Buildingblocks | Right Rail Modules';
			appCtrl.setWindowTitle(title);
        });
		
		return this;
	}
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.rightrailmodules', {
				url: '/rightrailmodules',
				templateUrl: 'buildingblocks/rightrailmodules/buildingblocks.rightrailmodules.index',
				controller: ['$scope', '$window', '$location', '$rootScope', Controller]
			});
			
		
	});
	
	
});