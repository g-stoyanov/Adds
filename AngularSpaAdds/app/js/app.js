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
        templateUrl: templatesProvider.allAdds
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

    //ADMIN
    $routeProvider.when('/admin/home', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/ads/edit/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/ads/delete/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/users/list', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/users/edit/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/users/delete/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/categories/list', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/categories/create', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/categories/edit/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/categories/delete/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/towns/list', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/towns/create', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/towns/edit/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.when('/admin/towns/delete/:id', {
        templateUrl: 'templates/not-implemented.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});