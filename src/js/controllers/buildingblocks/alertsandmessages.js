define(['../module'], function(controllers){
	'use strict';
	
	var tooltipBase = 'Click to copy ';
	
	function technology(){
		
		function _css(){
			
			return [
			        '.cookies .browser .tech {',
			        '  height: auto',
			        '  display: block;',
			        '  padding: 30px;',
			        '  color: #ffffff',
			        '  text-align: center',
			        '}',
			        '.cookies .tech {',
			        '  border-bottom: 1px solid #cb6060;',
			        '  border-left: 1px solid #9f2b2b;',
			        '  background: #bc3232;',
			        '}',
			        '',
			        '.browser {',
			        '  border-bottom: 1px solid #787878;',
			        '  border-left: 1px solid #393939;',
			        '  background: #525252;',
			        '  opacity: 1',
			        '}'		        
			        ].join('\n');
		}
		
		function _html(){			
			return [
			   '    <div class="cookies">',
			   '      <h1>You must enable cookies in order to use My Account. Please enable cookies on your browser.</h1>',
			   '    </div',
			   '    <div class="browser">',
			   '      <h1>You are using an unsupported browser. Unsupported browsers can cause My Account to work',
			   '      slowly or not at all. To take advantage of these services, upgrade to a modern browser.</h1>',
			   '    </div>',
			   '    <div class="tech">',
			   '      <h1>You need to have JavaScript in order to use My Account. Please enable JavaScript on your browser.</h1>',
			   '    </div>'].join('\n');			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Technology Messages html',
			tooltip_c: tooltipBase + 'Technology Messages css'
		};
	}
	
	function hardandsoft(){
		
    	
		var css = '';
		
		function _html(){
			return [
			   '<div class="bounce">',
			   '  <div class="hard">',
			   '    <h1>Please correct your existing contact information.</h1>',
			   '    <p>We encountered problems sending messages to one or more of your contacts. To continue ',
			   '    receiving alerts and subscriptions, makes sure contacts are current. <a href="#!" >Update contact information&nbsp;&gt;&gt;</a></p>',
			   '  </div>',
			   '  <div class="soft">',
			   '    <h1>Please review your existing contact information.</h1>',
			   '    <p>We encountered problems sending messages to one or more of your contacts. To continue',
			   '    receiving alerts and subscriptions, makes sure contacts are current. <a href="#!" >Update contact information&nbsp;&gt;&gt;</a></p>',
			   '    <button type="button" class="close" role="button" aria-disabled="false" title="Close">',
			   '      <span class="closethick">&nbsp;</span>',
			   '      <span class="screenreader">close</span>',
			   '    </button>',
			   '  </div>',
			   '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Hard and Soft Bounce Messages html',
			tooltip_c: tooltipBase + 'Hard and Soft Bounce Messages css'
		};
	}
	
	function fielderror(){
		
		function _css(){
			
			return [
			        '.errormsg h1 {',
			        '  color: #BD020A',
			        '  font-size: 15px;',
			        '  font-weight: normal;',
			        '  margin-top: 3px;',
			        '}'
			        ].join('\n');
		}
		
		function _html(){
			
			return [
				'<div class="row-fluid">',
				'  <div class="span12 errormsg">',
				'    <div class="span1">',
				'      <img src="sdge/_assets/images/error_icon.png" />',
				'      <span class="spokenOnly">Error</span>',
				'    </div>',
				'    <div class="span11">',
				'      <h1>We are sorry, one or more of the required fields have not been formatted correctly.',
				'      Please fix the following errors below:</h1>',
				'      <ul>',
				'        <li id="BankAccountError">Select a <a href="#BankAccount" id="skipBankAccountError">Bank Account</a>.',
				'        </li>',
				'        <li id="chkAccount0Error">Select the <a href="#chkAccount0" id="skipchkAccount0Error">checkboxes for ',
				'        the accounts</a> you would like to make a payment for.</li>',
				'      </ul>',
				'    </div>',
				'  </div>',
				'</div>',].join('\n');
			  
		}
    	
		
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Field Error Messages html',
			tooltip_c: tooltipBase + 'Field Error Messages css'
		};
	}

	function eligibility(){
	
		function _html(){
			
			return [
				'<p class="ineligible">',
				'  <img alt="Ineligible" src="sdge/_assets/images/ineligible_icon.png" />',
				'  We are sorry but Online Automatic Payments are not currently available for this account. ',
				'  Your account is ineligible for online payment due to your current billing or payment option.',
				'</p>'].join('\n');
			  
		}
    	
		var css = '';
	
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Eligibility Messages html',
			tooltip_c: tooltipBase + 'Eligibility Messages css'
		};
	}

	function bill(){
		
		function _html(){
			
			return [
				''].join('\n');
			  
		}
    	
		var css = '';
	
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Bill Messages html',
			tooltip_c: tooltipBase + 'Bill Messages css'
		};
	}
	
	function success(){
		
		function _css(){
			
			return [
			        '.margin-t30 {',
			        '  margin-top: 2em !important;',
			        '}',
			        '',
			        '.successmsg {',
			        '  color: #339933;',
			        '  font-size: 1.2em;',
			        '  padding: 1em;',
			        '  background-color: #ccffcc;',
			        '  margin: 5px 0 0',
			        '}'		        
			        ].join('\n');
		}
		
		function _html(){
			
			return ['<div class="row-fluid border-bottom-paleblue">',
			        '  <h2 class="margin-t30 successmsg">',
			        '     Your My Account user information has been successfully updated.',
			        '  </h2>',
			        '</div>'].join('\n');
			  
		}
    	
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Success Messages html',
			tooltip_c: tooltipBase + 'Success Messages css'
		};
	}
	
	function informational(){
		
		function _css(){
			
			return [
			        'p.info-red {',
			        '  padding-left: 24px',
			        '  margin: 13px 0;',
			        '  position: relative;',
			        '  color: #d2093a;',
			        '}',			        
			        'p.info-red::before {',
			        '  position: absolute;',
			        '  content: url(../images/ineligible_icon.png;',
			        '  left: -4px;',
			        '}',
			        'p.info {',
			        '  display: inline-block;',
			        '  margin: 13px 0;',
			        '  margin-top: 30px;',
			        '  margin-bottom: 0;',
			        '  padding-left: 30px !important;',
			        '}',
			        '',
			        'p.info::before {',
			        '  position: absolute',
			        '  content: url(../images/information-icon.png;',
			        '  left: -4px;',
			        '}'
			        ].join('\n');
		}
		
		function _html(){
			
			return ['<p class="info-red">',
					'  This is an example of a red informational message. It may be several sentences long.',
					'</p>',
					'<p class="info">',
					'  This is a blue informational message, and like the red example may be one or more sentences long.',
					'</p>',
					].join('\n');
			  
		}
    		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Informational Messages html',
			tooltip_c: tooltipBase + 'Informational Messages css'
		};
	}
	
	function promotional(){
		
		function _html(){
			
			return [
				''].join('\n');
			  
		}
    	
		var css = '';
	
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Promotional Messages html',
			tooltip_c: tooltipBase + 'Promotional Messages css'
		};
	}
	
	function Controller ($scope, $window, $location, $rootScope){
		
		var _map = {
			0: 'technology',
			1: 'hardandsoft',
			2: 'fielderror',
			3: 'eligibility',
			4: 'bill',
			5: 'success',
			6: 'informational',
			7: 'promotional'
		};
		
		$scope.viewModel = {
			technology: technology(),
			hardandsoft: hardandsoft(),
			fielderror: fielderror(),
			eligibility: eligibility(),
			bill: bill(),
			success: success(),
			informational: informational(),
			promotional: promotional()
		};	
		
		$scope.updateUrl = function(idx){
			$rootScope.$stateParams.type = _map[idx];
			$location.search('nav', $rootScope.$stateParams.type);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Alerts and Messages | ' + appCtrl.capital($rootScope.$stateParams.type);
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
	
	controllers.controller('alertsandmessagesCtrl', ['$scope', '$window', '$location', '$rootScope',Controller]);
		

	
	
});