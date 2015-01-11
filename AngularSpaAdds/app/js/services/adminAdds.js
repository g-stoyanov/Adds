angularSpaAdds.factory('adminAddsData', function ($http, $log, townsData, categoriesData) {
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
                townsData.getAllTowns(function (towns) {
                    for (var i = 0; i < data.ads.length; i++) {
                        for (var town in towns) {
                            if (towns[town].id === data.ads[i].townId) {
                                data.ads[i].townName = towns[town].name;
                            }
                        }
                    }
                });

                categoriesData.getAllCategories(function (categories) {
                    for (var i = 0; i < data.ads.length; i++) {
                        for (var category in categories) {
                            if (categories[category].id === data.ads[i].categoryId) {
                                data.ads[i].categoryName = categories[category].name;
                            }
                        }
                    }
                });
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                error(data);
            })
        }
    }
});

angularSpaAdds.factory('adminAddsFiltering', function () {
    var status = '';
    var sortBy = '';
    var ctrl = {};

    ctrl.setStatus = function (d) {
        status = d;
    };

    ctrl.getStatus = function () {
        return status;
    };


    ctrl.setSortBy = function (d) {
        sortBy = d;
    };

    ctrl.getSortBy = function () {
        return sortBy;
    };

    return ctrl;
});