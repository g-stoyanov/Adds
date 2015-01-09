﻿angularSpaAdds.controller('UserAddsController', function (
    $scope,
    $log,
    $location,
    templates,
    addsTransferData,
    addsData,
    addsFiltering,
    addsPaging,
    categoriesData,
    townsData,
    notifier,
    reloadUserAdds) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;
    $scope.templates = templates;
    $scope.category = {};
    $scope.town = {};
    $scope.add = {};

    $scope.allAddsData.set([]);

    $scope.reloadUserAdds = function (isFilter) {
        reloadUserAdds($scope, addsData, isFilter);
    }

    reloadUserAdds($scope, addsData, false);

    $scope.goToPage = function (mod) {
        if ($scope.addsPaging.getCurrentPage() + mod > 0 && $scope.addsPaging.getCurrentPage() + mod <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage($scope.addsPaging.getCurrentPage() + mod);
            $scope.reloadUserAdds(false);
        }
    }

    $scope.borderPages = function (page) {
        if (page > 0 && page <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage(page);
            $scope.reloadUserAdds(false);
        }
    }

    $scope.numPages = function () {
        return $scope.allUserAddsData.numPages;
    };
})