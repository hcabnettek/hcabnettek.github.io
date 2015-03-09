define(['maaui'], function(routes){
	'use strict';
	
	var titleFunc = function(scope, area){
		var appCtrl = scope.$parent.$parent.$parent;
		var title = 'About My Account | ' + area;
		appCtrl.setWindowTitle(title);		
	};
	
	return routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('aboutmyaccount', {
				abstract: true,
				url: '/aboutmyaccount',
				templateUrl: 'aboutmyaccount/aboutmyaccount.index'
			})
			.state('aboutmyaccount.myaccountoverview', {
				url: '/myaccountoverview',
				templateUrl: 'aboutmyaccount/aboutmyaccount.myaccountoverview',
				controller: function($scope, $rootScope){
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'My Account Overview');					
			        });					
				}
			
			})
			.state('aboutmyaccount.thesdgebrand', {
				url: '/thesdgebrand',
				templateUrl: 'aboutmyaccount/aboutmyaccount.thesdgebrand',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'The SDG&E Brand');
			        });
				}
			 
			})
			.state('aboutmyaccount.sdgecustomerprofiles', {
				url: '/sdgecustomerprofiles',
				templateUrl: 'aboutmyaccount/aboutmyaccount.sdgecustomerprofiles',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'SDG&E Customer Profiles');
					});
				}
			 
			})
			.state('aboutmyaccount.responsivedesign', {
				url: '/responsivedesign',
				templateUrl: 'aboutmyaccount/aboutmyaccount.responsivedesign',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Responsive Design');
					});
				}
			 
			})
			.state('aboutmyaccount.accessibility', {
				url: '/aboutthisdocument',
				templateUrl: 'aboutmyaccount/aboutmyaccount.accessibility',
				controller: function($scope, $rootScope){
										
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Accessibility');
			        });
				}
			 
			});
		
	});
	
	
});