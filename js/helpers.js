/**
 * Created by Superman on 7/19/2014.
 */

define(['nv', 'd3', 'moment'], function(nv, d3, moment) {

    //make mustache
    _.templateSettings = {
        evaluate: /\{\[([\s\S]+?)\]\}/g,
        interpolate: /\{\{([\s\S]+?)\}\}/g
    };

//TODO: temp solution
    return {
        ApiUrlFabric: {
            hourly: 'http://api.openweathermap.org/data/2.5/forecast/hourly',
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
                            margin: {left: 75, bottom: 50}
                        });

                    chart.xAxis.axisLabel(options.xLabel).tickFormat(options.xFormatter);
                    chart.yAxis.axisLabel(options.yLabel).tickFormat(options.yFormatter);

                    d3.select('#' + options.svgId).datum(options.dataFun).call(chart);
                    nv.utils.windowResize(chart.update);

                    return chart;
                });
            }
        },

        DateTimeHelper: {
            getShortTime: function (time) {
                return moment(time).format('hh:mm');
            },
            getFullDateTime: function (dateTime) {
                return moment(dateTime).format('MMMM Do YYYY, h:mm:ss a')
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


