define([
        './module'
        ], function(directives){
	'use strict';
	
	  function Directive($q) {
		  return {
              restrict: 'A',
              link: function (scope, iElement, iAttrs) {

              	iElement.on('click', function(e){
              		
              		var selStart = Math.min(0, iElement.val().length),
              			selEnd = Math.min(Math.max(iElement.val().length, selStart), iElement.val().length);
              		
              		if(iElement[0].setSelectionRange){
              			
              			iElement[0].focus();
              			iElement[0].setSelectionRange(selStart, selEnd);
              			
              		} else if(iElement[0].createTextRange) {
              			
              			var range = iElement[0].createTextRange();
              			range.collapse(true);
              			range.moveEnd('character', selEnd);
              			range.moveStart('character', selStart);
              			range.select();
              		}
              	});
              }
          };
      }

	  directives.directive('selectAll', [Directive]);
		
});