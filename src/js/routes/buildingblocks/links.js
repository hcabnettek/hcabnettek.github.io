define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.links', {
				url: '/links',
				templateUrl: 'buildingblocks/links/buildingblocks.links.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'caret', text: 'Caret Link', idx: 0},
					    {href: 'standard', text: 'Standard Link', idx: 1},
					    {href: 'caretlist', text: 'Caret Link List', idx: 2}
					];
					
					$scope.setState = function (stateID) {
			            $rootScope.$state.go(stateID);
			        };
			        
			        $scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.links.items');
			        });
				}
			})
			.state('buildingblocks.links.items', {
				url: '/?style',
				reloadOnSearch: false,
				views: {
					'caret': {
						templateUrl: 'buildingblocks/links/buildingblocks.links.caret',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'standard': {
						templateUrl: 'buildingblocks/links/buildingblocks.links.standard',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'caretlist': {
						templateUrl: 'buildingblocks/links/buildingblocks.links.caretlist',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					}
				}
			}); 
		
	});
	
	
});