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
            //console.log(this.model.get('location'));
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
                q: this.params.location,
                units: this.params.units
            };
        },
        renderCurrentWeather: function(){
            new CurrentWeatherView({ params: this.getQueryParams(), model: new CurrentWeatherModel()});
        },
        renderMainTab: function(){
            new MainTabWeatherView({ model: new HourlyWeatherModel() });
        },
        renderHourlyTab: function(){
            new HourlyTabWeatherView({ model: new HourlyWeatherModel() });
        },
        renderDailyTab: function(){
            new DailyTabWeatherView({ model: new DailyWeatherModel() });
        },
        renderTemperatureTab: function(){
            new TemperatureChartView({ model: new HourlyWeatherModel() });
        },
        renderWindTab: function(){
            new WindChartView({ model: new HourlyWeatherModel() });
        },
        renderPressureTab: function(){
            new PressureChartView({ model: new HourlyWeatherModel() });
        },
        renderHumidityChartTabTab: function(){
            new HumidityChartView({ model: new HourlyWeatherModel() });
        }
    });
});