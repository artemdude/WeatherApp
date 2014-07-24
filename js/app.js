/**
 * Created by Superman on 7/12/2014.
 */

define(function(require){
    //entry point
    $(function () {
        var MainPageView = require('views/mainPageView');

        $('.clouds-bg').parallax({
            calibrateX: false,
            calibrateY: true,
            invertX: false,
            invertY: true,
            limitX: false,
            limitY: false,
            scalarX: 2,
            scalarY: 2,
            frictionX: 0.1,
            frictionY: 0.3,
            originX: 0.0,
            originY: 0.0
        });

        new MainPageView();
    });
});