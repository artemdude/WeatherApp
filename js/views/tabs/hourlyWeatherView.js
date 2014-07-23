/**
 * Created by Superman on 7/21/2014.
 */

define(['helpers', 'text!templates/tabs/hourlyWeatherTemplate.html'], function(helpers, template) {
    return Backbone.View.extend({
        el: '#hourlyTab',
        initialize: function () {
            this.model.fetch({
                success: _.bind(function () {
                    this.render();
                }, this),
                data: { q: 'London', units: 'metric'} });
        },
        render: function () {
            var model = this.model.attributes,
                viewModel = { days : []},
                dayObj,
                day,
                newDay;

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