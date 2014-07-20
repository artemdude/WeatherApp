/**
 * Created by Superman on 7/19/2014.
 */

define(['backbone', 'underscore'], function(Backbone, _) {
    var CurrentWeatherView = Backbone.View.extend({
        el: '#currentWeatherContainer',
        initialize: function () {
            this.model.fetch({
                success: _.bind(function () {
                    this.render();
                }, this),
                data: { q: 'London', units: 'metric'} });
        },
        render: function () {
            var that = this;

            //todo: load templates
            that.$el.html('<div>aa</div>div>', that.model.toJSON());
           // that.$el.html(_.template($('#currentWeatherTemplate').html(), that.model.toJSON()));
            return that;
        }
    });

    return CurrentWeatherView;
});