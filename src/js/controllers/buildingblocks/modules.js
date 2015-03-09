define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function green(){
		
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
			   '<nav role="navigation">',
			   '  <div class="navbar">',
			   '    <div class="navbar-inner">',
			   '      <div class="container" id="exampleglobalnav">',
			   '        <div class="nav-collapse">',
			   '          <ul class="nav">',
			   '            <li class="dropdown">',
			   '              <a href="">Alerts and Subscriptions</a>',
			   '                <ul class="dropdown-menu">',
			   '                  <li><a href="">Bill Alerts</a></li>',
			   '                  <li><a href="">Outage Alerts</a></li>',
			   '                  <li><a href="">Newsletter</a></li>',
			   '                </ul>',
			   '            </li>',
			   '            <li class="dropdown">',
			   '              <a href="">Top Level Item</a>',
			   '              <ul class="dropdown-menu">',
			   '                <li><a href="">Secondary Item A</a></li>',
			   '                <li><a href="">Secondary Item B</a></li>',
			   '                <li><a href="">Secondary Item C</a></li>',
			   '              </ul>',
			   '            </li>',
			   '            <li class="dropdown">',
			   '              <a href="">Another Top Level Item</a>',
			   '              <ul class="dropdown-menu">',
			   '                <li><a href="">Secondary Item D</a></li>',
			   '                <li><a href="">Secondary Item E</a></li>',
			   '                <li><a href="">Secondary Item F</a></li>',
			   '              </ul>',
			   '             </li>',
			   '           </ul>',
			   '         </div>',
			   '       </div>',
			   '     </div>',
			   '   </div>',
			   '</nav>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Green Button html',
			tooltip_c: tooltipBase + 'Green Button css'
		};
	}
	
	function blue(){
		
    	
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
			tooltip_h: tooltipBase + 'Blue Button html',
			tooltip_c: tooltipBase + 'Blue Button css'
		};
	}
	
	
	
	function Controller ($scope, $window){
		
		var _map = {
			0: 'green',
			1: 'blue'
		};
		
		$scope.viewModel = {
			green: green(),
			blue: blue()
		};	
		
		$scope.updateUrl = function(idx){
			$location.search('', _map[idx]);
		};
		
		$scope.prettyprint = function(tab){
			
			$window.prettyPrint && prettyPrint();
			$scope.viewModel[tab].collapsed = !$scope.viewModel[tab].collapsed;
			
		};
		
		return this;
	}
		
	Controller.prototype = {
			
	};
		
	controllers.controller('modulesCtrl', ['$scope', '$window', '$location', Controller]);
		
	
});