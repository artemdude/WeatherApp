/**
 * Created by Superman on 7/19/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        template = require('text!templates/tabs/mainTabTemplate.html'),
        chartTemplate = require('text!templates/chartTemplate.html'),
        baseView = require('views/baseNestedView');

    return baseView.extend({
        el: '#mainTab',
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