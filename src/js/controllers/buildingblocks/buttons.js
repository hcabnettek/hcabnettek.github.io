define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function green(){
		
		function _css(){
			return [
			   '.btn-success  {',
			   '    background-color: #37803d;',
			   '    color: #FFFFFF;',
			   '    padding: 13px 15px;',
			   '    position: relative',			   
			   '}',
			   '',
			   'caret-btn::after  {',
			   '    content: url("../images.WhiteCarat.png");',
			   '    padding-left: 10px',
			   '}',				   
			   '',
			   '.btn  {',
			   '    border-radius: 5px;',
			   '}'].join('\n');
		}
		
		function _html(){
			
			return [
			   '<button class="btn btn-success caret-btn" type="button">Make a Payment</button>'
			  ].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Green Button html',
			tooltip_c: tooltipBase + 'Green Button css'
		};
	}
	
	function blue(){

		function _css(){
			return [
			   '.btn-info:hover .btn-logout:hover  {',
			   '    background-color: #17396c;',
			   '}',
			   '',
			   '.btn-info .btn-logout  {',
			   '    background-color: #0878b5;',
			   '    color: #FFFFFF;',
			   '    position: relative',			   
			   '}',
			   '',			   
			   '.btn-info  {',
			   '    padding: 13px 15px;',
			   '}',	
			   '',			   
			   '.btn-logout  {',
			   '    padding: 6px 12px;',
			   '}',
			   '',
			   'caret-btn::after  {',
			   '    content: url("../images.WhiteCarat.png");',
			   '    padding-left: 10px',
			   '}',	
			   '',
			   '.btn  {',
			   '    border-radius: 5px;',
			   '}'].join('\n');
		}
		
		function _html(){
					
			return [
			        '<button class="btn btn-info" type="button">Back</button>',
			        '<button class="btn btn-logout caret-btn" type="button">Log Out</button>',
			        '<button class="btn btn-logout" type="button">Submit Message</button>',
			        ].join('\n');
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Blue Button html',
			tooltip_c: tooltipBase + 'Blue Button css'
		};
	}
	
	function white(){
		
		function _css(){
			return [
			   '.btn-subscribe  {',
			   '    background-color: #FFFFFF;',
			   '    color: #0878b5;',
			   '    margin: 1.3em 2em 0 0;',
			   '    border-width: 1px;',
			   '    border-style: solid',
			   '    border-color: #f1f1f1 #cfcfcf #cfcfcf #f1f1f1;',
			   '}',	   
			   '',
			   '.btn  {',
			   '    border-radius: 5px;',
			   '}'].join('\n');
		}
		
		function _html(){
			
			return [
			   '<button class="btn btn-subscribe" type="button">Edit Profile Email</button>'
			  ].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'White Button html',
			tooltip_c: tooltipBase + 'White Button css'
		};
	}
		
	
	function Controller ($scope, $window, $location, $rootScope){
		
		var _map = {
			0: 'green',
			1: 'blue',
			2: 'white'
		};
		
		$scope.viewModel = {
			green: green(),
			blue: blue(),
			white: white()			
		};	
		
		$scope.updateUrl = function(idx){
			$rootScope.$stateParams.color = _map[idx];
			$location.search('color', $rootScope.$stateParams.color);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Buttons | ' + appCtrl.capital($rootScope.$stateParams.color);
			appCtrl.setWindowTitle(title);
		};
		
		$scope.prettyprint = function(tab){
			
			$window.prettyPrint && prettyPrint();
			$scope.viewModel[tab].collapsed = !$scope.viewModel[tab].collapsed;
			
		};
		
		return this;
	}
		
	Controller.prototype = {
			
	};
		
	controllers.controller('buttonsCtrl', ['$scope', '$window', '$location', '$rootScope', Controller]);
		
	
});