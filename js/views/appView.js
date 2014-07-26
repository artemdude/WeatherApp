/**
 * Created by Superman on 7/25/2014.
 */

define(function(require) {
    return Backbone.View.extend({
        el: 'body',
        ENTER_KEY_CODE: 13,
        events: {
            "keyup #searchField" : "search"
        },
        initialize: function (options) {
            this.router = options.router;

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
            var $searchField = $('#searchField');

            if(e.keyCode == this.ENTER_KEY_CODE && $searchField.val()){
                this.router.navigate($searchField.val(), {trigger: true});
                $searchField.val('');
            }
        }
    });
});