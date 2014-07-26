/**
 * Created by Superman on 7/25/2014.
 */

define(['helpers'], function (helpers) {
    return Backbone.View.extend({
        el: 'body',
        ENTER_KEY_CODE: 13,
        events: {
            "keyup #searchField": "search"
        },
        initialize: function (options) {
            this.router = options.router;

            this.initParallax();
            this.initAutocomplete();
        },
        initParallax: function(){
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
        initAutocomplete: function(){
            $("#searchField").typeahead({
                delay: 800,
                minLength:4,
                source: function (query, process) {
                    $.ajax({
                        url: helpers.ApiUrls.location,
                        dataType: "jsonp",
                        data: { q: query },
                        success: function (response) {
                            var items = _.map(response, function (item) {
                                return item.replace(/(\w*?), (\w*?,) (.*)/gi, '$1, $3');
                            });

                            process(_.uniq(items));
                        }
                    });
                }
            });
        },
        search: function (e) {
            var $input = $(e.currentTarget);

            if (e.keyCode == this.ENTER_KEY_CODE && $input.val()) {
                this.router.navigate($input.val(), {trigger: true});
            }
        }
    });
});