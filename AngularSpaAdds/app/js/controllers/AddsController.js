﻿angularSpaAdds.controller('AddsController', function ($scope, $log, addsTransferData, addsData, addsPaging, categoriesData, townsData, notifier) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.category = {};
    $scope.town = {};

    $scope.goToPage = function (mod) {
        if ($scope.addsPaging.getCurrentPage() + mod > 0 && $scope.addsPaging.getCurrentPage() + mod <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage($scope.addsPaging.getCurrentPage() + mod);
            $scope.reloadAdds(false);
        }
    }

    $scope.borderPages = function (page) {
        if (page > 0 && page <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage(page);
            $scope.reloadAdds(false);
        }
    }

    $scope.reloadAdds = function (isFilter) {
        if (isFilter) {
            $scope.addsPaging.setCurrentPage(1);
        }

        addsData.getAllAdds(function (resp) {
            $scope.allAddsData.set(resp);
            if (resp.ads.length === 0) {
                $scope.addsPaging.setCurrentPage(0);
            }

            $scope.addsPaging.setNumPages(resp.numPages);
        }, $scope.category.id ? $scope.category.id : '', $scope.town.id ? $scope.town.id : '', $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
    }

    addsData.getAllAdds(function (resp) {
        $scope.allAddsData.set(resp);
        if (resp.ads.length === 0) {
            $scope.addsPaging.setCurrentPage(0);
        }

        $scope.addsPaging.setNumPages(resp.numPages);
    }, $scope.category.id ? $scope.category.id : '', $scope.town.id ? $scope.town.id : '', $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());

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