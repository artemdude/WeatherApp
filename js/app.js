/**
 * Created by Superman on 7/12/2014.
 */

define(function(require){
    var parallax = require('parallax'),
        CurrentWeatherModel = require('models/CurrentWeatherModel'),
        HourlyWeatherModel = require('models/HourlyWeatherModel'),
        CurrentWeatherView = require('views/CurrentWeatherView'),
        MainTabWeatherView = require('views/MainTabWeatherView');

    $(function () {
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
            var currentWeatherModel = new HourlyWeatherModel();
            new MainTabWeatherView({ model: currentWeatherModel });
        })
    });
});