angularSpaAdds.factory('notifier', function (toastr) {
    toastr.options.progressBar = true;
    toastr.options.positionClass = "toast-top-center";
    return {
        success: function (msg) {
            toastr.success(msg);
        },
        error: function (msg) {
            toastr.error(msg);
        }
    }
});