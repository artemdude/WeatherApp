/**
 * Created by Superman on 7/19/2014.
 */

define(['helpers', 'text!templates/mainTabTemplate.html'], function(helpers, template) {
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

            that.$el.html(_.template(template, that.model.toJSON()));
            return that;
        },
        initChart: function () {
            var that = this;

            helpers.ChartHelper.drawLineChart({
                xLabel: 'xxx',
                yLabel: 'yyy',
                svgId: 'mainTabChart',
                dataFun: _.bind(that.getChartData, that),
                yFormatter: helpers.ChartHelper.formatter.number,
                xFormatter: helpers.ChartHelper.formatter.time
            })
        },
        getChartData: function () {
            var result = [],
                list = this.model.get('list');

            for (var i = 0; i < 11; i++) {
                result.push({x: new Date(list[i].dt_txt), y: list[i].main.temp });
            }

            return [
                {
                    values: result,
                    key: "Temperature",
                    color: "#2ca02c"
                }
            ];
        }
    });
});