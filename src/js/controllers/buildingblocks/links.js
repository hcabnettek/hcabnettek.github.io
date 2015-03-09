define(['../module'], function(controllers){
	'use strict';
	
var tooltipBase = 'Click to copy ';
	
	function caret(){
		
		function _css(){
			
			return [
			        'a {',
			        '  color: #0878B5;',
			        '}',
			        '',
			        '.caret-link {',
			        '  text-decoration: underline;',
			        '}',
			        '',
			        '.caret-link::before {',
			        '  content: url("../images/RedCarat.png");',
			        '  padding-right: 10px;',
			        '}'
			        ].join('\n');
		}
		
		function _html(){
			
			return [
			   '<a class="caret-link" target="_blank" href="/mylinkurl">My Link Text</a>',
			  ].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Caret Link html',
			tooltip_c: tooltipBase + 'Caret Link css'
		};
	}
	
	function standard(){
		
		function _css(){
			return [
			        'a {',
			        '  color: #0878B5;',
			        '  text-decoration: underline;',
			        '}'
			        ].join('\n');
		}
    	
		
		function _html(){
					
			return [
				'<a href="/mylinkurl">My Link Text</a>',
				].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Standard Link html',
			tooltip_c: tooltipBase + 'Standard Link css'
		};
	}
	
function caretlist(){
		
		function _css(){
			return [
			        'ul {',
			        '  padding: 0;',
			        '  margin: 0 0 10px 25px',
			        '}',
			        '',
			        'caret-list {',
			        '  list-style-type: disc;',
					'  list-style-position: outside;',
					'  list-style-image: url("../images/RedCarat.png");',
					'  margin-left: 0;',
					'  padding-left: 1em;',
			        '}',
			        '',
			        'li {',
			        '  line-height: 20px',
			        '  display: list-item',
			        '}',
			        'caret-list li {',
			        '  margin-bottom: .4em',
			        '}',			       
			        '',
			        'a {',
			        '  color: #0878B5;',
			        '  text-decoration: underline;',
			        '}'
			        ].join('\n');
		}
    	
		
		function _html(){
					
			return [
			        '<ul class="caret-list">',
			        '  <li>',
			        '     <a href="/mylinkurl1">Here is a long link to go to the first destination</a>',
			        '  </li>',
			        '  <li>',
			        '     <a href="/mylinkurl2">Go to the second destination</a>',
			        '  </li>',
			        '  <li>',
			        '     <a href="/mylinkurl3">An example of a third destination link</a>',
			        '  </li>',
			        '</ul>',
				].join('\n');
			  
		}
		
		return {
			collapsed: true,
			html: _html(),
			css: _css(),
			tooltip_h: tooltipBase + 'Caret Link List html',
			tooltip_c: tooltipBase + 'Caret Link List css'
		};
	}

	
	
	
	function Controller ($scope, $window, $location, $rootScope){
		
		var _map = {
			0: 'caret',
			1: 'standard',
			2: 'caretlist'
		};
		
		$scope.viewModel = {
			caret: caret(),
			standard: standard(),
			caretlist: caretlist()
		};	
		
		$scope.updateUrl = function(idx){
			$rootScope.$stateParams.style = _map[idx];
			$location.search('style', $rootScope.$stateParams.style);
			
			var appCtrl = $scope.$parent.$parent.$parent.$parent;
			var title = 'Buildingblocks | Links | ' + appCtrl.capital($rootScope.$stateParams.style);
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
		
	controllers.controller('linksCtrl', ['$scope', '$window', '$location', '$rootScope', Controller]);
		
	
});