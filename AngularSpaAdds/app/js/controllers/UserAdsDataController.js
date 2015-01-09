angularSpaAdds.controller('UserAddsDataController', function ($scope, addsData, notifier, addsTransferData, addsPaging, addsFiltering) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;

    addsData.getUserAdds(function (resp) {
        $scope.allAddsData.set(resp);
        if (resp.ads.length === 0) {
            $scope.addsPaging.setCurrentPage(0);
        }

        $scope.addsPaging.setNumPages(resp.numPages);
    }, function (resp, status, headers, config) {
        $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
        notifier.error(resp.modelState[""]);
    }, status, $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
})