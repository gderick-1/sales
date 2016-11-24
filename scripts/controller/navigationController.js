/*created by godson derick*/

'use strict';
var navigationController = angular.module('navigationController',[]);

navigationController.controller('NavigationController', ['$scope', function ($scope) {

    $scope.navigation = [
        { name:'Home', link: '/home'},
        { name:'Portfolio', link: '/portfolio'},
        { name:'contact Us', link: '/contact'},
        { name:'About us', link: '/about'}
    ];
}])

/*angular.module('controllers', []).controller('NavigationController', ['$scope', function ($scope) {
    $scope.navigation = [
        { name: 'Home', link:''}
    ]
}])*/
