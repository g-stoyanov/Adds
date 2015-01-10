angularSpaAdds.controller('AdminAddsController', function (
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
        reloadUserAdds($scope, addsData, isFilter, "");
    }

    $scope.getUserAddsByStatus = function (status) {
        reloadUserAdds($scope, addsData, false, status);
    }

    reloadUserAdds($scope, addsData, false, '');

    $scope.deactivateUserAdd = function (id) {
        addsData.deactivateUserAdd(function (resp) {
            notifier.success('Successfully deactivate advertisement.');
            reloadUserAdds($scope, addsData, false, '');
            $location.path('/user/ads');
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, id)
    }

    $scope.publishAgainUserAdd = function (id) {
        addsData.publishAgainUserAdd(function (resp) {
            notifier.success('Advertisement submitted for approval. Once approved, it will be published.');
            reloadUserAdds($scope, addsData, false, '');
            $location.path('/user/ads');
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, id)
    }

    $scope.deleteUserAdd = function (id) {
        $location.path('/user/ads/delete/' + id);
    }

    $scope.editUserAdd = function (id) {
        $location.path('/user/ads/edit/' + id);
    }

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