define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function basic(){
		
		var 
			css = '';
		
		function _html(){
			
			return [
			        '<div class="container">',
			        '  <div class="row-fluid border-bottom-paleblue billSummary">',
			        '    <div class="span7">',
			        '      <h2>Level Pay Plan Summary</h2>',
			        '    </div>',
			        '  </div>',
			        '  <table class="tinytable" id="tblPayPlanSummary">',
			        '    <tfoot>',
			        '      <tr class="text-right">',
			        '        <td>Level Pay Plan After Balance</td>',
			        '        <td>$14.28</td>',
			        '      </tr>',
			        '    </tfoot>',
			        '    <tbody>',
			        '      <tr>',
			        '        <td scope="row">Previous Level Pay Plan Summary</td>',
			        '        <td>$119.60</td>',
			        '      </tr>',
			        '      <tr>',
			        '        <td scope="row">Current Level Pay Plan Summary</td>',
			        '        <td>-$178.00</td>',
			        '      </tr>',
			        '      <tr>',
			        '        <td scope="row">Current Charges</td>',
			        '        <td>$72.60</td>',
			        '      </tr>',
			        '    </tbody>',
			        '  </table>',
			        '</div>'].join('\n');
			  
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
		
    	
		var css = '';
		
		function _html(){
			
			return [
			        '<div class="container">',
			        '  <h2>Account Summary</h2>',
			        '  <table class="tinytable">',
			        '    <thead>',
			        '      <tr>',
			        '        <th scope="col">Account</th>',
			        '        <th scope="col">Due Date</th>',
			        '        <th scope="col">Current Balance</th>',
			        '        <th scope="col">&nbsp;</th>',
			        '      </tr>',
			        '    </thead>',
			        '    <tfoot>',
			        '      <tr>',
			        '        <td colspan="4">',
			        '          <button class="btn btn-success caret-btn align-right" id="makePaymentBtn" type="button">Make a Payment</button>',
			        '        </td>',
			        '      </tr>',
			        '    </tfoot>',
			        '    <tbody>',
			        '      <tr>',
			        '        <td abbr="Account" scope="row">',
			        '          <span>23 Sequoia</span>',
			        '          <span>8933242668</span>',
			        '        </td>',
			        '        <td abbr="Due Date">3/22/2014</td>',
			        '        <td abbr="Current Balance">$76.18</td>',
			        '        <td abbr=" ">',
			        '          <a class="block caret-link" href="/someLink">View Bill Summary</a>',
			        '          <a class="block caret-link" href="/go-paperless">Go Paperless</a>',
			        '        </td>',
			        '      </tr>',
			        '    </tbody>',
			        '  </table>',
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
	
	
	
	function Controller ($scope, $window, $location, $rootScope){
		
		var _map = {
			0: 'basic',
			1: 'multicolumn'
		};
		
		$scope.viewModel = {
			basic: basic(),
			multicolumn: multicolumn()
		};	
		
		$scope.updateUrl = function(idx){
			$rootScope.$stateParams.style = _map[idx];
			$location.search('style', $rootScope.$stateParams.style);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Tables | ' + appCtrl.capital($rootScope.$stateParams.style);
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
		
	controllers.controller('tablesandlistsCtrl', ['$scope', '$window', '$location', '$rootScope', Controller]);
		
	
});