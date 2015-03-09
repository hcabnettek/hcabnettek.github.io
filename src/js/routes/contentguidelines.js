define(['maaui'], function(routes){
	'use strict';
	
	var titleFunc = function(scope, area){
		var appCtrl = scope.$parent.$parent.$parent;
		var title = 'Content Guidelines | ' + area;
		appCtrl.setWindowTitle(title);
	};
	
	return routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('contentguidelines', {
				abstract: true,
				url: '/contentguidelines',
				templateUrl: 'contentguidelines/contentguidelines.index'
			})
			.state('contentguidelines.voiceandmood', {
				url: '/voiceandmood',
				templateUrl: 'contentguidelines/contentguidelines.voiceandmood',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Voice and Mood');
			        });
				}
			 
			})
			.state('contentguidelines.copyandlanguage', {
				url: '/copyandlanguage',
				templateUrl: 'contentguidelines/contentguidelines.copyandlanguage',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Copy and Language');
			        });
				}
			 
			})
			.state('contentguidelines.glossary', {
				url: '/glossary',
				templateUrl: 'contentguidelines/contentguidelines.glossary',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Glossary');
			        });
				}
			 
			})			
			.state('contentguidelines.docindex', {
				url: '/docindex',
				templateUrl: 'contentguidelines/contentguidelines.docindex',
				controller: function($scope, $rootScope){
					
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'Index');
			        });
				}
			 
			})			
			;
		
	});
	
	
});