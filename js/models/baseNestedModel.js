/**
 * Created by Superman on 7/26/2014.
 */

define(function() {
    return Backbone.Model.extend({
        parse: function(response) {
            if (response.cod == 404) {
                this.attributes = {
                    error: 404,
                    message: 'No city found'
                };
            }
            else{
                this.adapt(response);
            }
        },
        adapt: function(){}
    });
});