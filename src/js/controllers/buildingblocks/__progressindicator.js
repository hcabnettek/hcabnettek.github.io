define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function basic(){
		
		var 
			css = '.dropdown .dropdown-menu {\n\t' +
        	'box-shadow: 0 3px 5px #ccc;\n\t' +
        	'border: 1px sold #ccc;\n\t' + 
        	'padding: 10px;\n\t' + 
        	'border-top: none; \n} \n\n .dropdown-menu { \n\t' +
        	'top: 100%; \n\tleft: 0; \n\tbackground-color: #fff; \n\t' +
        	'border-radius: 0 0 3px 3px; \n\tmargin: 0; \n } \n\n' + 
        	'.dropdown-menu > li:nth-child(odd) { \n\tbackground: #f3fafd;\n}\n\n' +
        	'.dropdown-menu > li:nth-child(even) { \n\tbackground: #fff;\n}';
		
		function _html(){
			
			return [
			   ''
			   ].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Basic Table html',
			tooltip_c: tooltipBase + 'Basic Table css'
		};
	}
	
	function multicolumn(){
		
    	
		var css = '.dropdown .dropdown-menu {\n\t' +
    	'box-shadow: 0 3px 5px #ccc;\n\t' +
    	'border: 1px sold #ccc;\n\t' + 
    	'padding: 10px;\n\t' + 
    	'border-top: none; \n} \n\n .dropdown-menu { \n\t' +
    	'top: 100%; \n\tleft: 0; \n\tbackground-color: #fff; \n\t' +
    	'border-radius: 0 0 3px 3px; \n\tmargin: 0; \n } \n\n' + 
    	'.dropdown-menu > li:nth-child(odd) { \n\tbackground: #f3fafd;\n}\n\n' +
    	'.dropdown-menu > li:nth-child(even) { \n\tbackground: #fff;\n}';
		
		function _html(){
					
			return [
			   '<div class="topHeader">',
			   '  <div class="container top-header">',
			   '    <div class="top-header-navbar">',
			   '      <ul class="list-inline">',
			   '        <li><a href="#" class="sdgecom">SDGE.com</a></li>',
			   '        <li><a href="#">Contact Us</a></li>',
			   '        <li><a href="#">Manage My Account</a></li>',
			   '      </ul>',
			   '    </div>',
			   '  </div>',
			   '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Multi-Column Table html',
			tooltip_c: tooltipBase + 'Multi-Column Table css'
		};
	}
	
	
	
	function Controller ($scope, $window){
		
		var _map = {
			0: 'basic',
			1: 'multicolumn'
		};
		
		$scope.viewModel = {
			basic: basic(),
			multicolumn: multicolumn()
		};	
		
		$scope.updateUrl = function(idx){
			$location.search('', _map[idx]);
		};
		
		$scope.prettyprint = function(tab){
			
			$window.prettyPrint && prettyPrint();
			$scope.viewModel[tab].collapsed = !$scope.viewModel[tab].collapsed;
			
		};
		
		$scope.$on('$viewContentLoaded', function(event){
			
			var appCtrl = $scope.$parent.$parent.$parent;
			
			var title = 'Buildingblocks | Progress Indicator';
			appCtrl.setWindowTitle(title);
        });
		
		return this;
	}
		
	Controller.prototype = {
			
	};
		
	controllers.controller('progressindicatorCtrl', ['$scope', '$window', '$location', '$rootScope', Controller]);
		
	
});