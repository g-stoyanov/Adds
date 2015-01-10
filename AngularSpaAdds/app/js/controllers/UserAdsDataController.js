angularSpaAdds.controller('UserAddsDataController', function ($scope, $routeParams, $location, $log, addsData, notifier, addsTransferData, addsPaging, addsFiltering) {

    $scope.allAddsData = addsTransferData;
    $scope.addsPaging = addsPaging;
    $scope.addsFiltering = addsFiltering;

    var path = $location.path();

    if (path.indexOf("/user/ads/delete/") === -1 && path.indexOf("/user/ads/edit/") === -1 && path !== "/user/profile") {
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
            notifier.error("Cannot load advertisements data.");
            $location.path('/user/home');
        }, status, $scope.addsPaging.getCurrentPage(), $scope.addsPaging.getMaxSize());
    }

    if (path.indexOf("/user/ads/delete/") > -1 || path.indexOf("/user/ads/edit/") > -1) {

        addsData.getUserAdd(function (resp) {
            $scope.userAdd = resp;

            if (path.indexOf("/user/ads/edit/") > -1) {
                var imgPreview = document.getElementById('imagePreview');
                imgPreview.src = $scope.userAdd.imageDataUrl;
                $scope.userAdd.ChangeImage = false;
            }
           
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error("Cannot load advertisement data.");
            $location.path('/user/ads');
        }, $routeParams.id);
    }

    $scope.deleteUserAdd = function (id) {
        addsData.deleteUserAdd(function (resp) {
            notifier.success('Advertisement successfully deleted.');
            $location.path('/user/ads');
        }, function (resp, status, headers, config) {
            $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
            notifier.error("Cannot delete advertisement.");
            $location.path('/user/ads');
        }, id);
    }

    $scope.editUserAdd = function (userAdd, editAddForm) {
        if (editAddForm.$valid) {
            addsData.editUserAdd(function (resp) {
                notifier.success("Advertisement edited. Don't forget to submit it for publishing.");
                $location.path('/user/ads');
            }, function (resp, status, headers, config) {
                $log.error('Status: ' + status + '\nData: ' + JSON.stringify(resp));
                notifier.error("Cannot update advertisement.");
                $location.path('/user/ads');
            }, userAdd);
        }
    }

    $scope.setChangePic = function () {
        $scope.userAdd.ChangeImage = !$scope.userAdd.ChangeImage;

        if ($scope.userAdd.ChangeImage) {
            notifier.success("Advertisement image state set to ON.");
            notifier.warning("All image data changes will be saved.");
        } else {
            notifier.success("Advertisement image state set to OFF.");
            notifier.warning("All image data changes will be discarded.");
        }
    }

    $scope.deletePic = function () {
        if ($scope.userAdd.imageDataUrl) {
            delete $scope.userAdd.imageDataUrl;
        }

        notifier.success("Advertisement image deleted.");        
        notifier.warning("If you want to keep deleted original image please set 'Change image' state to 'NO' before submit, else set it to 'YES'");

        var imgPreview = document.getElementById('imagePreview');
        imgPreview.src = 'img/No_image_available.svg';
    }

    $scope.changePic = function (files) {
        if ($scope.userAdd.imageDataUrl) {
            delete $scope.userAdd.imageDataUrl;
        }

        var file = files[0];
        var imgPreview = document.getElementById('imagePreview');

        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                $scope.userAdd.imageDataUrl = reader.result;

                notifier.success("Advertisement image changed.")
                notifier.warning("If you to want keep original image please set 'Change image' state to 'NO' before submit, else set it to 'YES'");

                imgPreview.src = $scope.userAdd.imageDataUrl;
            };
            reader.readAsDataURL(file);
        } else {
            notifier.error("Bad image file.");
            notifier.warning("If you want to keep original image please set 'Change image' state to 'NO' before submit, else set it to 'YES'");
            imgPreview.src = 'img/No_image_available.svg';
        }
    }
})