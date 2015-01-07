angularSpaAdds.controller('AddsController', function ($scope, $log, addsData, categoriesData, townsData, notifier) {

    $scope.maxSize = 5;
    $scope.currentPage = 1;
    $scope.numPages = 0;
    $scope.category = {};
    $scope.town = {};

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