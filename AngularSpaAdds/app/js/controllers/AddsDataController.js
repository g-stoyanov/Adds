angularSpaAdds.controller('AddsDataController', function ($scope, addsData, notifier, addsTransferData, addsPaging, addsFiltering) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;

        addsData.getAllAdds(function (resp) {
            $scope.allAddsData.set(resp);
            if (resp.ads.length === 0) {
                $scope.addsPaging.setCurrentPage(0);
            }

            $scope.addsPaging.setNumPages(resp.numPages);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, $scope.addsFiltering.getCategory() ? $scope.addsFiltering.getCategory() : '', $scope.addsFiltering.getTown() ? $scope.addsFiltering.getTown() : '', $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
})