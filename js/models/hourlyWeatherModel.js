/**
 * Created by Superman on 7/19/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        baseModel = require('models/baseNestedModel');

    return baseModel.extend({
        url: helpers.ApiUrls.hourly,
        adapt: function (response) {
            var hours = _.map(response.list, function (item) {
                return {
                    date: moment.unix(item.dt).toDate(),
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