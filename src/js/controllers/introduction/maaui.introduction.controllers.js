!function(){

    angular.module('maauiStyleGuide.controllers', [])
        .controller('HeaderCtrl', ['$scope', function($scope){
        	
        }]).controller('MainCtrl', ['$scope', function($scope){

        }]).controller('FooterCtrl', ['$scope', function($scope){

        }]).controller('DropdownsCtrl', ['$scope', function($scope){

        	$scope.viewModel = {};
        	$scope.viewModel.css = $scope.viewModel.cssCopy = '.dropdown .dropdown-menu {\n\t' +
        	'box-shadow: 0 3px 5px #ccc;\n\t' +
        	'border: 1px sold #ccc;\n\t' + 
        	'padding: 10px;\n\t' + 
        	'border-top: none; \n} \n\n .dropdown-menu { \n\t' +
        	'top: 100%; \n\tleft: 0; \n\tbackground-color: #fff; \n\t' +
        	'border-radius: 0 0 3px 3px; \n\tmargin: 0; \n } \n\n' + 
        	'.dropdown-menu > li:nth-child(odd) { \n\tbackground: #f3fafd;\n}\n\n' +
        	'.dropdown-menu > li:nth-child(even) { \n\tbackground: #fff;\n}';
      
        	
        	$scope.viewModel.html = $scope.viewModel.htmlCopy = '<div class="dropdown">\n\t' +
            '<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel" >\n\t\t' +
            '<li><a href="#" tabindex="-1">Action</a></li>\n\t\t' + 
            '<li><a href="#" tabindex="-1">Another action</a></li>\n\t\t' + 
            '<li><a href="#" tabindex="-1">Something else</a></li>\n\t\t' + 
            '<li><a href="#" tabindex="-1">Separated link</a></li>\n\t' + 
            '</ul>\n</div>';
            
           
        	
        }]);
}();