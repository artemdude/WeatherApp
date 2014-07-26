/**
 * Created by Superman on 7/25/2014.
 */

define(function(require){
    var MainView = require('views/mainPageView');

    return Backbone.Router.extend({
        initialize: function(){
            Backbone.history.start();
        },
        routes: {
            "":                             "mainPage",
            "about":                        "aboutPage",
            ":location":                    "mainPageWithLocation",
            ":location/temperature":        "temperatureChartTab",
            ":location/wind":               "windChartTab",
            ":location/pressure":           "pressureChartTab",
            ":location/humidity":           "humidityChartTab"
        },
        mainPage: function() {
            this.getCurrentLocation(function(params){
                new MainView({params: params});
            });
        },
        mainPageWithLocation: function(location){
            new MainView({params: {
                q: location,
                units: 'metric'
            }});
        },
        aboutPage: function(){
            alert('about');
        },
        getCurrentLocation: function(callback){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    callback({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        units: 'metric'
                    });
                });
            } else {
                this.router.navigate('about', {trigger: true});
                alert("Geolocation is not supported by this browser.");
            }
        }
    });
})