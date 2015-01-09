﻿angularSpaAdds.controller('FilterController', function ($scope, templates, addsTransferData, addsPaging, addsFiltering, reloadAdds, addsData, townsData, categoriesData) {
    $scope.templates = templates;
    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;
    $scope.category = {};
    $scope.town = {};

    townsData.getAllTowns(function (resp) {
        $scope.allTownsData = resp;
    });

    categoriesData.getAllCategories(function (resp) {
        $scope.allCategoriesData = resp;
    });

    $scope.reloadAdds = function (isFilter) {
        reloadAdds($scope, addsData, isFilter);
    }
})