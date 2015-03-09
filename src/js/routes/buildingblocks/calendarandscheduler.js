define(['maaui'], function(routes){
	'use strict';
	
	
	routes.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		
		$stateProvider
			.state('buildingblocks.calendarandscheduler', {
				url: '/calendarandscheduler',
				templateUrl: 'buildingblocks/calendarandscheduler/buildingblocks.calendarandscheduler.index',
				controller: function($scope, $rootScope){
					
					$scope.items = [
					    {href: 'calendar', text: 'Calendar', idx: 0},
					    {href: 'scheduler', text: 'Scheduler', idx: 1}
					];
					
			        
			        $scope.$on('$viewContentLoaded', function(event){
			        	$rootScope.$state.go('buildingblocks.calendarandscheduler.items');
			        });
				}
			})
			.state('buildingblocks.calendarandscheduler.items', {
				url: '/?item',
				views: {
					'calendar': {
						templateUrl: 'buildingblocks/calendarandscheduler/buildingblocks.calendarandscheduler.calendar',
						controller: function($scope, $rootScope, $location){
							
							 $scope.$on('$viewContentLoaded', function(event){
						        
								
						     });
						}
					},
					'scheduler': {
						templateUrl: 'buildingblocks/calendarandscheduler/buildingblocks.calendarandscheduler.scheduler',
						controller: function($scope, $rootScope, maauiAppSettings){
							
							  function saturate(v, i){
						            
					                var _d = v.d;
					                v =  angular.extend(v, {
					                    day: maauiAppSettings.days[_d.getDay()], 
					                    dayOfMonth: _d.getDate(),
					                    month: maauiAppSettings.monthsLong[_d.getMonth()], 
					                    monthabbr: maauiAppSettings.months[_d.getMonth()]
					                });
					            }
					            
							  
					            var $this = this;
					            $this.$scope = $scope;
					            var viewModel = $scope.viewModel = ($scope.viewModel || {});
					            var scheduleModel = [
					                {d: new Date(2014, 11, 19), a: false, blocks: []},
					                {d: new Date(2014, 10, 20), a: true, blocks: [true, false, true]},
					                {d: new Date(2014, 7, 13), a: true, blocks: [true, false, true]},
					                {d: new Date(2014, 11, 21), a: true, blocks: [true, true, true]},
					                {d: new Date(2015, 0, 22), a: true, blocks: [false, true, true]},
					                {d: new Date(2014, 10, 23), a: false, blocks: []},
					                {d: new Date(2014, 10, 24), a: true, blocks: [true, false, true]},
					                {d: new Date(2014, 10, 25), a: true, blocks: [true, true, true]},
					                {d: new Date(2014, 10, 28), a: true, blocks: [true, true, true]},
					                {d: new Date(2014, 10, 29), a: true, blocks: [true, true, true]},
					                {d: new Date(2014, 10, 30), a: true, blocks: [true, true, true]}
					            ];
					            
					            angular.forEach(scheduleModel.sort(function(a, b){
					                return a.d > b.d ? 1 : -1;
					                
					            }), saturate);
					            
					            
					            viewModel.scheduleModel = scheduleModel;
					            return this;
								 $scope.$on('$viewContentLoaded', function(event){
							        
									
							     });
						}
					}
				}
			}); 
		
	});
	
	
});