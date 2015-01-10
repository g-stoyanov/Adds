angularSpaAdds.controller('UserDataController', function (
    $scope,
    $log,
    $location,
    userData,
    notifier) {

    $scope.userProfile = {};
    $scope.updatePassword = {};
    var path = $location.path();

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