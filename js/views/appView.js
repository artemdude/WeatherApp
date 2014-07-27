/**
 * Created by Superman on 7/25/2014.
 */

define(['helpers'], function (helpers) {
    return Backbone.View.extend({
        el: 'body',
        ENTER_KEY_CODE: 13,
        events: {
            'keypress #searchField': 'search',
            'click #unitsSwitcher': 'switchUnits'
        },
        initialize: function (options) {
            this.router = options.router;

            this.initParallax();
            this.initAutocomplete();
            this.initUnitsSwitcher();
        },
        initParallax: function () {
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
        initAutocomplete: function () {
            var that = this;

            $("#searchField").typeahead({
                delay: 400,
                minLength: 3,
                source: function (query, process) {
                    $.ajax({
                        url: helpers.ApiUrls.location,
                        dataType: "jsonp",
                        data: { q: query },
                        success: function (response) {
                            process(that.parseAutocompleteData(response));
                        }
                    });
                }
            });
        },
        parseAutocompleteData: function (data) {
            var items = _.map(data, function (item) {
                return item.replace(/(\w*?), (\w*?,) (.*)/gi, '$1, $3');
            });

            return _.uniq(items);
        },
        search: function (e) {

            console.log(this.router);

            var $input = $(e.currentTarget);

            if (e.keyCode == this.ENTER_KEY_CODE && $input.val()) {
                this.router.navigate($input.val());
                this.router.mainPageWithLocation($input.val());
            }
        },
        initUnitsSwitcher: function(){
            var units = helpers.LocalCache.getUnits(),
                $switcher = $('#unitsSwitcher');

            if(units === helpers.Units.type.celsius){
                $switcher.html(helpers.Units.text.celsius);
            }
            else{
                $switcher.html(helpers.Units.text.fahrenheit);
            }
        },
        switchUnits: function (e) {
            var units = helpers.LocalCache.getUnits(),
                $switcher = $(e.currentTarget);

            if(units === helpers.Units.type.celsius){
                helpers.LocalCache.setUnits(helpers.Units.type.fahrenheit);
                $switcher.html(helpers.Units.text.fahrenheit);
            }
            else{
                helpers.LocalCache.setUnits(helpers.Units.type.celsius);
                $switcher.html(helpers.Units.text.celsius);
            }
        }
    });
});