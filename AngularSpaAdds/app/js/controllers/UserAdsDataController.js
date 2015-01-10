angularSpaAdds.controller('UserAddsDataController', function ($scope, addsData, notifier, addsTransferData, addsPaging, addsFiltering) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;

    addsData.getUserAdds(function (resp) {
        $scope.allAddsData.set(resp);
        scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage() === 0 ? 1 : scope.addsPaging.getCurrentPage());
        if (resp.ads.length === 0) {
            $scope.addsPaging.setCurrentPage(0);
        } else {
            scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage());
        }

        if (!status) {
            status = '';
        }

        $scope.addsPaging.setNumPages(resp.numPages);
    }, function (resp, status, headers, config) {
        $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
        notifier.error(resp.modelState[""]);
    }, status, $scope.addsPaging.getCurrentPage() === 0 ? 1 : $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
})