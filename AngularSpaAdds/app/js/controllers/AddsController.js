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
    notifier) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;
    $scope.templates = templates;
    $scope.category = {};
    $scope.town = {};
    $scope.add = {};

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

    $scope.reloadAdds = function (isFilter) {
        if (isFilter) {
            $scope.addsFiltering.setTown($scope.town.id);
            $scope.addsFiltering.setCategory($scope.category.id);
            $scope.addsPaging.setCurrentPage(1);
        }

        addsData.getAllAdds(function (resp) {
            $scope.allAddsData.set(resp);
            if (resp.ads.length === 0) {
                $scope.addsPaging.setCurrentPage(0);
            }

            $scope.addsPaging.setNumPages(resp.numPages);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, $scope.addsFiltering.getCategory() ? $scope.addsFiltering.getCategory() : '', $scope.addsFiltering.getTown() ? $scope.addsFiltering.getTown() : '', $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
    }

    addsData.getAllAdds(function (resp) {
        $scope.allAddsData.set(resp);
        if (resp.ads.length === 0) {
            $scope.addsPaging.setCurrentPage(0);
        }

        $scope.addsPaging.setNumPages(resp.numPages);
    }, function (resp, status, headers, config) {
        $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
        notifier.error(resp.modelState[""]);
    }, $scope.addsFiltering.getCategory() ? $scope.addsFiltering.getCategory() : '', $scope.addsFiltering.getTown() ? $scope.addsFiltering.getTown() : '', $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());

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
    $scope.previewPic = function (files) {
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

    categoriesData.getAllCategories(function (resp) {
        $scope.allCategoriesData = resp;
    });

    townsData.getAllTowns(function (resp) {
        $scope.allTownsData = resp;
    });

    $scope.numPages = function () {
        return $scope.allAddsData.numPages;
    };
})