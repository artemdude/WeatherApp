/**
 * Created by Superman on 7/21/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        template = require('text!templates/tabs/hourlyWeatherTemplate.html'),
        baseView = require('views/baseNestedView');

    return baseView.extend({
        el: '#hourlyTab',
        render: function () {
            var model = this.model.attributes,
                viewModel = { days : []},
                dayObj,
                day,
                newDay;

            viewModel.units = helpers.Units.getCurrentFormattedUnits();

            _.each(model.hours, function(item){
                item.formattedTime = helpers.DateTimeHelper.getShortTime(item.date);
                item.iconCss = helpers.CssHelper.getCssClassByIcon(item.icon);

                newDay = item.date.getDay();
                if(newDay !== day){
                    day = newDay;
                    dayObj = {
                        formattedDate: helpers.DateTimeHelper.getFullDate(item.date),
                        hours: []
                    };
                    dayObj.hours.push(item);
                    viewModel.days.push(dayObj);
                }
                else{
                    dayObj.hours.push(item);
                }
            });

            this.$el.html(_.template(template, viewModel));
            return this;
        }
    });
});