define(['../maaui'], function(routes){
	'use strict';

	var titleFunc = function(scope, area){
		var appCtrl = scope.$parent.$parent.$parent;
		var title = 'Introduction | ' + area;
		appCtrl.setWindowTitle(title);
	};

	return routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){


	//	$urlRouterProvider
		//	.otherwise('/introduction/howtogetstarted');

		$stateProvider
			.state('introduction', {
				abstract: true,
				url: '/introduction',
				templateUrl: 'introduction/introduction.index'
			})
			.state('introduction.howtogetstarted', {
				url: '/howtogetstarted',
				templateUrl: 'introduction/introduction.howtogetstarted',
				controller: function($scope, $rootScope){
					debugger;
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'How to get started');
			        });
				}

			})
			.state('introduction.aboutthisdocument', {
				url: '/aboutthisdocument',
				templateUrl: 'introduction/introduction.aboutthisdocument',
				controller: function($scope, $rootScope){
					debugger;
					$scope.$on('$viewContentLoaded', function(event){
						titleFunc($scope, 'About this document');
			        });
				}

			})

			;

		$locationProvider.hashPrefix('!');

	});


});
