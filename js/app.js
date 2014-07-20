/**
 * Created by Superman on 7/12/2014.
 */

define(['models/CurrentWeatherModel', 'views/CurrentWeatherView'], function(CurrentWeatherModel, CurrentWeatherView){
    $(function () {
        alert('sssssssssssss');

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

        var currentWeatherModel = new CurrentWeatherModel();
        new CurrentWeatherView({ model: currentWeatherModel });

        $('a[href="#mainTab"]').on('shown.bs.tab', function (e) {
//
//        var currentWeatherModel = new HourlyWeatherModel();
//        var c = new MainTabWeatherView({ model: currentWeatherModel });
        })
    });
});