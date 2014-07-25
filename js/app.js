/**
 * Created by Superman on 7/12/2014.
 */

define(function (require) {
    var Router = require('router'),
        AppView = require('views/appView');

    //entry point
    $(function () {
        new Router();
        new AppView();
    });
});
