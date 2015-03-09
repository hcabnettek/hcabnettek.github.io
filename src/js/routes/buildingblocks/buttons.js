define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.buttons', {
				url: '/button',
				templateUrl: 'buildingblocks/buttons/buildingblocks.buttons.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'green', text: 'Green Button', idx: 0},
					    {href: 'blue', text: 'Blue Button', idx: 1},
					    {href: 'white', text: 'White Button', idx: 2}
					];
					
					$scope.setState = function (stateID) {
			            $rootScope.$state.go(stateID);
			        };
			        
			        $scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.buttons.items');
			        });
				}
			})
			.state('buildingblocks.buttons.items', {
				url: '/?color',
				reloadOnSearch: false,
				views: {
					'green': {
						templateUrl: 'buildingblocks/buttons/buildingblocks.buttons.green',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'blue': {
						templateUrl: 'buildingblocks/buttons/buildingblocks.buttons.blue',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'white': {
						templateUrl: 'buildingblocks/buttons/buildingblocks.buttons.white',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					}
				}
			}); 
		
	});
	
	
});