define([
        'require',
        'jquery',
        'angular',
        'maaui',
      //  'ZeroClipboard',
      //  'jqueryui',
        'routes',
        'templates',
      //  'prettify',
      //  'langcss'
        ],
        function(require, $, $ng, maaui){
			'use strict';

			/**
			 *


			var bounceCloser = function(){
		        $('#main-body').on('click', '.close', function(e){

		           var _soft = $(this).closest('.soft');

		            $.when(doClose()).then(function(){

		                var deferred = $.Deferred();

		                setTimeout(function(){
		                     _soft.css('padding','0');
		                    deferred.resolve();
		                }, 0);

		              return deferred.promise();

		            }).done(function(a, b){

		            	if(!$.cookie('__dis_sft')){
		                    var theDate = new Date(2019,11,31);
		                    $.cookie('__dis_sft', 'true', {expires: theDate, path: '/'});
		                }

		                setTimeout(function(){
		                     //_soft.remove();
		                   _soft.css('padding', '').removeClass('dismissed');
		                }, 1500);
		            });

		           function doClose(){
		              var deferred = $.Deferred();

		              setTimeout(function(){
		                _soft.addClass('dismissed');
		                deferred.resolve();
		              }, 0);

		              return deferred.promise();
		           }
		        });
		    };

			if($ng.isFunction(ZeroClipboard)){
				window['ZeroClipboard'] = ZeroClipboard;
			} */

			maaui.config(function(){
				 /*$.datepicker.setDefaults({
		        	  showOn: "both",
		        	  buttonImageOnly: true,
		        	  buttonImage: "/maauiStyleGuide/images/calendar-icon.png",
		        	  buttonText: "",
		        	  numberOfMonths: 2,
		        	  dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
		        	  inline: true,
		        	  minDate: new Date()
				 });*/

				var UID = Date.now();
        $.fn.setUniqueId = function(){
          	return this.each(function(){
          		if( !this.id ){
          			this.id = (UID++).toString(36);
          		}
          	});
         };
	    });

      /*
			maaui.run([function(){

				var shimIE8 = function(){

			        //this is IE8 and below
			        var $blueBarelyMenuItems = angular.element('.dropdown-menu > li:nth-child(odd):not(.active)');
			        var $whiteMenuItems = angular.element('.dropdown-menu > li:nth-child(even):not(.active)');

			        $blueBarelyMenuItems.addClass('blueBarelyLI');
			        $whiteMenuItems.addClass('whiteLI');


			    };

	            Modernizr.addTest('lastchild', function () {
	                return Modernizr.testStyles('#modernizr div{width:100px} #modernizr :last-child{width:200px; display:block}', function (elem) {
	                    return elem.lastChild.offsetWidth > elem.firstChild.offsetWidth;
	                }, 1);
	            });

	            if(!Modernizr.lastchild){
	                shimIE8();
	            }



	        }]); */

			maaui.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){

				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;



			}]);

			require(['domReady!'], function(document){

				//$.zeroclipboard({moviePath: 'js/components/zeroclipboard/ZeroClipboard.swf'});
				$ng.bootstrap(document, ['maauiStyleGuide']);
				//window.prettyPrint && prettyPrint();
				//bounceCloser();

			});
		}
);
