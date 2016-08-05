/**
 * Created by Daniel on 01/08/2016.
 */
(function (ng) {
    
    var module = ng.module('cv', []);
    
    module.controller('ctrl', 
        ['$scope',
            function ($scope) {
        
                $scope.language = 'EN';
                $scope.changeLanguage= function (language) {
                    $scope.language = language;
                };
            } 
        ]);
        
})(window.angular);