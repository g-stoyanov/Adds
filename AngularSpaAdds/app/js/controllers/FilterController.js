angularSpaAdds.controller('FilterController', function ($scope, templates, addsTransferData, addsPaging, addsFiltering, reloadAdds, addsData) {
    $scope.templates = templates;

    $scope.reloadAdds = function (isFilter) {
        reloadAdds($scope, addsTransferData, addsPaging, addsFiltering, addsData, isFilter);
    }
})