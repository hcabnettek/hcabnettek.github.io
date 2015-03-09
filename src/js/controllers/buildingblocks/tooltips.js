define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function informational(){
		
		var 
			css = '';
		
		function _html(){
			
			
		
			return [
			   '<div class="span12 rel-pos">',
			   '  <a tabindex="0" class="toolLink" ui-keyup="{\'enter\':\'toggleTooltip($event)\'}" >',
			   '    <img class="paymentSource tt-large" alt="Payment Source" src="images/Iconography.png" ',
			   '       tooltip-html-unsafe="<p>tooltip content</p>" ',
			   '       tooltip-trigger="click" tooltip-placement="right" maaui-tooltip="" />',
			   '  </a>',
			   '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Informational Tooltip html',
			tooltip_c: tooltipBase + 'Informational Tooltip css'
			 
		};
	}
	
	function definition(){
		
    	
		var css = '';
		
		function _html(){
			
		
			return [
			   '<div class="span12 rel-pos">',
			   '  <img class="onetime" alt="One Time Payment" src="images/Iconography.png" ',
			   '    tooltip="I\'m a definition tooltip!" tooltip-placement="right" aria-describedby=""/>',
			   '</div>'].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: css,
			tooltip_h: tooltipBase + 'Definition Tooltip html',
			tooltip_c: tooltipBase + 'Definition Tooltip css'
		};
	}
	
	
	
	function Controller ($scope, $window, $location, $rootScope, tooltipService){
		
		var _map = {
			0: 'informational',
			1: 'definition'
		};
		
		$scope.viewModel = {
			informational: angular.extend(informational(), {paymentSourceTip: tooltipService.paymentSourceTip()}),
			definition: definition()
		};	
		
		$scope.updateUrl = function(idx){
			$rootScope.$stateParams.style = _map[idx];
			$location.search('style', $rootScope.$stateParams.style);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Tooltips | ' + appCtrl.capital($rootScope.$stateParams.style);
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
		
	controllers.controller('tooltipsCtrl', ['$scope', '$window', '$location', '$rootScope', 'tooltipService',Controller]);
		
	
});