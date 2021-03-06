﻿angularSpaAdds.factory('reloadAdds', function ($log, notifier) {
    return function (scope, addsData, isFilter) {

        if (isFilter) {
            scope.addsFiltering.setTown(scope.town.id);
            scope.addsFiltering.setCategory(scope.category.id);
            scope.addsPaging.setCurrentPage(1);
        }

        addsData.getAllAdds(function (resp) {
            scope.allAddsData.set(resp);
            scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage() === 0 ? 1 : scope.addsPaging.getCurrentPage());
            if (resp.ads.length === 0) {
                scope.addsPaging.setCurrentPage(0);
            } else {
                scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage());
            }

            scope.addsPaging.setNumPages(resp.numPages);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error('Unexpected error!  Cannot load advertisements data.');
        }, scope.addsFiltering.getCategory(), scope.addsFiltering.getTown(), scope.addsPaging.getCurrentPage(), scope.addsPaging.getMaxSize());
    };
})

angularSpaAdds.factory('reloadUserAdds', function ($log, notifier) {
    return function (scope, addsData, isFilter, status) {

        if (isFilter) {
            scope.addsFiltering.setTown(scope.town.id);
            scope.addsFiltering.setCategory(scope.category.id);
            scope.addsPaging.setCurrentPage(1);
        }

        addsData.getUserAdds(function (resp) {
            scope.allAddsData.set(resp);
            scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage() === 0 ? 1 : scope.addsPaging.getCurrentPage());
            if (resp.ads.length === 0) {
                scope.addsPaging.setCurrentPage(0);
            } else {
               scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage());
            }

            scope.addsPaging.setNumPages(resp.numPages);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error('Unexpected error!  Cannot load advertisements data.');
        }, status, scope.addsPaging.getCurrentPage(), scope.addsPaging.getMaxSize());
    };
})

angularSpaAdds.factory('reloadAdminAdds', function ($log, notifier) {
    return function (scope, adminAddsData, isFilter, status) {

        if (isFilter) {
            scope.addsFiltering.setTown(scope.town.id);
            scope.addsFiltering.setCategory(scope.category.id);
            scope.addsPaging.setCurrentPage(1);
            if (scope.adminAddsFiltering) {
                scope.adminAddsFiltering.setSortBy(scope.sortBy);
                scope.adminAddsFiltering.setStatus(scope.status);
            }
        }

        adminAddsData.getAdminAllAdds(function (resp) {
            scope.allAddsData.set(resp);
            scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage() === 0 ? 1 : scope.addsPaging.getCurrentPage());
            if (resp.ads.length === 0) {
                scope.addsPaging.setCurrentPage(0);
            } else {
                scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage());
            }

            scope.addsPaging.setNumPages(resp.numPages);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error('Unexpected error!  Cannot load advertisements data.');
        }, scope.addsPaging.getStatus(status), scope.addsFiltering.getCategory(), scope.addsFiltering.getTown(), scope.adminAddsFiltering.getSortBy(), scope.addsPaging.getCurrentPage(), scope.addsPaging.getMaxSize());
    };
})