/**
 * Created by Superman on 7/19/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        template = require('text!templates/currentWeatherTemplate.html'),
        baseView = require('views/baseNestedView');

    return baseView.extend({
        //el: '#currentWeatherContainer',
        render: function () {
            var model = this.model.attributes,
                viewModel = $.extend({}, model, {
                    units: helpers.Units.getCurrentFormattedUnits(),
                    iconCss: helpers.CssHelper.getCssClassByIcon(model.icon),
                    currentTime: helpers.DateTimeHelper.getFullDateTime(),
                    formattedSunrise: helpers.DateTimeHelper.getShortTime(model.sunrise),
                    formattedSunset: helpers.DateTimeHelper.getShortTime(model.sunset)
            });

            this.$el.html(_.template(template, viewModel));
            return this;
        }
    });
});