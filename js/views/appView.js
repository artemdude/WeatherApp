/**
 * Created by Superman on 7/25/2014.
 */

define(function(require) {
    return Backbone.View.extend({
        ENTER_KEY_CODE: 13,
        events: {
            "keyup #searchField" : "search"
        },
        initialize: function () {
            $('.clouds-bg').parallax({
                calibrateX: false,
                calibrateY: true,
                invertX: false,
                invertY: true,
                limitX: false,
                limitY: false,
                scalarX: 2,
                scalarY: 2,
                frictionX: 0.1,
                frictionY: 0.3,
                originX: 0.0,
                originY: 0.0
            });
        },
        search: function(e){
            if(e.keyCode == this.ENTER_KEY_CODE){
                alert('search');
            }
        }
    });
});