angularSpaAdds.controller('MainController', function ($scope, $log, $location, addsData, categoriesData, townsData, userData, notifier) {

    $scope.template = {
        "secondNavigation": "templates/home-log-reg.html",
        "homeNavigation": "templates/home-navigation.html",
        "userHomeNavigation": "templates/user-home-nav.html",
        "filterDropDowns": "templates/filter-drop-downs.html",
        "categoriesDropDown": "templates/categories-drop-down.html",
        "townsDropDown": "templates/towns-drop-down.html",
        "add": "templates/add.html"
    };

    $scope.$on('$routeChangeSuccess', function () {
        var path = $location.path();
        if (path === '/') {
            $scope.navigation = { "url": $scope.template.homeNavigation };
            $scope.secondNavigation = { "url": $scope.template.secondNavigation };
            $scope.leftNavigation = { "url": $scope.template.filterDropDowns };
        } else if (path === '/login' || path === '/register') {
            $scope.navigation = { "url": $scope.template.homeNavigation };
            $scope.secondNavigation = { "url": $scope.template.secondNavigation };
            $scope.leftNavigation = { "url": "" };
        } else if (path === '/user/home') {
            $scope.navigation = { "url": $scope.template.userHomeNavigation };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": $scope.template.filterDropDowns };
        } else if (path === '/user/ads/publish' || path === '/user/profile' || path.indexOf("/user/ads/edit/") > -1 || path.indexOf("/user/ads/delete/") > -1) {
            $scope.navigation = { "url": $scope.template.userHomeNavigation };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": "" };
        } else if (path === '/user/ads') {
            $scope.navigation = { "url": $scope.template.userHomeNavigation };
            $scope.secondNavigation = { "url": "2" };
            $scope.leftNavigation = { "url": "2" };
        } else if (path === '/admin/home') {
            $scope.navigation = { "url": "3" };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": $scope.template.filterDropDowns };
        } else if (path.indexOf("/admin/users/edit/") > -1) {
            $scope.navigation = { "url": "3" };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": "4" };
        } else {
            $scope.navigation = { "url": "3" };
            $scope.secondNavigation = { "url": "" };
            $scope.leftNavigation = { "url": "" };
        }
    });
})