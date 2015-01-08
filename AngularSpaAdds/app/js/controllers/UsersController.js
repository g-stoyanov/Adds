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
        sessionStorage.setItem('isAdmin', resp.isAdmin?resp.isAdmin:false);
        sessionStorage.setItem('isLogged', true);
    }

    $scope.register = function (user, registrationForm) {
        userData.register(function (resp) {
            notifier.success('Successfully registered');
            $scope.registerLogin(resp);
            if (!resp.isAdmin) {
                $location.path('/user/home');
            } else {
                $location.path('/admin/home');
            }
            
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, user, registrationForm);
    }

    $scope.login = function (loginUser, loginForm) {
        userData.login(function (resp) {
            notifier.success('Welcome back ' + resp.username);
            $scope.registerLogin(resp);
            if (!resp.isAdmin) {
                $location.path('/user/home');
            } else {
                $location.path('/admin/home');
            }
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.error_description);
        }, loginUser, loginForm);
    }

    $scope.logout = function () {
        sessionStorage.clear();
        $location.path('/');
    }
})