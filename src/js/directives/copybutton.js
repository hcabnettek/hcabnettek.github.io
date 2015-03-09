define([
        './module'
        ], function(directives){
	'use strict';
	
	 function Directive($sce){
		 
            return {
                restrict: 'A',
                link: function(scope, iElement, iAttrs, controller){

                	var _modelRef = scope.viewModel[iAttrs.formodel],
                	    isCss = iElement.html().toLowerCase().indexOf('css') > -1,
                		clipboard = isCss ? _modelRef.css: _modelRef.html;
                	
                	scope.tooltip = 'Copy ' + (isCss ? 'css': 'html') + ' to the clipboard!';
                	iElement.zeroclipboard({
                		dataRequested: function(e, setText){
                			
                			
                			setText(clipboard.replace('\s', ''));
                		},
                		
                		complete: function(){
                			var _cur = iElement.html(),
                			 _old = scope.tooltip;
                			scope.tooltip = (isCss? 'Css': 'Html') + ' was copied to the clipboard!';
                			iElement.toggleClass('btn-info btn-success').html((isCss ? 'Css': 'Html') + ' was copied to clipboard!');
                			setTimeout(function(){
                				iElement.toggleClass('btn-info btn-success').html(_cur);
                				scope.tooltip = _old;
                			}, 3500);
                			
                		}
                		
                	});
                    
                }
            };
        }

        directives.directive('copyButton', ['$sce', Directive]);
});