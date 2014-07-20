/**
 * Created by Superman on 7/19/2014.
 */

define(['helpers'], function(helpers) {
    return Backbone.Model.extend({
        url: helpers.ApiUrlFabric.hourly
    });
});