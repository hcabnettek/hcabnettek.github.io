define(['../module'], function(controllers){
	'use strict';
	
	var tooltipBase = 'Click to copy ';
	
	function globalNav(){
		
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
			tooltip_h: tooltipBase + 'Global Nav html',
			tooltip_c: tooltipBase + 'Global Nav css'
		};
	}
	
	function utilityNav(){
		
    	
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
			tooltip_h: tooltipBase + 'Utility Nav html',
			tooltip_c: tooltipBase + 'Utility Nav css'
		};
	}
	
	function iwouldliketoNav(){
		
		function _html(){
			
			return [
				'<div class="row-fluid">',
				'  <div class="hidden-at-two">',
				'    <div class="dash-bottom quick-links-container">',
				'	  <div class="dropdown quick-links-dropdown">',
				'        <a class="dropdown-toggle" href="#">',
				'          <img alt="" src="images/i-would-like-to.png">I would like to</a>',
				'        <ul class="dropdown-menu">',
				'          <li><a href="#">Update my bank information</a></li>',
				'          <li><a href="#">Update my email address</a></li>',
				'          <li><a href="#">Add or remove an account</a></li>',
				'          <li><a href="#">Get more time to pay my bill</a></li>',
				'          <li><a href="#">Start, stop or move services</a></li>',
				'          <li><a href="#">Check my gas appliances</a></li>',
				'          <li><a href="#">Request letter of credit</a></li>',
				'          <li><a href="#">Request letter of residency</a></li>',
				'          <li><a href="#">Learn about other programs and services</a></li>',
				'        </ul>',
				'      </div>',
				'    </div>',
				'  </div>',
				'</div>'].join('\n');
			  
		}
    	
		var css = '.dropdown .dropdown-menu {\n\t' +
    	'box-shadow: 0 3px 5px #ccc;\n\t' +
    	'border: 1px sold #ccc;\n\t' + 
    	'padding: 10px;\n\t' + 
    	'border-top: none; \n} \n\n .dropdown-menu { \n\t' +
    	'top: 100%; \n\tleft: 0; \n\tbackground-color: #fff; \n\t' +
    	'border-radius: 0 0 3px 3px; \n\tmargin: 0; \n } \n\n' + 
    	'.dropdown-menu > li:nth-child(odd) { \n\tbackground: #f3fafd;\n}\n\n' +
    	'.dropdown-menu > li:nth-child(even) { \n\tbackground: #fff;\n}';
		
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + '"I would like to" html',
			tooltip_c: tooltipBase + '"I would like to" css'
		};
	}

	function accountSelector(){
	
		function _html(){
			
			return [
				'<div class="row-fluid">',
				'  <div class="span8 offset2">',
				'    <label id="account-label" for="account">Account:</label>',
				'    <div class="dropdown maaui-dropdown" quick-links="" quick-links-width="270">',
				'      <select name="account" aria-labelledby="account-label" id="account" ng-model="viewModel.accountNumber">',
				'        <option value="8933242668">23 Sequoia Tree</option>',
				'        <option value="9034672187">Redwood</option>',
				'        <option value="7005673208">12 Maple</option>',
				'      </select>',
				'    </div>',
				'  </div>',
				'</div>'].join('\n');
			  
		}
    	
		var css = '.dropdown .dropdown-menu {\n\t' +
    	'box-shadow: 0 3px 5px #ccc;\n\t' +
    	'border: 1px sold #ccc;\n\t' + 
    	'padding: 10px;\n\t' + 
    	'border-top: none; \n} \n\n .dropdown-menu { \n\t' +
    	'top: 100%; \n\tleft: 0; \n\tbackground-color: #fff; \n\t' +
    	'border-radius: 0 0 3px 3px; \n\tmargin: 0; \n } \n\n' + 
    	'.dropdown-menu > li:nth-child(odd) { \n\tbackground: #f3fafd;\n}\n\n' +
    	'.dropdown-menu > li:nth-child(even) { \n\tbackground: #fff;\n}';
	
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Account Selector html',
			tooltip_c: tooltipBase + 'Account Selector css'
		};
	}

	
	function Controller ($scope, $window, $location, $rootScope){
		
		var _map = {
			0: 'global',
			1: 'utility',
			2: 'iwouldliketo',
			3: 'accountselector'
		};
		
		$scope.viewModel = {
			globalNav: globalNav(),
			utilityNav: utilityNav(),
			iwouldliketoNav: iwouldliketoNav(),
			accountSelector: accountSelector(),
			cooldropdown: 0
		};	
		
		$scope.updateUrl = function(idx){
			$rootScope.$stateParams.nav = _map[idx];
			$location.search('nav', $rootScope.$stateParams.nav);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Navigation Elements | ' + appCtrl.capital($rootScope.$stateParams.nav);
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
	
	controllers.controller('navElemsCtrl', ['$scope', '$window', '$location', '$rootScope',Controller]);
		

	
	
});