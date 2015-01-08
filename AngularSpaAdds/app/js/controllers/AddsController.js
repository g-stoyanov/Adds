angularSpaAdds.controller('AddsController', function (
    $scope,
    $log,
    addsTransferData,
    addsData,
    addsFiltering,
    addsPaging,
    categoriesData,
    townsData,
    notifier) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;
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
            $scope.addsFiltering.setTown($scope.town.id);
            $scope.addsFiltering.setCategory($scope.category.id);
            $scope.addsPaging.setCurrentPage(1);
        }

        addsData.getAllAdds(function (resp) {
            $scope.allAddsData.set(resp);
            if (resp.ads.length === 0) {
                $scope.addsPaging.setCurrentPage(0);
            }

            $scope.addsPaging.setNumPages(resp.numPages);
        }, $scope.addsFiltering.getCategory() ? $scope.addsFiltering.getCategory() : '', $scope.addsFiltering.getTown() ? $scope.addsFiltering.getTown() : '', $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
    }

    addsData.getAllAdds(function (resp) {
        $scope.allAddsData.set(resp);
        if (resp.ads.length === 0) {
            $scope.addsPaging.setCurrentPage(0);
        }

        $scope.addsPaging.setNumPages(resp.numPages);
    }, $scope.addsFiltering.getCategory() ? $scope.addsFiltering.getCategory() : '', $scope.addsFiltering.getTown() ? $scope.addsFiltering.getTown() : '', $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());

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