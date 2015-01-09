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
        if (sessionStorage['isLogged'] != 'true') {
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
            } else {
                $location.path('/');
            }
        }


        //user
        else if (sessionStorage['isAdmin'] != 'true') {
            if (path === '/user/home') {
                $scope.header = { "url": templates.userHeader };
                $scope.navigation = { "url": templates.userHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": templates.filterDropDowns };
            } else if (path === '/user/ads/publish' || path === '/user/profile' || path.indexOf("/user/ads/edit/") > -1 || path.indexOf("/user/ads/delete/") > -1) {
                $scope.header = { "url": templates.userHeader };
                $scope.navigation = { "url": templates.userHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": "" };
            } else if (path === '/user/ads') {
                $scope.header = { "url": templates.userHeader };
                $scope.navigation = { "url": templates.userHomeNavigation };
                $scope.secondNavigation = { "url": templates.userMyAdsPanel };
                $scope.leftNavigation = { "url": "2" };
            } else {
                $location.path('/user/home');
            }
        }


        //admin
        else if (sessionStorage['isAdmin'] == 'true') {

            if (path === '/admin/home') {
                $scope.header = { "url": templates.adminHeader };
                $scope.navigation = { "url": templates.adminHomeNavigation };
                $scope.secondNavigation = { "url": templates.adminAdsPanel };
                $scope.leftNavigation = { "url": templates.filterDropDowns };
            } else if (path.indexOf("/admin/users/edit/") > -1) {
                $scope.header = { "url": templates.adminHeader };
                $scope.navigation = { "url": templates.adminHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": "4" };
            } else if (path.indexOf("/admin/ads/edit/") > -1 ||
                       path.indexOf("/admin/ads/delete/") > -1 ||
                       path.indexOf("/admin/users/list") > -1 ||
                       path.indexOf("/admin/users/delete/") > -1 ||
                       path.indexOf("/admin/categories/list") > -1 ||
                       path.indexOf("/admin/categories/create") > -1 ||
                       path.indexOf("/admin/categories/edit/") > -1 ||
                       path.indexOf("/admin/categories/delete/") > -1 ||
                       path.indexOf("/admin/towns/list") > -1 ||
                       path.indexOf("/admin/towns/create") > -1 ||
                       path.indexOf("/admin/towns/edit/") > -1 ||
                       path.indexOf("/admin/towns/delete/") > -1) {
                $scope.header = { "url": templates.adminHeader };
                $scope.navigation = { "url": templates.adminHomeNavigation };
                $scope.secondNavigation = { "url": "" };
                $scope.leftNavigation = { "url": "" };
            } else {
                $location.path('/admin/home');
            }
        }
    });
})