/**
 * Created by Superman on 8/1/2014.
 */

require.config({
    baseUrl: '../js',
    paths: {
        //libs
        jquery: 'libs/jquery',
        backbone: 'libs/backbone',
        underscore: 'libs/underscore',
        d3: 'libs/d3.v3',
        nv: 'libs/nv.d3',
        parallax: 'libs/parallax',
        less: 'libs/less',
        bootstrap: 'libs/bootstrap',
        moment: 'libs/moment',
        cookie: 'libs/cookie',
        typeahead: 'libs/typeahead',

        templates: '../templates',
        helpers: 'helpers',

        //tests
        testRunner: '../tests/testRunner',
        testModels: '../tests/models',
        testViews: '../tests/views'
    },
    shim: {
        testRunner: {
            deps: ['backbone']
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        d3: {
            exports: 'd3'
        },
        nv: {
            deps: ['d3'],
            exports: 'nv'
        },
        parallax: {
            deps: ['jquery'],
            exports: 'parallax'
        },
        typeahead: {
            deps: ['jquery'],
            exports: 'typeahead'
        },
        cookie: {
            deps: ['jquery'],
            exports: 'cookie'
        }
    }
});

require(['testRunner']);


