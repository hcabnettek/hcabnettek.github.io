define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks', {
				abstract: true,
				url: '/buildingblocks',
				templateUrl: 'buildingblocks/buildingblocks.index'
			}); 

		
	});
	
	
});