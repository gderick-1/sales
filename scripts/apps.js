/*
* created by godson derick
* date: 3rd october
* */
 angular.module('Sales', ['ngRoute', 'salesControllers'])
.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/partials/login.html',
        controller: mainController
    }).when('home',{
        /*resolve: {
            "check": function ($location, $rootScope) {
                if (!$rootScope.loggedIn){
                    
                }
            }
        },*/
        templateUrl: 'views/partials/home.html'/*,
        controller: MainController*/
    }).when('portfolio', {
        templateUrl: 'views/partials/portfolio.html'
    }).when('contact',{
        templateUrl: 'views/partials/contact.html'
    }).when('about',{
        templateUrl: 'views/partials/about.html'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
        enable: true,
        requireBase: false
    });
}]);