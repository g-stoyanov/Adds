angularSpaAdds.controller('TownsDataController', function ($scope, townsData) {
    townsData.getAllTowns(function (resp) {
        $scope.allTownsData = resp;
    });
})