﻿angularSpaAdds.factory('addsData', function ($http, $log) {
    return {
        getAllAdds: function (success, error, categoryId, townId, startPage, pageSize) {
            if (startPage === 0) {
                startPage = 1;
            }

            if (!categoryId) {
                categoryId = '';
            }

            if (!townId) {
                townId = '';
            }

            $http({ method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/Ads?CategoryId=' + categoryId + '&TownId=' + townId + '&StartPage=' + startPage + '&PageSize=' + pageSize })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                error(data);
            })
        },

        publishAdd: function (success, error, add) {
            $http({
                method: 'POST',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
                },
                data: add
            })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                error(data);
            })
        },

        getUserAdds: function (success, error, status, startPage, pageSize) {
            if (startPage === 0) {
                startPage = 1;
            }

            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Ads?Status=' + status + '&StartPage=' + startPage + '&PageSize=' + pageSize,
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
        },

        deactivateUserAdd: function (success, error, id) {
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Ads/Deactivate/' + id,
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
        },

        editUserAdd: function (success, error, userAdd) {
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Ads/' + userAdd.id,
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
                },
                data: userAdd
            })
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
                $log.error(data);
                error(data);
            })
        },

        publishAgainUserAdd: function (success, error, id) {
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Ads/PublishAgain/' + id,
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
        },

        getUserAdd: function (success, error, id) {
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Ads/' + id,
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
        },

        deleteUserAdd: function (success, error, id) {
            $http({
                method: 'DELETE',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Ads/' + id,
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

angularSpaAdds.factory('addsTransferData', function () {
    var data = [];
    var ctrl = {};

    ctrl.set = function (d) {
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
    var status = '';
    var ctrl = {};

    ctrl.setStatus = function (d) {
        status = d;
    };

    ctrl.getStatus = function () {
        return status;
    };

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

angularSpaAdds.factory('addsFiltering', function () {
    var town = "";
    var category = "";
    var ctrl = {};

    ctrl.setTown = function (d) {
        town = d;
    };

    ctrl.getTown = function () {
        return town;
    };


    ctrl.setCategory = function (d) {
        category = d;
    };

    ctrl.getCategory = function () {
        return category;
    };

    return ctrl;
});