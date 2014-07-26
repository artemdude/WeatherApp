/**
 * Created by Superman on 7/19/2014.
 */

define(['helpers', 'text!templates/currentWeatherTemplate.html', 'views/baseNestedView'], function(helpers, template, baseView) {
    return baseView.extend({
        el: '#currentWeatherContainer',
        render: function () {
            var model = this.model.attributes,
                viewModel = $.extend({}, model, {
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