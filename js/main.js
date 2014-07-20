/**
 * Created by Superman on 7/19/2014.
 */

require.config({
    baseUrl: 'js',
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

        app: 'app',
        helpers: 'helpers'
    },
    shim: {
        bootstrap: {
            exports: 'bootstrap',
            deps: ['jquery']
        },
        d3: {
            exports: 'd3'
        },
        nv: {
            deps: ['d3'],
            exports: 'nv'
        }
    }
});

require(['app', 'less', 'bootstrap']);