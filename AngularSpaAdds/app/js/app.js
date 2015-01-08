var angularSpaAdds = angular.module('angularSpaAddsModule', ['ngRoute'])
    .value('toastr', toastr)
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

    $routeProvider.when('/user/home', {
        templateUrl: 'templates/all-ads.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});