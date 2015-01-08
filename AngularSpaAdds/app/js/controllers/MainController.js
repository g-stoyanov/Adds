angularSpaAdds.controller('MainController', function ($scope, $log, $location, addsData, categoriesData, townsData, userData, notifier) {

    $scope.template = {
        //home
        "homePanel": "templates/home-log-reg.html",
        "homeNavigation": "templates/home-navigation.html",

        //user
        "userHomeNavigation": "templates/user-home-nav.html",
        "userMyAdsPanel": "templates/user-my-ads-panel.html",

        //admin
        "adminHomeNavigation": "templates/admin-home-nav.html",
        "adminAdsPanel": "templates/admin-ads-panel.html",

        //filter
        "filterDropDowns": "templates/filter-drop-downs.html",
        "categoriesDropDown": "templates/categories-drop-down.html",
        "townsDropDown": "templates/towns-drop-down.html",

        //adds
        "add": "templates/add.html",

        //misc
        "pagination": "templates/pagination.html"
    };

    $scope.$on('$routeChangeSuccess', function () {
        var path = $location.path();

        //home
        if (path === '/') {
            $scope.navigation = { "url": $scope.template.homeNavigation };
            $scope.secondNavigation = { "url": $scope.template.homePanel };
            $scope.leftNavigation = { "url": $scope.template.filterDropDowns };
        } else if (path === '/login' || path === '/register') {
            $scope.navigation = { "url": $scope.template.homeNavigation };
            $scope.secondNavigation = { "url": $scope.template.homePanel };
            $scope.leftNavigation = { "url": "" };
        }

        //user
        else if (path === '/user/home') {
            $scope.navigation = { "url": $scope.template.userHomeNavigation };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": $scope.template.filterDropDowns };
        } else if (path === '/user/ads/publish' || path === '/user/profile' || path.indexOf("/user/ads/edit/") > -1 || path.indexOf("/user/ads/delete/") > -1) {
            $scope.navigation = { "url": $scope.template.userHomeNavigation };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": "" };
        } else if (path === '/user/ads') {
            $scope.navigation = { "url": $scope.template.userHomeNavigation };
            $scope.secondNavigation = { "url": $scope.template.userMyAdsPanel };
            $scope.leftNavigation = { "url": "2" };
        }

        //admin
        else if (path === '/admin/home') {
            $scope.navigation = { "url": $scope.template.adminHomeNavigation };
            $scope.secondNavigation = { "url": $scope.template.adminAdsPanel };
            $scope.leftNavigation = { "url": $scope.template.filterDropDowns };
        } else if (path.indexOf("/admin/users/edit/") > -1) {
            $scope.navigation = { "url": $scope.template.adminHomeNavigation };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": "4" };
        } else {
            $scope.navigation = { "url": $scope.template.adminHomeNavigation };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": "" };
        }
    });
})