angularSpaAdds.factory('notifier', function (toastr) {
    toastr.options.progressBar = true;
    toastr.options.positionClass = "toast-top-center";
    return {
        success: function (msg) {
            toastr.success(msg, 'AngularSpaAdds - OK');
        },
        error: function (msg) {
            toastr.error(msg, 'AngularSpaAdds - ERROR');
        },
        warning: function (msg) {
            toastr.warning(msg, 'AngularSpaAdds - WARNING')
        },
        info: function (msg) {
            toastr.info(msg, 'AngularSpaAdds - INFO')
        }
    }
});