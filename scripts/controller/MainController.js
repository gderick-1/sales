/**
 * Created by dmjema on 11/6/16.
 *
 * mainController
 */
'use strict';
 var mainController = angular.module('mainController', []);

mainController.controller('MainController', ['$scope', function ($scope) {
    $scope.even = false;
    $scope.val = 1;
    
    $scope.add = function () {
        $scope.val += 1;
        $scope.even = $scope.val%2 == 0;
    }
    
    $scope.user = [
        { name: "Glory Derick", age: "20", education: "Advance certificate", birth: "July 1998"},
        { name: "Grace Joseph", age: "21", education: "university graduate", birth: "November 1994"},
        { name: "Haika Mjema", age: "41", education: "Advance Diploma", birth: "March 1971"},
        { name: "Godson Derick", age: "23", education: "University Graduate", birth: "April 1994"}
    ]
}])
