/**
 * Created by Superman on 7/19/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        baseModel = require('models/baseNestedModel');

    return baseModel.extend({
        url: helpers.ApiUrls.weather,
        adapt: function(response){
            this.attributes = {
                city: response.name,
                country: response.sys.country,
                sunrise: response.sys.sunrise,
                sunset: response.sys.sunset,
                desc: response.weather[0].description,
                icon: response.weather[0].icon,
                title: response.weather[0].main,
                humidity: response.main.humidity,
                pressure: response.main.pressure,
                temp: response.main.temp,
                windSpeed: response.wind.speed
            };
        }
    });
});

