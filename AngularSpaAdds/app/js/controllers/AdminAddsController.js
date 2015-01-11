angularSpaAdds.controller('AdminAddsController', function (
    $scope,
    $log,
    $location,
    templates,
    addsTransferData,
    addsData,
    adminAddsData,
    addsFiltering,
    adminAddsFiltering,
    addsPaging,
    categoriesData,
    townsData,
    notifier,
    reloadAdminAdds) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;
    $scope.adminAddsFiltering = adminAddsFiltering;
    $scope.templates = templates;
    $scope.category = {};
    $scope.town = {};
    $scope.add = {};
    $scope.filterBy = '';
    $scope.status = '';

    $scope.allAddsData.set([]);

    $scope.reloadAdminAdds = function (isFilter) {
        reloadAdminAdds($scope, adminAddsData, isFilter, "");
    }

    reloadAdminAdds($scope, adminAddsData, false, '');


    $scope.goToPage = function (mod) {
        if ($scope.addsPaging.getCurrentPage() + mod > 0 && $scope.addsPaging.getCurrentPage() + mod <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage($scope.addsPaging.getCurrentPage() + mod);
            $scope.reloadAdminAdds(false);
        }
    }

    $scope.borderPages = function (page) {
        if (page > 0 && page <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage(page);
            $scope.reloadAdminAdds(false);
        }
    }

    $scope.numPages = function () {
        return $scope.allUserAddsData.numPages;
    };
})