define([
        'angular',
        'uiRouter',
      //  'ngAnimate',
        'uiBootstrap',
        'uiUtils',
      //  'angularLodash',
        'js/services/index',
        'js/controllers/index',
        'js/directives/index',
        'js/filters/index'
        ], function($ng){
    'use strict';


    var _modules = [
        'ui.router',
      //  'ngAnimate',
        'ui.bootstrap',
        'ui.utils',
      //  'angular-lodash',
        'maauiStyleGuide.services',
        'maauiStyleGuide.controllers',
        'maauiStyleGuide.directives',
        'maauiStyleGuide.filters'
    ];

    return $ng.module('maauiStyleGuide', _modules);


});
