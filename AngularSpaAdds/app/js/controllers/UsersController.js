angularSpaAdds.controller('UsersController', function (
    $scope,
    $log,
    $location,
    templates,
    addsData,
    categoriesData,
    townsData,
    userData,
    notifier) {

    $scope.username = sessionStorage.username ? sessionStorage.username : "";
    $scope.user = {};

    $scope.registerLogin = function (resp) {
        sessionStorage.setItem('accessToken', resp.access_token);
        sessionStorage.setItem('tokenType', resp.token_type);
        sessionStorage.setItem('username', resp.username);
        sessionStorage.setItem('isAdmin', resp.isAdmin);
        sessionStorage.setItem('isLogged', true);
    }

    $scope.register = function (user, registrationForm) {
        userData.register(function (resp) {
            notifier.success('User account created.');
            notifier.success('Hello ' + resp.username + ', we welcome the fact that you decided to use our services.');
            $scope.registerLogin(resp);
            if (resp['isAdmin'] != 'true') {
                $location.path('/user/home');
            } else {
                $location.path('/admin/home');
            }

        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error('Cannot create account!');
            var vals = Object.keys(resp.modelState).map(function (key) {
                return resp.modelState[key];
            });

            for (var value in vals) {
                if (vals[value]) {
                    notifier.error(vals[value]);
                }
            }

        }, user, registrationForm);
    }

    $scope.login = function (loginUser, loginForm) {
        userData.login(function (resp) {
            notifier.success('Welcome back ' + resp.username);
            $scope.registerLogin(resp);
            if (resp['isAdmin'] != 'true') {
                $location.path('/user/home');
            } else {
                $location.path('/admin/home');
            }
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.error_description);
            if (resp.modelState[""]) {
                notifier.error(resp.modelState[""]);
            }

        }, loginUser, loginForm);
    }

    $scope.logout = function () {
        userData.logout(function (resp) {
            notifier.success('Successfully logout. Good bye!');
            sessionStorage.clear();
            $location.path('/');
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error('Logout error!');
            if (resp.modelState[""]) {
                notifier.error(resp.modelState[""]);
            }

            $location.path('/');
        })
    }

    $scope.updateUserProfile = function (userProfile, editProfileForm) {
        if (editProfileForm.$valid) {
            userData.changeUserProfile(function (resp) {
                notifier.success('Successfully update user profile.');
                $location.path('/user/home');
            }, function (resp, status, headers, config) {
                $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
                notifier.error('Cannot update user profile.');
                if (resp.modelState[""]) {
                    notifier.error(resp.modelState[""]);
                }

                $location.path('/user/home');
            }, userProfile)
        } else {
            notifier.error('Invalid user profile data!');
        }

    }

    $scope.updateUserPassword = function (updatePassword, editPasswordForm) {
        if (editPasswordForm.$valid) {
            userData.changeUserPassword(function (resp) {
                notifier.success('Successfully update user password.');
                $location.path('/user/home');
            }, function (resp, status, headers, config) {
                $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
                notifier.error('Cannot update user password.');
                if (resp.modelState[""]) {
                    notifier.error(resp.modelState[""]);
                }

                $location.path('/user/home');
            }, updatePassword)
        } else {
            notifier.error('Invalid user password data!');
        }
    }


})