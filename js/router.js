/**
 * Created by Superman on 7/25/2014.
 */

define(function(require){
    var AppModel = require('models/appModel'),
        MainView = require('views/mainPageView');

    return Backbone.Router.extend({
        initialize: function(){
            Backbone.history.start();
        },
        routes: {
            "":                     "mainPage",
            ":location":            "mainPageWithLocation",
            "about":                "aboutPage",
            ":location/temperature":          "temperatureChartTab",
            ":location/wind":                 "windChartTab",
            ":location/pressure":             "pressureChartTab",
            ":location/humidity":             "humidityChartTab"
        },
//        getMainView: function(){
//            if(!this.mainView){
//                this.mainView = new MainView();
//            }
//
//            return this.mainView;
//        },
        mainPage: function() {
            new MainView({params: {
                location: 'Kiev',
                units: 'metric'
            }});
        },
        mainPageWithLocation: function(location){
            new MainView({params: {
                location: location,
                units: 'metric'
            }});
        },
        aboutPage: function(){
            alert('about');
        }
//        mainTab: function(location) {
//            this.getMainView();
//            $('a[href="#mainTab"]').tab('show')
//        },
//        hourlyTab: function(location){
//            this.getMainView();
//            $('a[href="#hourlyTab"]').tab('show')
//        },
//        dailyTab: function(location){
//            alert(location);
//            this.getMainView();
//            $('a[href="#dailyTab"]').tab('show')
//        },
//        temperatureChartTab: function(location){
//            this.getMainView();
//            $('a[href="#temperatureChartTab"]').tab('show')
//        },
//        windChartTab: function(location){
//            this.getMainView();
//            $('a[href="#windChartTab"]').tab('show')
//        },
//        pressureChartTab: function(location){
//            this.getMainView();
//            $('a[href="#pressureChartTab"]').tab('show')
//        },
//        humidityChartTab: function(location){
//            this.getMainView();
//            $('a[href="#humidityChartTab"]').tab('show')
//        }
    });
})