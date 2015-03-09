define(['maaui'], function(routes){
	'use strict';
	
	var titleFunc = function(scope, area){
		var appCtrl = scope.$parent.$parent.$parent;
		var title = 'Design Elements | ' + area;
		appCtrl.setWindowTitle(title);
	};
	
	
	return routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('designelements', {
				abstract: true,
				url: '/designelements',
				templateUrl: 'designelements/designelements.index'
			})
			.state('designelements.logos', {
				url: '/logos',
				templateUrl: 'designelements/designelements.logos',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Logos');
			        });
				}
			 
			})
			.state('designelements.colorusage', {
				url: '/colorusage',
				templateUrl: 'designelements/designelements.colorusage',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Color Usage');
			        });
				}
			 
			})
			.state('designelements.typography', {
				url: '/typography',
				templateUrl: 'designelements/designelements.typography',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Typography');
			        });
				}
			 
			})
			.state('designelements.iconography', {
				url: '/iconography',
				templateUrl: 'designelements/designelements.iconography',
				controller: function($scope, $rootScope){
					
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Iconography');
			        });
				}
			 
			})
			.state('designelements.photography', {
				url: '/photography',
				templateUrl: 'designelements/designelements.photography',
				controller: function($scope, $rootScope){
					
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Photography');
			        });
				}
			 
			});
		
	});
	
	
});