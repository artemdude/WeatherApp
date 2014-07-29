/**
 * Created by Superman on 7/23/2014.
 */

define(function(require) {
    var helpers = require('helpers'),
        template = require('text!templates/chartTemplate.html'),
        baseView = require('views/baseNestedView');

    return baseView.extend({
        el: '#pressureChartTab',
        render: function () {
            this.$el.html(template);
            return this;
        },
        initChart: function () {
            helpers.ChartHelper.drawLineChart({
                yLabel: 'Pressure',
                elContainer: this.el.id,
                dataFun: this.getChartData,
                yFormatter: helpers.ChartHelper.formatter.number,
                xFormatter: helpers.ChartHelper.formatter.time,
                units: 'hpa'
            })
        },
        getChartData: function () {
            var result = [],
                hours = this.model.get('hours');

            for (var i = 0; i < 11; i++) {
                result.push({x: hours[i].date, y: hours[i].pressure });
            }

            return [{
                    values: result,
                    key: 'Pressure',
                    color: '#5cb85c'
            }];
        }
    });
});