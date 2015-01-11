angularSpaAdds.controller('FilterController', function ($scope, templates, addsTransferData, addsPaging, addsFiltering, reloadAdds, addsData, reloadAdminAdds, townsData, categoriesData, adminAddsFiltering, adminAddsData) {
    $scope.templates = templates;
    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;
    $scope.category = {};
    $scope.town = {};
    $scope.adminAddsFiltering = adminAddsFiltering;

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
            reloadAdminAdds($scope, adminAddsData, isFilter);
        }
        
    }
})