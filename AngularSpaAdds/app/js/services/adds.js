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