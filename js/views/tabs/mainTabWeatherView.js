/**
 * Created by Superman on 7/19/2014.
 */

define(['../../helpers', 'text!templates/mainTabTemplate.html', 'text!templates/chartTemplate.html'], function(helpers, template, chartTemplate) {
    return Backbone.View.extend({
        el: '#mainTab',
        initialize: function () {
            this.model.fetch({
                success: _.bind(function () {
                    this.render();
                    this.initChart();
                }, this),
                data: { q: 'London', units: 'metric'} });
        },
        render: function () {
            var that = this;

            that.$el.html(chartTemplate + _.template(template, { hours: _.first(that.model.get('hours'), 8) }));
            return that;
        },
        initChart: function () {
            var that = this;

            helpers.ChartHelper.drawLineChart({
                yLabel: 'Weather',
                elContainer: that.el.id,
                dataFun: _.bind(that.getChartData, that),
                yFormatter: helpers.ChartHelper.formatter.number,
                xFormatter: helpers.ChartHelper.formatter.time,
                units: '°C'
            })
        },
        getChartData: function () {
            var result = [],
                hours = this.model.get('hours');

            for (var i = 0; i < 11; i++) {
                result.push({x: hours[i].date, y: hours[i].temp });
            }

            return [{
                values: result,
                key: 'Temperature',
                color: '#f0ad4e'
            }];
        }
    });
});