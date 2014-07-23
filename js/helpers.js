/**
 * Created by Superman on 7/19/2014.
 */

define(['nv', 'd3', 'moment', 'text!templates/chartTooltipTemplate.html'], function(nv, d3, moment, chartTooltipTemplate) {

    //make mustache
    _.templateSettings = {
        evaluate: /\{\[([\s\S]+?)\]\}/g,
        interpolate: /\{\{([\s\S]+?)\}\}/g
    };

//TODO: temp solution
    return {
        ApiUrlFabric: {
            hourly: 'http://api.openweathermap.org/data/2.5/forecast/hourly',
            daily: 'http://api.openweathermap.org/data/2.5/forecast/daily',
            weather: 'http://api.openweathermap.org/data/2.5/weather'
        },

        ChartHelper: {
            formatter: {
                time: function (date) {
                    return d3.time.format("%H:%M")(new Date(date));
                },
                number: d3.format(',.1f')
            },
            drawLineChart: function (options) {
                nv.addGraph(function () {
                    var chart = nv.models.lineChart()
                        .options({
                            margin: {left: 75, bottom: 50},
                            transitionDuration: 250,
                            showLegend: false
                            //useInteractiveGuideline: true
                        });

                    chart.xAxis.axisLabel(options.xLabel).tickFormat(options.xFormatter);
                    chart.yAxis.axisLabel(options.yLabel + ' (' + options.units + ')').tickFormat(options.yFormatter);

                    d3.select('#' + options.elContainer + ' svg').datum(options.dataFun).call(chart);
                    nv.utils.windowResize(chart.update);

                    chart.tooltipContent(function(key, y, e, graph) {
                        return _.template(chartTooltipTemplate, {
                             title: key,
                             formattedTime: moment(graph.point.x).format('hh:mma'),
                             units: options.units,
                             data: e
                         })
                    });

                    return chart;
                });
            }
        },

        DateTimeHelper: {
            getShortTime: function (time) {
                return moment(time).format('hh:mm');
            },
            getTime: function (time) {
                return moment(time).format('hh:mm a');
            },
            getFullDateTime: function (dateTime) {
                return moment(dateTime).format('MMMM Do YYYY, h:mm:ss a')
            },
            getFullDate: function (dateTime) {
                return moment(dateTime).format('dddd MMMM Do YYYY')
            },
            getFullDay: function (dateTime) {
                return moment(dateTime).format('dddd')
            },
            getShortDate: function (dateTime) {
                return moment(dateTime).format('MMMM Do')
            }
        },

        CssHelper: {
            getCssClassByIcon: function (icon) {
                return {
                    '01d': 'sky-clear-day',
                    '02d': 'few-clouds-day',
                    '03d': 'scattered-clouds-day',
                    '04d': 'broken-clouds-day',
                    '09d': 'shower-rain-day',
                    '10d': 'rain-day',
                    '11d': 'thunderstorm-day',
                    '13d': 'snow-day',
                    '50d': 'mist-day',
                    '01n': 'sky-clear-night',
                    '02n': 'few-clouds-night',
                    '03n': 'scattered-clouds-night',
                    '04n': 'broken-clouds-night',
                    '09n': 'shower-rain-night',
                    '10n': 'rain-night',
                    '11n': 'thunderstorm-night',
                    '13n': 'snow-night',
                    '50n': 'mist-night'
                }[icon];
            }
        }
    };
});


