define(['maaui'], function(routes){
	'use strict';
	
	var tooltipBase = 'Click to copy ';
	
	function progressindicator(){
	
		function _css(){
			return [
			   '',
					  ].join('\n');
		}
		
		function _html(){
		
			return [
			   '<div step-indicator="2" step-indicator-steps="3"></div>',
			   '<hgroup>',
			   '  <h1>Online Automatic Payments</h1>',
			   '  <h2>Step 2 of 2: Confirm Payment Information</h2>',
			   '</hgroup>'
			  ].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Progress Indicator html',
			tooltip_c: tooltipBase + 'Progress Indicator css'
		};
	}
	
	function Controller ($scope, $window, $location, $rootScope){
		
		$scope.viewModel = {
			progressindicator: progressindicator()
		};	
		
		$scope.prettyprint = function(item){
			
			$window.prettyPrint && prettyPrint();
			$scope.viewModel[item].collapsed = !$scope.viewModel[item].collapsed;
			
		};
		
		$scope.$on('$viewContentLoaded', function(event){
			
			var appCtrl = $scope.$parent.$parent.$parent;
			
			var title = 'Buildingblocks | Progress Indicator';
			appCtrl.setWindowTitle(title);
			
        });
		
		return this;
	}
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.progressindicator', {
				url: '/progressindicator',
				templateUrl: 'buildingblocks/progressindicator/buildingblocks.progressindicator.index',
				controller: ['$scope', '$window', '$location', '$rootScope', Controller]
			});
		/*
			.state('buildingblocks.progressindicator.underconstruction', {
				url: '/underconstruction',
				templateUrl: 'underconstruction'
			});
		*/	
		
	});
	
	
});