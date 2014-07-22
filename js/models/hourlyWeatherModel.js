/**
 * Created by Superman on 7/19/2014.
 */

define(['helpers'], function (helpers) {
    return Backbone.Model.extend({
        url: helpers.ApiUrlFabric.hourly,
        parse: function (response) {
            var hours = _.map(response.list, function (item) {
                return {
                    date: new Date(item.dt_txt),
                    temp: item.main.temp,
                    desc: item.weather[0].description,
                    icon: item.weather[0].icon,
                    title: item.weather[0].main,
                    humidity: item.main.humidity,
                    pressure: item.main.pressure,
                    windSpeed: item.wind.speed
                };
            });

            this.attributes = {
                city: response.city.name,
                country: response.city.country,
                hours: hours
            };
        }
    });
});