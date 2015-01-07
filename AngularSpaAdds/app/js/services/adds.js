angularSpaAdds.factory('addsData', function ($http, $log) {
    return {
        getAllAdds: function (success, categoryId, townId, startPage, pageSize) {
            $http({ method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/Ads?CategoryId=' + categoryId + '&TownId=' + townId + '&StartPage=' + startPage + '&PageSize=' + pageSize })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.warn(data);
            })
        }
    }
});

angularSpaAdds.factory('addsTransferData', function () {
    var data = [];
    var ctrl = {};

    ctrl.set = function(d){
        data = d.ads;
    };

    ctrl.get = function () {
        return data;
    };

    return ctrl;
});

angularSpaAdds.factory('addsPaging', function () {
    var maxSize = 5;
    var currentPage = 1;
    var numPages = 0;
    var ctrl = {};

    ctrl.setMaxSize = function (d) {
        maxSize = d;
    };

    ctrl.getMaxSize = function () {
        return maxSize;
    };


    ctrl.setCurrentPage = function (d) {
        currentPage = d;
    };

    ctrl.getCurrentPage = function () {
        return currentPage;
    };


    ctrl.setNumPages = function (d) {
        numPages = d;
    };

    ctrl.getNumPages = function () {
        return numPages;
    };

    return ctrl;
});