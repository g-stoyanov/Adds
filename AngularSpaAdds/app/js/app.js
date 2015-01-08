var angularSpaAdds = angular.module('angularSpaAddsModule', ['ngRoute'])
    .value('toastr', toastr)
    .config(function ($routeProvider) {

    //HOME
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html'
    });

    $routeProvider.when('/', {
        templateUrl: 'templates/all-ads.html'
    });
    
    //USER
    $routeProvider.when('/user/home', {
        templateUrl: 'templates/all-ads.html'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});