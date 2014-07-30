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
            var view,
                units = this.getUnits();

            this.getCurrentLocation(function(location){
                view = new MainView({
                    params: _.extend(location, { units: units })
                });

                $('#pageContainer').html(view.el);
            });
        },
        mainPageWithLocation: function(location){
            var view = new MainView({params: {
                q: location,
                units : this.getUnits()
            }});

            $('#pageContainer').html(view.el);
        },
        aboutPage: function(){
            var view = new AboutView();

            $('#pageContainer').html(view.el);
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