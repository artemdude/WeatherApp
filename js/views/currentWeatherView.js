/**
 * Created by Superman on 7/19/2014.
 */

define(['helpers', 'text!templates/currentWeatherTemplate.html'], function(helpers, template) {
    return Backbone.View.extend({
        el: '#currentWeatherContainer',
        initialize: function () {
            this.model.fetch({
                success: _.bind(function () {
                    this.render();
                }, this),
                data: { q: 'London', units: 'metric'} });
        },
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