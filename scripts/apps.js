/*
* created by godson derick
* date: 3rd october
* */
 angular.module('Sales', ['ngRoute'])
.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/content',{
        templateUrl: 'views/partials/home.html'/*,
        controller: MainController*/
    }).when('/portfolio', {
        templateUrl: 'views/partials/portfolio.html'
    }).when('/contact',{
        templateUrl: 'views/partials/contact.html'
    }).when('/about',{
        templateUrl: 'views/partials/about.html'
    }).otherwise({
        templateUrl: '/'
    });

    $locationProvider.html5Mode(true);
}]);