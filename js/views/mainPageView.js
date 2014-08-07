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
        events: {
            'shown.bs.tab a[role=tab]': 'tabShown',
            'shown.bs.tab a[href="#mainTab"]' : 'renderMainTab',
            'shown.bs.tab a[href="#hourlyTab"]' : 'displayHourlyTab',
            'shown.bs.tab a[href="#dailyTab"]' : 'renderDailyTab',

            'shown.bs.tab a[href="#temperatureChartTab"]' : 'renderTemperatureTab',
            'shown.bs.tab a[href="#windChartTab"]' : 'renderWindTab',
            'shown.bs.tab a[href="#pressureChartTab"]' : 'renderPressureTab',
            'shown.bs.tab a[href="#humidityChartTab"]' : 'renderHumidityChartTabTab'
        },
        initialize: function (options) {
            this.params = options.params;
            this.render();
        },
        render: function () {
            this.$el.html(template);
            this.renderCurrentWeather();
            this.renderMainTab();
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
        tabShown: function(){
            //to resize charts
            $(window).trigger('resize');
        },
        renderCurrentWeather: function(){
            var view = new CurrentWeatherView({
                params: this.getQueryParams(),
                model: new CurrentWeatherModel()
            });

            this.$el.find('#currentWeatherContainer').html(view.el);
        },
        renderMainTab: function(){
            var $container = this.$el.find('#mainTab'),
                view;

            if($container.is(':empty')) {
                view = new MainTabWeatherView({
                    params: this.getQueryParams(),
                    model: new HourlyWeatherModel()
                });

                $container.html(view.el);
            }
        },
        displayHourlyTab: function(){
            var $container = this.$el.find('#hourlyTab'),
                view;

            if($container.is(':empty')){
                view = new HourlyTabWeatherView({
                    params: this.getQueryParams(),
                    model: new HourlyWeatherModel()
                });

                $container.html(view.el);
            }
        },
        renderDailyTab: function(){
            var $container = this.$el.find('#dailyTab'),
                view;

            if($container.is(':empty')) {
                view = new DailyTabWeatherView({
                    params: this.getQueryParams(),
                    model: new DailyWeatherModel()
                });

                $container.html(view.el);
            }
        },
        renderTemperatureTab: function(){
            var $container = this.$el.find('#temperatureChartTab'),
                view;

            if($container.is(':empty')) {
                view = new TemperatureChartView({
                    params: this.getQueryParams(),
                    model: new HourlyWeatherModel()
                });

                $container.html(view.el);
            }
        },
        renderWindTab: function(){
            var $container = this.$el.find('#windChartTab'),
                view;

            if($container.is(':empty')) {
                view = new WindChartView({
                    params: this.getQueryParams(),
                    model: new HourlyWeatherModel()
                });

                $container.html(view.el);
            }
        },
        renderPressureTab: function(){
            var $container = this.$el.find('#pressureChartTab'),
                view;

            if($container.is(':empty')) {
                view = new PressureChartView({
                    params: this.getQueryParams(),
                    model: new HourlyWeatherModel()
                });

                $container.html(view.el);
            }
        },
        renderHumidityChartTabTab: function(){
            var $container = this.$el.find('#humidityChartTab'),
                view;

            if($container.is(':empty')) {
                view = new HumidityChartView({
                    params: this.getQueryParams(),
                    model: new HourlyWeatherModel()
                });

                $container.html(view.el);
            }
        }
    });
});