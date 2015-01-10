angularSpaAdds.controller('AddsController', function (
    $scope,
    $log,
    $location,
    templates,
    addsTransferData,
    addsData,
    addsFiltering,
    addsPaging,
    categoriesData,
    townsData,
    notifier,
    reloadAdds) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;
    $scope.templates = templates;
    $scope.category = {};
    $scope.town = {};
    $scope.add = {};

    $scope.allAddsData.set([]);

    $scope.reloadAdds = function (isFilter) {
        reloadAdds($scope, addsData, isFilter);
    }

    reloadAdds($scope, addsData, false);

    $scope.goToPage = function (mod) {
        if ($scope.addsPaging.getCurrentPage() + mod > 0 && $scope.addsPaging.getCurrentPage() + mod <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage($scope.addsPaging.getCurrentPage() + mod);
            $scope.reloadAdds(false);
        }
    }

    $scope.borderPages = function (page) {
        if (page > 0 && page <= $scope.addsPaging.getNumPages()) {
            $scope.addsPaging.setCurrentPage(page);
            $scope.reloadAdds(false);
        }
    }

    $scope.publish = function (publishAddForm) {
        if (publishAddForm.$valid) {
            addsData.publishAdd(function (resp) {
                notifier.success("Advertisement submitted for approval. Once approved, it will be published.");
                $location.path('/user/ads');
            }, function (resp, status, headers, config) {
                $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
                notifier.error(resp.modelState[""]);
            }, $scope.add);
        } 
    }

    $scope.changePic = function (files) {
        delete $scope.add.imageDataUrl;
        var file = files[0];
        var imgPreview = document.getElementById('imagePreview');

        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                $scope.add.imageDataUrl = reader.result;
                imgPreview.src = $scope.add.imageDataUrl;
            };
            reader.readAsDataURL(file);
        } else {
            imgPreview.src = 'img/No_image_available.svg';
        }
    }

    $scope.numPages = function () {
        return $scope.allAddsData.numPages;
    };
})