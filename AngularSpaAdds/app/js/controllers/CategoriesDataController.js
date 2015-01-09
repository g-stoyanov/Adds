angularSpaAdds.controller('CategoriesDataController', function ($scope, categoriesData) {
    categoriesData.getAllCategories(function (resp) {
        $scope.allCategoriesData = resp;
    });
})