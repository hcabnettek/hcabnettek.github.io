define([
        './module'
        ], function(directives){
	'use strict';
	
	  function Directive() {
          return function (scope, el, attr) {
              $(el).click(function (e) {
                  
                  e.preventDefault();
              });
          };
      }

	  directives.directive('eatClick', [Directive]);
	
	
});