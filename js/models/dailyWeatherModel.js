/**
 * Created by Superman on 7/22/2014.
 */

define(['helpers'], function (helpers) {
    return Backbone.Model.extend({
        url: helpers.ApiUrlFabric.daily,
        parse: function (response) {
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