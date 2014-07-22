/**
 * Created by Superman on 7/12/2014.
 */

define(function(require){
    var parallax = require('parallax'),
        CurrentWeatherModel = require('models/currentWeatherModel'),
        HourlyWeatherModel = require('models/hourlyWeatherModel'),
        DailyWeatherModel = require('models/dailyWeatherModel'),
        CurrentWeatherView = require('views/CurrentWeatherView'),
        MainTabWeatherView = require('views/mainTabWeatherView'),
        HourlyTabWeatherView = require('views/tabs/hourlyWeatherView'),
        DailyTabWeatherView = require('views/tabs/dailyWeatherView');

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

        $('a[href="#hourlyTab"]').on('shown.bs.tab', function (e) {
            var currentWeatherModel = new HourlyWeatherModel();
            new HourlyTabWeatherView({ model: currentWeatherModel });
        })

        $('a[href="#dailyTab"]').on('shown.bs.tab', function (e) {
            var currentWeatherModel = new DailyWeatherModel();
            new DailyTabWeatherView({ model: currentWeatherModel });
        })
    });
});