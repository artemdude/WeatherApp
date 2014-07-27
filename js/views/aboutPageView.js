/**
 * Created by Superman on 7/27/2014.
 */

define(function(require) {
    var template = require('text!templates/aboutPageTemplate.html');

    return Backbone.View.extend({
        el: '#pageContainer',
        initialize: function () {
            this.render();
        },
        render: function(){
            this.$el.html(template);
            return this;
        }
    });
});