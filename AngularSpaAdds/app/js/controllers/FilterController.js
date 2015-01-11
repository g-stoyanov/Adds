angularSpaAdds.controller('FilterController', function ($scope, templates, addsTransferData, addsPaging, addsFiltering, reloadAdds, addsData, reloadAdminAdds, townsData, categoriesData) {
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
        if (sessionStorage['isAdmin'] != 'true') {
            reloadAdds($scope, addsData, isFilter);
        } else {
            reloadAdminAdds($scope, addsData, isFilter);
        }
        
    }
})