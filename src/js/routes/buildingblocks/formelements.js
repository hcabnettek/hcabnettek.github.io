define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.formelements', {
				url: '/formelements',
				templateUrl: 'buildingblocks/formelements/buildingblocks.formelements.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'redasterisk', text: 'Red asterisk', idx: 0},
					    {href: 'dropdown', text: 'Selection lists', idx: 1},
					    {href: 'radio', text: 'Radio buttons', idx: 2},
					    {href: 'checkbox', text: 'Checkbox', idx: 3},
					    {href: 'textbox', text: 'Text Input', idx: 4},
					    {href: 'pwstrength', text: 'Password Strength Indicator', idx: 5}
					    ];
					
					$scope.setState = function (stateID) {
			            $rootScope.$state.go(stateID);
			        };
			        
			        $scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.formelements.items');
			        });
				}
			})
			.state('buildingblocks.formelements.items', {
				url: '/?type',
				reloadOnSearch: false,
				views: {
					'redasterisk': {
						templateUrl: 'buildingblocks/formelements/buildingblocks.formelements.redasterisk',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'dropdown': {
						templateUrl: 'buildingblocks/formelements/buildingblocks.formelements.dropdown',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'radio': {
						templateUrl: 'buildingblocks/formelements/buildingblocks.formelements.radio',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'checkbox': {
						templateUrl: 'buildingblocks/formelements/buildingblocks.formelements.checkbox',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'textbox': {
						templateUrl: 'buildingblocks/formelements/buildingblocks.formelements.textbox',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					
					'pwstrength': {
						templateUrl: 'buildingblocks/formelements/buildingblocks.formelements.pwstrength',
						controller: function($scope, $rootScope){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					}
					
				}
			}); 

	});
	
	
});