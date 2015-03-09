define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.alertsandmessages', {
				url: '/alertsandmessages',
				templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'technology', text: 'Technology', idx: 0},
					    {href: 'hardandsoft', text: 'Hard and Soft', idx: 1},
					    {href: 'fielderror', text: 'Field Error', idx: 2},
					    {href: 'eligibility', text: 'Eligibility', idx: 3},
					    {href: 'bill', text: 'Bill', idx: 4},
					    {href: 'success', text: 'Success', idx: 5},
					    {href: 'informational', text: 'Informational', idx: 6},
					    {href: 'promotional', text: 'Promotional', idx: 7}
					];
					
			        
			        $scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.alertsandmessages.items');
			        });
				}
			})
			.state('buildingblocks.alertsandmessages.items', {
				url: '/?type',
				reloadOnSearch: false,
				views: {
					'technology': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.technology',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'hardandsoft': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.hardandsoft',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'fielderror': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.fielderror',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'eligibility': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.eligibility',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'bill': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.bill',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'success': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.success',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'informational': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.informational',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'promotional': {
						templateUrl: 'buildingblocks/alertsandmessages/buildingblocks.alertsandmessages.promotional',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					}
				}
			}); 
		
	});
	
	
});