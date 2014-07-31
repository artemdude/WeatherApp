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
            _.bindAll(this, 'getAutocompleteData');

            this.router = options.router;

            this.initParallax();
            this.initAutocomplete();
            this.changeUnitsSwitcher();
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
            this.$el.find("#searchField").typeahead({
                delay: 400,
                minLength: 3,
                source: this.getAutocompleteData
            });
        },
        getAutocompleteData: function (query, process) {
            $.ajax({
                url: helpers.ApiUrls.location,
                dataType: "jsonp",
                data: { q: query },
                success: function (response) {
                    process(this.parseAutocompleteData(response));
                }.bind(this)
            });
        },
        parseAutocompleteData: function (data) {
            var items = _.map(data, function (item) {
                return item.replace(/(\w*?), (\w*?,) (.*)/gi, '$1, $3');
            });

            return _.uniq(items);
        },
        search: function (e) {
            var $input = $(e.currentTarget);

            if (e.keyCode == this.ENTER_KEY_CODE && $input.val()) {
                this.router.navigate($input.val());
                this.router.mainPageWithLocation($input.val());
            }
        },
        changeUnitsSwitcher: function () {
            this.$el.find('#unitsSwitcher').html(helpers.Units.getCurrentFormattedUnits());
        },
        switchUnits: function () {
            var units = helpers.LocalCache.getUnits(),
                unitsToChange = units === helpers.Units.type.celsius ?
                    helpers.Units.type.fahrenheit : helpers.Units.type.celsius;

            helpers.LocalCache.setUnits(unitsToChange);

            this.changeUnitsSwitcher();
        }
    });
});