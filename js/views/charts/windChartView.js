/**
 * Created by Superman on 7/23/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        template = require('text!templates/chartTemplate.html'),
        baseView = require('views/baseNestedView');

    return baseView.extend({
        render: function () {
            this.$el.html(template);
            return this;
        },
        initChart: function () {
            helpers.ChartHelper.drawLineChart({
                yLabel: 'Wind',
                elContainer: this.getContainerId(),
                dataFun: this.getChartData,
                yFormatter: helpers.ChartHelper.formatter.number,
                xFormatter: helpers.ChartHelper.formatter.time,
                units: 'm/s'
            })
        },
        getChartData: function () {
            var result = [],
                hours = this.model.get('hours');

            for (var i = 0; i < 11; i++) {
                result.push({x: hours[i].date, y: hours[i].windSpeed });
            }

            return [{
                    values: result,
                    key: 'Wind',
                    color: '#5bc0de'
            }];
        }
    });
});