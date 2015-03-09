define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.tooltips', {
				url: '/tooltips',
				templateUrl: 'buildingblocks/tooltips/buildingblocks.tooltips.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'informational', text: 'Informational', idx: 0},
					    {href: 'definition', text: 'Definition', idx: 1}
					];
					
					$scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.tooltips.items');
			        });
				}
			})
			.state('buildingblocks.tooltips.items', {
				url: '/?style',
				reloadOnSearch: false,
				views: {
					'informational': {
						templateUrl: 'buildingblocks/tooltips/buildingblocks.tooltips.informational',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'definition': {
						templateUrl: 'buildingblocks/tooltips/buildingblocks.tooltips.definition',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					}
				}
			}); 
		
	});
	
	
});