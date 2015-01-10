angularSpaAdds.factory('adminAddsData', function ($http, $log) {
    return {
        getAdminAllAdds: function (success, error, status, categoryId, townId, sortBy, startPage, pageSize) {
            if (startPage === 0) {
                startPage = 1;
            }

            if (!categoryId) {
                categoryId = '';
            }

            if (!townId) {
                townId = '';
            }

            if (!sortBy) {
                sortBy = '';
            }

            if (!status) {
                status = '';
            }

            $http({
                method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/Ads?Status=' + status + '&CategoryId=' + categoryId + '&TownId=' + townId + '&SortBy=' + sortBy + '&StartPage=' + startPage + '&PageSize=' + pageSize,
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
                }
            })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                error(data);
            })
        }
    }
});