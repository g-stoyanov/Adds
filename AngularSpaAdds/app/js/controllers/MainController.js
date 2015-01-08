angularSpaAdds.controller('MainController', function (
    $scope,
    $log,
    $location,
    templates,
    addsData,
    categoriesData,
    townsData,
    userData,
    notifier) {

    $scope.$on('$routeChangeSuccess', function () {
        var path = $location.path();

        //home
        if (path === '/') {
            $scope.header = { "url": templates.normalHeader };
            $scope.navigation = { "url": templates.homeNavigation };
            $scope.secondNavigation = { "url": templates.homePanel };
            $scope.leftNavigation = { "url": templates.filterDropDowns };
        } else if (path === '/login' || path === '/register') {
            $scope.header = { "url": templates.normalHeader };
            $scope.navigation = { "url": templates.homeNavigation };
            $scope.secondNavigation = { "url": templates.homePanel };
            $scope.leftNavigation = { "url": "" };
        }

        //user
        else if (path === '/user/home') {
            if (sessionStorage.isLogged && !sessionStorage.isAdmin) {
                $scope.header = { "url": templates.userHeader };
                $scope.navigation = { "url": templates.userHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": templates.filterDropDowns };
            } else if (sessionStorage.isAdmin) {
                $location.path('/admin/home');
            } else {
                $location.path('/')
            }
        } else if (path === '/user/ads/publish' || path === '/user/profile' || path.indexOf("/user/ads/edit/") > -1 || path.indexOf("/user/ads/delete/") > -1) {
            if (sessionStorage.isLogged && !sessionStorage.isAdmin) {
                $scope.navigation = { "url": templates.userHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": "" };
            } else if (sessionStorage.isAdmin) {
                $location.path('/admin/home');
            } else {
                $location.path('/')
            }
        } else if (path === '/user/ads') {
            if (sessionStorage.isLogged && !sessionStorage.isAdmin) {
                $scope.navigation = { "url": templates.userHomeNavigation };
                $scope.secondNavigation = { "url": templates.userMyAdsPanel };
                $scope.leftNavigation = { "url": "2" };
            } else if (sessionStorage.isAdmin) {
                $location.path('/admin/home');
            } else {
                $location.path('/')
            }
        }

        //admin
        else if (path === '/admin/home') {
            if (sessionStorage.isAdmin) {
                $scope.navigation = { "url": templates.adminHomeNavigation };
                $scope.secondNavigation = { "url": templates.adminAdsPanel };
                $scope.leftNavigation = { "url": templates.filterDropDowns };
            } else if(sessionStorage.isLogged) {
                $location.path('/user/home');
            } else {
                $location.path('/')
            }
        } else if (path.indexOf("/admin/users/edit/") > -1) {
            if (sessionStorage.isAdmin) {
                $scope.navigation = { "url": templates.adminHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": "4" };
            } else if (sessionStorage.isLogged) {
                $location.path('/user/home');
            } else {
                $location.path('/')
            }
        } else {
            if (sessionStorage.isAdmin) {
                $scope.navigation = { "url": templates.adminHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": "" };
            } else if (sessionStorage.isLogged) {
                $location.path('/user/home');
            } else {
                $location.path('/')
            }
        }
    });
})