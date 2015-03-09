define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function redasterisk(){
		
		var 
			css = '';
		
		function _html(){
			
			return [
			        '<div class="container">',
			        '  <div class="row-fluid">',
			        '    <div class="span12">',
			        '      <div class="form-label">',
			        '        <label for="name" id="bankName-label">',
			        '          <span class="required-text">*</span>Label',
			        '        </label>',
			        '      </div>',
			        '      <div>',
			        '        <input type="text" id="name" aria-labelledby="bankName-label" aria-required="true" required="" />',
			        '      </div>',
			        '    </div>',
			        '  </div>',
			        '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Red Asterisk html',
			tooltip_c: tooltipBase + 'Red Asterisk css'
		};
	}
	
	function dropdown(){
		
    	
		var css = '';
		
		function _html(){
					
			return ['<div class="container">',
			        '  <div class="row-fluid">',
			        '    <div class="span12">',
			        '      <div class="form-label">',
			        '        <label id="dropdown-label">',
			        '          Label',
			        '        </label>',
			        '      </div>',
			        '      <div class="dropdown maaui-dropdown" quick-links="" quick-links-width="268">',
			        '        <select aria-labelledby="dropdown-label" id="cooldropdown" ng-model="viewModel.cooldropdown" tabindex="-1" aria-haspopup="true">',
			        '          <option value="">Choose a number</option>',
			        '          <option value="1">One</option>',
			        '          <option value="2">Two</option>',
			        '          <option value="3">Three</option>',
			        '          <option value="4">Four</option>',
			        '        </select>',
			        '      </div>',
			        '    </div>',
			        '  </div>',
			        '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Drop down selection list html',
			tooltip_c: tooltipBase + 'Drop down selection list css'
		};
	}
	
	function radio(){
			
	    	
			var css = '';
			
			function _html(){
						
				return ['<div class="container">',
				        '  <div class="row-fluid">',
				        '    <div class="span12">',
				        '      <div class="radio-row">',
				        '        <fieldset>',
				        '          <legend class="form-label">',
				        '            <label id="radio-label">',
				        '              Label:',
				        '            </label>',
				        '          </legend>',
				        '          <div role="radiogroup" aria-labelledby="radio-label">',
				        '            <input type="radio" name="dataType" id="data1" />',
				        '            <label for="data1"><span></span>Item 1</label>',
				        '            <input type="radio" name="dataType" id="data2" checked="checked"/>',
				        '            <label for="data2"><span></span>Item 2</label>',
				        '          </div>',
				        '        </fieldset>',
				        '      </div>',
				        '    </div>',
				        '  </div>',
				        '</div>'].join('\n');
				  
			}
			
			return {
				collapsed: true,
				html: _html(),
				css: css,
				tooltip_h: tooltipBase + 'Radio buttons html',
				tooltip_c: tooltipBase + 'Radio buttons css'
			};
		}

	function checkbox(){
		
		
		var css = '';
		
		function _html(){
					
			return ['<div class="container">',
			        '  <div class="row-fluid">',
			        '    <div class="login">',
			        '      <div class="span7 offset2">',
			        '        <input type="checkbox" name="checkbox1" value="value1" id="checkbox1" checked="checked" />',
			        '        <label for="checkbox1"><span></span>Checkbox Label</label>',
			        '      </div>',
			        '    </div>',
			        '  </div>',
			        '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Checkbox html',
			tooltip_c: tooltipBase + 'Checkbox css'
		};
	}
	
	function textbox(){

		var css = '';
		
		function _html(){
					
			return ['<div class="container">',
			        '  <div class="row-fluid">',
			        '    <div class="span12">',
			        '      <div class="form-label">',
			        '        <label>',
			        '          Label:',
			        '        </label>',
			        '      </div>',
			        '      <div>',
			        '        <input type="text" placeholder="Placeholder text" style="padding-left: 20px;"/>',
			        '      </div>',
			        '    </div>',
			        '  </div>',
			        '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Textbox/Input Field html',
			tooltip_c: tooltipBase + 'Textbox/Input Field css'
		};
	}

	
	function pwstrength(){

		var css = '';
		
		function _html(){
					
			return ['<div class="container">',
			        '  <div class="row-fluid">',
			        '  </div>',
			        '</div>'].join('\n');		  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Password Strength Indicator html',
			tooltip_c: tooltipBase + 'Password Strength Indicator css'
		};
	}
	
	function Controller ($scope, $window, $location, $rootScope){
		
		var _map = {
			0: 'redasterisk',
			1: 'dropdown',
			2: 'radio',
			3: 'checkbox',
			4: 'textbox',
			5: 'pwstrength'
		};
		
		$scope.viewModel = {
			redasterisk: redasterisk(),
			dropdown: dropdown(),
			radio: radio(),
			checkbox: checkbox(),
			textbox: textbox(),
			pwstrength: pwstrength(),
			cooldropdown: 0,
			accountNumber: 9034672187
		};	
		
		$scope.updateUrl = function(idx){
			
			$rootScope.$stateParams.type = _map[idx];
			$location.search('type', _map[idx]);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Form Elements | ' + appCtrl.capital($rootScope.$stateParams.type);
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
		
	controllers.controller('formElemsCtrl', ['$scope', '$window', '$location', '$rootScope', Controller]);
		
	
});