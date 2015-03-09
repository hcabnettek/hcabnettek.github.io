define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.tablesandlists', {
				url: '/tablesandlists',
				templateUrl: 'buildingblocks/tablesandlists/buildingblocks.tablesandlists.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'basic', text: 'Basic', idx: 0},
					    {href: 'multicolumn', text: 'Multi-Column', idx: 1}
					];
					
					$scope.setState = function (stateID) {
			            $rootScope.$state.go(stateID);
			        };
			        
			        $scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.tablesandlists.items');
			        });
				}
			})
			.state('buildingblocks.tablesandlists.items', {
				url: '/?style',
				reloadOnSearch: false,
				views: {
					'basic': {
						templateUrl: 'buildingblocks/tablesandlists/buildingblocks.tablesandlists.basic',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'multicolumn': {
						templateUrl: 'buildingblocks/tablesandlists/buildingblocks.tablesandlists.multicolumn',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					}
				}
			}); 
		
	});
	
	
});