var angularSpaAdds = angular.module('angularSpaAddsModule', ['ngRoute'])
    .value('toastr', toastr)
    .config(function ($routeProvider) {

    //HOME
    $routeProvider.when('/register', {
        templateUrl: 'templates/home/register.html'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/home/login.html'
    });

    $routeProvider.when('/', {
        templateUrl: 'templates/adds/all-ads.html'
    });
    
     //USER
    $routeProvider.when('/logout', {
        templateUrl: 'templates/adds/all-ads.html'
    });

    $routeProvider.when('/user/home', {
        templateUrl: 'templates/adds/all-ads.html'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/adds/publish-add.html'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/adds/user-my-ads.html',
        controller: 'UserAddsController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/adds/user-edit-ad.html'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/adds/user-delete-ad.html'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/user-edit-profile.html'
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