/**
 * Created by Superman on 7/22/2014.
 */

/**
 * Created by Superman on 7/21/2014.
 */

define(['helpers', 'text!templates/tabs/dailyWeatherTemplate.html'], function (helpers, template) {
    return Backbone.View.extend({
        el: '#dailyTab',
        initialize: function () {
            this.model.fetch({
                success: _.bind(function () {
                    this.render();
                }, this),
                data: { q: 'London', units: 'metric'} });
        },
        render: function () {
            var days = _.each(this.model.attributes.days, function (item) {
                item.formattedDate = helpers.DateTimeHelper.getShortDate(item.date);
                item.formattedDay = helpers.DateTimeHelper.getFullDay(item.date);
                item.iconCss = helpers.CssHelper.getCssClassByIcon(item.icon);

                return item;
            });

            this.$el.html(_.template(template, {days: days}));
            return this;
        }
    });
});