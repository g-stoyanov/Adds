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

    var un = sessionStorage.username ? sessionStorage.username : "";
    $scope.username = un.substring(1, un.length - 1);
    $scope.user = {};

    $scope.registerLogin = function (resp) {
        sessionStorage.setItem('accessToken', JSON.stringify(resp.access_token));
        sessionStorage.setItem('tokenType', JSON.stringify(resp.token_type));
        sessionStorage.setItem('username', JSON.stringify(resp.username));
        sessionStorage.setItem('isAdmin', JSON.stringify(resp.isAdmin));
        sessionStorage.setItem('isLogged', JSON.stringify(true));
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