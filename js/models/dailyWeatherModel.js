/**
 * Created by Superman on 7/22/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        baseModel = require('models/baseNestedModel');

    return baseModel.extend({
        url: helpers.ApiUrls.daily,
        adapt: function (response) {
            var days = _.map(response.list, function (item) {
                return {
                    date: moment.unix(item.dt).toDate(),
                    temp: item.temp,
                    desc: item.weather[0].description,
                    icon: item.weather[0].icon,
                    title: item.weather[0].main,
                    humidity: item.humidity,
                    pressure: item.pressure,
                    windSpeed: item.speed
                };
            });

            this.attributes = {
                city: response.city.name,
                country: response.city.country,
                days: days
            };
        }
    });
});