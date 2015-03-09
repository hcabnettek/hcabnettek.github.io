define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function calendar(){
		
		function _css(){
			return [''].join('\n');	
		
		}
		
		function _html(){
			
			return [
			   '<div class="paydateInfo">',
			   '  <label for="PaymentDate" id="paymentDate-label">',
			   '    <span class="required-text">*</span>Payment Date',
			   '  </label>',
			   '  <input type="text" name="PaymentDate"  id="PaymentDate"',
			   '    aria-labelledby="paymentDate-label"',
			   '    aria-describedby="tt-paymentDate"',
			   '    aria-required="true"',
			   '    select-all=""',
			   '    jq-datepicker=""/>',
			   '  <div id="tt-paymentDate" role="tooltip" aria-hidden="false" >',
			   '    <small>MM/DD/YYYY</small>',
			   '  </div>',
			   '</div>',].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Calendar html',
			tooltip_c: tooltipBase + 'Calendar css'
		};
	}
	
	function scheduler(){
		
    	
		function _css(){
			return [''].join('\n');	
		
		}
		
		function _html(){
					
			return [
			   '<div class="row-fluid maaui-scheduler"></div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Scheduler html',
			tooltip_c: tooltipBase + 'Scheduler css'
		};
	}
	
	
	
	function Controller ($scope, $window, $location, $rootScope){
		
		var _map = {
			0: 'calendar',
			1: 'scheduler'
		};
		
		$scope.viewModel = {
			calendar: calendar(),
			scheduler: scheduler()
		};	
		
		$scope.updateUrl = function(idx){
			$rootScope.$stateParams.item = _map[idx];
			$location.search('item', $rootScope.$stateParams.item);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Calendar and Scheduler | ' + appCtrl.capital($rootScope.$stateParams.item);
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
		
	controllers.controller('calendarandschedulerCtrl', ['$scope', '$window', '$location', '$rootScope', Controller]);
		
	
});