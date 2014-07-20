/**
 * Created by Superman on 7/19/2014.
 */

define(['backbone', 'helpers'], function(Backbone, helpers) {
    var CurrentWeatherModel = Backbone.Model.extend({
        url: helpers.ApiUrlFabric.weather,
//        fetch: function(options){
//            return Backbone.Model.prototype.fetch.call(this, options);
//        },
        parse: function(response){
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
                windDeg: response.wind.deg,
                windGust: response.wind.gust,
                windSpeed: response.wind.speed
            };
        }
    });

    return CurrentWeatherModel;
});

