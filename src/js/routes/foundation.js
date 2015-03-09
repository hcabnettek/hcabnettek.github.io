define(['maaui'], function(routes){
	'use strict';
	
	var titleFunc = function(scope, area){
		var appCtrl = scope.$parent.$parent.$parent;
		var title = 'Foundation | ' + area;
		appCtrl.setWindowTitle(title);
	};
	
	return routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('foundation', {
				abstract: true,
				url: '/foundation',
				templateUrl: 'foundation/foundation.index'
			})
			.state('foundation.layoutgrid', {
				url: '/layoutgrid',
				templateUrl: 'foundation/foundation.layoutgrid',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Layout Grid');
			        });
				}
			 
			})
			.state('foundation.pagetemplates', {
				url: '/pagetemplates',
				templateUrl: 'foundation/foundation.pagetemplates',
				controller: function($scope, $rootScope){
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Page Templates');
			        });
				}
			 
			})
			.state('foundation.headerfooterglobalnav', {
				url: '/headerfooterglobalnav',
				templateUrl: 'foundation/foundation.headerfooterglobalnav',
				controller: function($scope, $rootScope){
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Header, Footer, Global Navigation');
			        });
				}
			 
			})
			.state('foundation.rightrail', {
				url: '/rightrail',
				templateUrl: 'foundation/foundation.rightrail',
				controller: function($scope, $rootScope){
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Right Rail');
			        });
				}
			 
			})
			
			;
		
	});
	
	
});