define(['maaui'], function(routes){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function printerfriendly(){
	
		function _css(){
			return [
			   '',
					  ].join('\n');
		}
		
		function _html(){
			return [
			   '<a class="print-link" href="javascript:print()">',
			   '  <img alt="Print this page" class="printer" src="images/Iconography.png" />',
			   '  <span>Printer Friendly Version</span>',
			   '</a>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Print Friendly Pages html',
			tooltip_c: tooltipBase + 'Print Friendly Pages css'
		};
	}
	
	function Controller ($scope, $window, $location, $rootScope){
		
		$scope.viewModel = {
			printerfriendly: printerfriendly()
		};	
		
		$scope.prettyprint = function(item){
			
			$window.prettyPrint && prettyPrint();
			$scope.viewModel[item].collapsed = !$scope.viewModel[item].collapsed;
			
		};
		
		$scope.$on('$viewContentLoaded', function(event){
			
			var appCtrl = $scope.$parent.$parent.$parent;
			
			var title = 'Buildingblocks | Printer Friendly Pages';
			appCtrl.setWindowTitle(title);
			
        });
		
		return this;
	}
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.printerfriendly', {
				url: '/printerfriendly',
				templateUrl: 'buildingblocks/printerfriendly/buildingblocks.printerfriendly.index',
				controller: ['$scope', '$window', '$location', '$rootScope', Controller]
			}); 
		
	});
	
	
});