angularSpaAdds.factory('reloadAdds', function () {
    return function (scope, addsTransferData, addsPaging, addsFiltering, addsData, isFilter) {

        if (isFilter) {
            scope.addsFiltering.setTown(scope.town.id);
            scope.addsFiltering.setCategory(scope.category.id);
            scope.addsPaging.setCurrentPage(1);
        }

        addsData.getAllAdds(function (resp) {
            scope.allAddsData.set(resp);
            if (resp.ads.length === 0) {
                scope.addsPaging.setCurrentPage(0);
            }

            scope.addsPaging.setNumPages(resp.numPages);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, scope.addsFiltering.getCategory() ? scope.addsFiltering.getCategory() : '', scope.addsFiltering.getTown() ? scope.addsFiltering.getTown() : '', scope.addsPaging.getCurrentPage(), scope.addsPaging.getMaxSize());
    };
})