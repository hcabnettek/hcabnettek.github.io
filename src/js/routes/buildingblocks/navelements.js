define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.navs', {
				url: '/navs',
				templateUrl: 'buildingblocks/navs/buildingblocks.navs.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'global', text: 'Global Navigation', idx: 0},
					    {href: 'utility', text: 'Utility Navigation', idx: 1},
					    {href: 'iwouldliketo', text: 'I would like to:', idx: 2},
					    {href: 'accountselector', text: 'Account Selector', idx: 3}
					];
					
					
					$scope.setState = function (stateID) {
			            $rootScope.$state.go(stateID);
			        };
			        
			        $scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.navs.items');
			        });
				}
			 
			}).state('buildingblocks.navs.items', {
				url: '/?nav',
				reloadOnSearch: false,
				views: {
					'global': {
						templateUrl: 'buildingblocks/navs/buildingblocks.navs.global',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'utility': {
						templateUrl: 'buildingblocks/navs/buildingblocks.navs.utility',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'iwouldliketo': {
						templateUrl: 'buildingblocks/navs/buildingblocks.navs.iwouldliketo',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
								
						     });
						}
					},
					'accountselector': {
						templateUrl: 'buildingblocks/navs/buildingblocks.navs.accountselector',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
															
						     });
						}
					}
				}
			}); 

		
	});
	
	
});