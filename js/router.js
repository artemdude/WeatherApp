/**
 * Created by Superman on 7/25/2014.
 */

define(function(require){
    var helpers = require('helpers'),
        MainView = require('views/mainPageView'),
        AboutView = require('views/aboutPageView');

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
            var units = this.getUnits();

            this.getCurrentLocation(function(params){
                new MainView({params: _.extend(params, { units : units })});
            });
        },
        mainPageWithLocation: function(location){
            var units = this.getUnits();

            new MainView({params: {
                q: location,
                units : units
            }});
        },
        aboutPage: function(){
            new AboutView();
        },
        getUnits: function(){
            var units = helpers.LocalCache.getUnits();

            if(!units){
                helpers.LocalCache.setUnits(helpers.Units.type.celsius);
                return helpers.Units.type.celsius;
            }

            return units;
        },
        getCurrentLocation: function(callback){
            var location = helpers.LocalCache.getLocation();

            if(location){
                callback($.parseJSON(location));
            }
            else{
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        location = {
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        };

                        helpers.LocalCache.setLocation(JSON.stringify(location));
                        callback(location);
                    });
                } else {
                    this.router.navigate('about', {trigger: true});
                    alert("Geolocation is not supported by this browser.");
                }
            }
        }
    });
})