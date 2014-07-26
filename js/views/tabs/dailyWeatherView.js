/**
 * Created by Superman on 7/22/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        template = require('text!templates/tabs/dailyWeatherTemplate.html'),
        baseView = require('views/baseNestedView');

    return baseView.extend({
        el: '#dailyTab',
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