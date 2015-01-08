angularSpaAdds.factory('templates', function () {

    var templ = {
        //home
        "homePanel": "templates/home/home-log-reg.html",
        "homeNavigation": "templates/home/home-navigation.html",

        //user
        "userHomeNavigation": "templates/user/user-home-nav.html",
        "userMyAdsPanel": "templates/user/user-my-ads-panel.html",

        //admin
        "adminHomeNavigation": "templates/admin/admin-home-nav.html",
        "adminAdsPanel": "templates/admin/admin-ads-panel.html",

        //filter
        "filterDropDowns": "templates/filter/filter-drop-downs.html",
        "categoriesDropDown": "templates/filter/categories-drop-down.html",
        "townsDropDown": "templates/filter/towns-drop-down.html",

        //adds
        "add": "templates/adds/add.html",
        "allAdds": "templates/adds/all-ads.html",

        //misc
        "pagination": "templates/misc/pagination.html"
    };

    return templ;
});