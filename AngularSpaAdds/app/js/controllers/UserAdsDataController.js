angularSpaAdds.controller('UserAddsDataController', function ($scope, $routeParams, $location, $log, addsData, notifier, addsTransferData, addsPaging, addsFiltering) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;

    if ($location.path().indexOf("/user/ads/delete/") === -1 && $location.path().indexOf("/user/ads/edit/") === -1) {
        addsData.getUserAdds(function (resp) {
            $scope.allAddsData.set(resp);
            scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage() === 0 ? 1 : scope.addsPaging.getCurrentPage());
            if (resp.ads.length === 0) {
                $scope.addsPaging.setCurrentPage(0);
            } else {
                scope.addsPaging.setCurrentPage(scope.addsPaging.getCurrentPage());
            }

            if (!status) {
                status = '';
            }

            $scope.addsPaging.setNumPages(resp.numPages);
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, status, $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
    }

    if ($location.path().indexOf("/user/ads/delete/") > -1 || $location.path().indexOf("/user/ads/edit/") > -1) {

        addsData.getUserAdd(function (resp) {
            $scope.userAdd = resp;
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, $routeParams.id);
    }

    $scope.deleteUserAdd = function (id) {
        addsData.deleteUserAdd(function (resp) {
            notifier.success('Advertisement successfully deleted.');
            $location.path('/user/ads');
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, id);
    }

    $scope.editUserAdd = function (id) {
        addsData.editUserAdd(function (resp) {
            notifier.success('Advertisement successfully updated.');
            $location.path('/user/ads');
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error(resp.modelState[""]);
        }, id);
    }

    $scope.changePic = function (files) {
        delete $scope.userAdd.imageDataUrl;
        var file = files[0];
        var imgPreview = document.getElementById('imagePreview');

        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                $scope.userAdd.imageDataUrl = reader.result;
                imgPreview.src = $scope.userAdd.imageDataUrl;
            };
            reader.readAsDataURL(file);
        } else {
            imgPreview.src = 'img/No_image_available.svg';
        }
    }
})