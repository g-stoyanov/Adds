var angularSpaAdds = angular.module('angularSpaAddsModule', ['ngRoute', 'angular-loading-bar'])
.config(function ($routeProvider) {

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html'
    });

    $routeProvider.when('/', {
        templateUrl: 'templates/all-ads.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});