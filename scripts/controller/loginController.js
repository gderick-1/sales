'use strict';
var loginController = angular.module('loginController', []);

loginController.controller('LoginController', ['$scope','$location', '$rootScope', function ($scope, $location, $rootScope) {
    $rootScope.login = $scope.login;
    $rootScope.username = $scope.username;
    $rootScope.password = $scope.password;

    if($rootScope.username == 'derick_1' && $rootScope.password == '12345') {
        $rootScope.login = true;
        console.log('logged in');
        $location.path('home');
    }
}]);
