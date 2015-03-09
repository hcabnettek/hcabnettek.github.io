define(['./module' ], function(module){

    function safeApply(scope, fn) {
        (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
    };
    
    
   
    //mauuiScheduler Directive
    (function ($ng, $module) {

        function Controller($scope, $attrs, $element){
        
            var schedulerInner = $element.find('.scheduler-inner'),
                range = '128';
            
            var appointmentText = function(appointment){
                
                $scope.$momentService.moment().then(function(moment){
                
                    var m = moment(appointment.a),
                        block = '';
                    
                    switch(appointment.b){
                        case 0:
                            block = ' from 8am-Noon';
                            break;
                        case 1:
                            block = ' from Noon-4pm.';
                            break;
                        default:
                            block = ' any time between 8am-Midnight.'
                    }
                    
                    
                    $scope.selectedAppointment = m.format('dddd, MMMM D') + block;
                    $scope.liveRegion.text('Your appointment is on: ' + $scope.selectedAppointment);
                });
                
            };
            
            var ensureViewport = function(){
                var dateblock = angular.element(document.activeElement).closest('[data-ordinal]'),
                   ordinal = dateblock.attr('data-ordinal');
                
                if(!$scope.isMobile){
                    if(($scope.moveIndex - ordinal) < -4) {
                       $scope.next();
                    }
                   
                    if((ordinal < $scope.moveIndex)) {
                       $scope.prev();
                    }
                }
            };
            
            $scope.moveIndex = 0;
            
            
            $scope.next = function(){
                schedulerInner.css({marginLeft:'-=' + range});
                $scope.moveIndex++;
            };
            
            $scope.prev = function(){
                schedulerInner.css({marginLeft:'+=' + range});
                $scope.moveIndex--;
                
            };
            
            $scope.selectAppointment = function(appointment){
                
                appointmentText(appointment);
                
                if(!$scope.isMobile){
                    ensureViewport();
                }
            }
        }
        
        function Directive($rootScope, $q, $mediaCheckService, $momentService) {
        
            function link(scope, iElement, iAttrs, controller){
                
                scope.$mediaCheckService = $mediaCheckService;
                scope.$momentService = $momentService;
                
                var config = $ng.isDefined(iAttrs.maauiScheduler) ? scope.$eval(iAttrs.maauiScheduler) : {};
                //scope.blocked = config.blocked ? config.blocked : '';
                //scope.maxDate = config.max ? config.max : '';
                
                //console.log(scope);
                scope.liveRegion = iElement.find('.region.sched');
                
                $mediaCheckService.mediaCheck().then(function(mc){
                
                    var opts = {
                        media:'(max-width: 766px)',
                        entry: function(){
                       
                            scope.itemBuffer = 2;
                            scope.maxIndex = scope.viewModel.scheduleModel.length - scope.itemBuffer;
                            scope.isMobile = true;
                        },
                        
                        exit: function(){
                            scope.itemBuffer = 5;
                            scope.maxIndex = scope.viewModel.scheduleModel.length - scope.itemBuffer;
                            scope.isMobile = false;
                        }
                    };
                    
                    mc(opts);
                });
            }
            
            return {
               restrict: 'CA',
               controller: Controller,
               templateUrl: 'buildingblocks/calendarandscheduler/maaui.scheduler',
               scope: true,
               link: link
            };
        }

        $module.directive('maauiScheduler', ['$rootScope', '$q', '$mediaCheckService', '$momentService', Directive]);

    })(angular, module);
    
});