angularSpaAdds.factory('userData', function ($http) {
    return {

        register: function (success, error, user, registrationForm) {
            if (registrationForm.$valid) {
                $http({
                    method: 'POST',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/register',
                    data: user
                })
                    .success(function (data, status, headers, config) {
                        success(data);
                    })
                    .error(function (data, status, headers, config) {
                        error(data, status, headers, config);
                    })
            }
        },

        login: function (success, error, loginUser, loginForm) {
            if (loginForm.$valid) {
                $http({
                    method: 'POST',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/login',
                    data: loginUser
                })
                    .success(function (data, status, headers, config) {
                        success(data);
                    })
                    .error(function (data, status, headers, config) {
                        error(data, status, headers, config);
                    })
            }
        },

        changeUserPassword: function (success, error) {
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/User/ChangePassword',
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

        changeUserProfile: function (success, error) {
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Profile',
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

        getUserProfile: function (success, error) {
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/User/Profile',
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
})