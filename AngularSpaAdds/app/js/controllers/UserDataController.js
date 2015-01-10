angularSpaAdds.controller('UsersController', function (
    $scope,
    $log,
    $location,
    userData,
    notifier) {

    $scope.userProfile = {};
    $scope.updatePassword = {};

    if (path === "/user/profile") {
        userData.getUserProfile(function (resp) {
            $scope.userProfile = resp;
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error("Cannot load user profile data.");
            $location.path('/user/ads');
        });
    }
})