/**
 * Created by Superman on 7/24/2014.
 */

define(function(require) {
    var CurrentWeatherModel = require('models/currentWeatherModel'),
        DailyWeatherModel = require('models/dailyWeatherModel'),
        HourlyWeatherModel = require('models/hourlyWeatherModel'),

        CurrentWeatherView = require('views/CurrentWeatherView'),
        MainTabWeatherView = require('views/tabs/mainTabWeatherView'),
        HourlyTabWeatherView = require('views/tabs/hourlyWeatherView'),
        DailyTabWeatherView = require('views/tabs/dailyWeatherView'),
        TemperatureChartView = require('views/charts/temperatureChartView'),
        WindChartView = require('views/charts/windChartView'),
        PressureChartView = require('views/charts/pressureChartView'),
        HumidityChartView = require('views/charts/humidityChartView'),

        template = require('text!templates/mainPageTemplate.html'),
        helpers = 'helpers';

    return Backbone.View.extend({
        el: '#pageContainer',
        events: {
            'shown.bs.tab a[href="#mainTab"]' : 'renderMainTab',
            'shown.bs.tab a[href="#hourlyTab"]' : 'renderHourlyTab',
            'shown.bs.tab a[href="#dailyTab"]' : 'renderDailyTab',

            'shown.bs.tab a[href="#temperatureChartTab"]' : 'renderTemperatureTab',
            'shown.bs.tab a[href="#windChartTab"]' : 'renderWindTab',
            'shown.bs.tab a[href="#pressureChartTab"]' : 'renderPressureTab',
            'shown.bs.tab a[href="#humidityChartTab"]' : 'renderHumidityChartTabTab'
        },
        initialize: function (options) {
            this.params = options.params;
            this.render();
            this.renderCurrentWeather();
            this.renderMainTab();
        },
        render: function () {
            this.$el.html(template);
            return this;
        },
        getQueryParams: function(){
            return {
                lat: this.params.lat,
                lon: this.params.lon,
                q: this.params.q,
                units: this.params.units
            };
        },
        renderCurrentWeather: function(){
            new CurrentWeatherView({
                params: this.getQueryParams(),
                model: new CurrentWeatherModel()
            });
        },
        renderMainTab: function(){
            new MainTabWeatherView({
                params: this.getQueryParams(),
                model: new HourlyWeatherModel()
            });
        },
        renderHourlyTab: function(){
            new HourlyTabWeatherView({
                params: this.getQueryParams(),
                model: new HourlyWeatherModel()
            });
        },
        renderDailyTab: function(){
            new DailyTabWeatherView({
                params: this.getQueryParams(),
                model: new DailyWeatherModel()
            });
        },
        renderTemperatureTab: function(){
            new TemperatureChartView({
                params: this.getQueryParams(),
                model: new HourlyWeatherModel()
            });
        },
        renderWindTab: function(){
            new WindChartView({
                params: this.getQueryParams(),
                model: new HourlyWeatherModel()
            });
        },
        renderPressureTab: function(){
            new PressureChartView({
                params: this.getQueryParams(),
                model: new HourlyWeatherModel()
            });
        },
        renderHumidityChartTabTab: function(){
            new HumidityChartView({
                params: this.getQueryParams(),
                model: new HourlyWeatherModel()
            });
        }
    });
});