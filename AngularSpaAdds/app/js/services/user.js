angularSpaAdds.factory('userData', function ($http, $log) {
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
                        error(data);
                        $log.error(data);
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
                        error(data);
                        $log.error(data);
                    })
            } else {
                alert('Fill all the required fields with correct data.');
            }
        }
    }
})