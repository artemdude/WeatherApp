/**
 * Created by Superman on 7/19/2014.
 */

define(function(require){
    var nv = require('nv'),
        d3 = require('d3'),
        moment = require('moment'),
        chartTooltipTemplate = require('text!templates/chartTooltipTemplate.html');

    //make mustache
    _.templateSettings = {
        evaluate: /\{\[([\s\S]+?)\]\}/g,
        interpolate: /\{\{([\s\S]+?)\}\}/g
    };

    var helpers = {
        LocalCache: {
            getUnits: function () {
                return $.cookie('units');
            },
            setUnits: function(val){
                $.cookie('units', val);
            },
            getLocation: function () {
                return $.cookie('location');
            },
            setLocation: function(val){
                $.cookie('location', val);
            }
        },

        ApiUrls: {
            location: 'http://gd.geobytes.com/AutoCompleteCity',
            hourly: 'http://api.openweathermap.org/data/2.5/forecast/hourly',
            daily: 'http://api.openweathermap.org/data/2.5/forecast/daily',
            weather: 'http://api.openweathermap.org/data/2.5/weather'
        },

        Units: {
            type: {
                celsius: 'metric',
                fahrenheit: 'imperial'
            },
            text: {
                celsius: '°C',
                fahrenheit: '°F'
            },
            getCurrentFormattedUnits: function(){
                if(helpers.LocalCache.getUnits() === helpers.Units.type.fahrenheit){
                    return helpers.Units.text.fahrenheit;
                }

                return helpers.Units.text.celsius;
            }
        },

        ChartHelper: {
            formatter: {
                time: function (date) {
                    return d3.time.format("%H:%M%")(new Date(date));
                },
                number: d3.format(',.0f')
            },
            drawLineChart: function (options) {
                nv.addGraph(function () {
                    var chart = nv.models.lineChart()
                        .options({
                            margin: {left: 20, bottom: 50, right: 80},
                            showLegend: false,
                            rightAlignYAxis: true
                        });

                    chart.xAxis.axisLabel(options.xLabel).tickFormat(options.xFormatter);
                    chart.yAxis.axisLabel(options.yLabel + ' (' + options.units + ')').tickFormat(options.yFormatter);

                    d3.select('#' + options.elContainer + ' svg').datum(options.dataFun).call(chart);
                    nv.utils.windowResize(chart.update);

                    chart.tooltipContent(function(key, y, e, graph) {
                        return _.template(chartTooltipTemplate, {
                             title: key,
                             formattedTime: helpers.DateTimeHelper.getShortTime(graph.point.x),
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
                return moment(time).format('hh:mma');
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

    return helpers;
});


