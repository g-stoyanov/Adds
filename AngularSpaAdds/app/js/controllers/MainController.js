angularSpaAdds.controller('SoftuniController', function ($scope, $log, $location, addsData, categoriesData, townsData, userData, notifier) {

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
        switch (path) {
            case "/":
                $scope.navigation = { "url": $scope.template.homeNavigation };
                $scope.secondNavigation = { "url": $scope.template.secondNavigation };
                $scope.leftNavigation = { "url": $scope.template.filterDropDowns };
                break;
            case "/login":
                $scope.navigation = { "url": $scope.template.homeNavigation };
                $scope.secondNavigation = { "url": $scope.template.secondNavigation };
                $scope.leftNavigation = { "url": "" };
                break;
            case "/register":
                $scope.navigation = { "url": $scope.template.homeNavigation };
                $scope.secondNavigation = { "url": $scope.template.secondNavigation };
                $scope.leftNavigation = { "url": "" };
                break;

        }
    });

    $scope.navigation = { "url": $scope.template.homeNavigation };
    $scope.leftNavigation = { "url": $scope.template.filterDropDowns };

    $scope.maxSize = 5;
    $scope.currentPage = 1;
    $scope.numPages = 0;
    $scope.category = {};
    $scope.town = {};
    $scope.user = {};
    

    

    $scope.goToPage = function (mod) {
        if ($scope.currentPage + mod > 0 && $scope.currentPage + mod <= $scope.numPages) {
            $scope.currentPage += mod;
            $scope.reloadAdds(false);
        }
    }

    $scope.borderPages = function (page) {
        if (page > 0 && page <= $scope.numPages) {
            $scope.currentPage = page;
            $scope.reloadAdds(false);
        }
    }

    $scope.reloadAdds = function (isFilter) {
        if (isFilter) {
            $scope.currentPage = 1;
        }

        addsData.getAllAdds(function (resp) {
            $scope.allAddsData = resp;
            if (resp.ads.length === 0) {
                $scope.currentPage = 0;
            }

            $scope.numPages = resp.numPages;
        }, $scope.category.id ? $scope.category.id : '', $scope.town.id ? $scope.town.id : '', $scope.currentPage, $scope.maxSize);
    }

    $scope.registerLogin = function (resp) {
        sessionStorage.setItem('accessToken', JSON.stringify(resp.access_token));
        sessionStorage.setItem('tokenType', JSON.stringify(resp.token_type));
        sessionStorage.setItem('username', JSON.stringify(resp.username));
    }

    $scope.register = function (user, registrationForm) {
        userData.register(function (resp) {
            notifier.success('Successfully registered');
            $scope.registerLogin(resp);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);         
        }, user, registrationForm);
    }

    $scope.login = function (loginUser, loginForm) {
        userData.login(function (resp) {
            notifier.success('Welcome back ' + resp.username);
            $scope.registerLogin(resp);
            $scope.navigation.url = $scope.template.userHomeNavigation;
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.error_description);
        }, loginUser, loginForm);
    }

    $scope.logout = function () {
        sessionStorage.clear();
    }

    addsData.getAllAdds(function (resp) {
        $scope.allAddsData = resp;
        if (resp.ads.length === 0) {
            $scope.currentPage = 0;
        }
        $scope.numPages = resp.numPages;
    }, $scope.category.id ? $scope.category.id : '', $scope.town.id ? $scope.town.id : '', $scope.currentPage, $scope.maxSize);

    categoriesData.getAllCategories(function (resp) {
        $scope.allCategoriesData = resp;
    });

    townsData.getAllTowns(function (resp) {
        $scope.allTownsData = resp;
    });

    $scope.numPages = function () {
        return $scope.allAddsData.numPages;
    };
})