/**
 * Created by Superman on 7/26/2014.
 */

define(function(require) {
    var notFoundErrorTemplate = require('text!templates/errors/404Template.html'),
        someErrorTemplate = require('text!templates/errors/someErrorTemplate.html'),
        loadingTemplate = require('text!templates/loadingTemplate.html');

    return Backbone.View.extend({
        initialize: function (options) {
            var that = this;
            this.params = options.params;
            this.model.fetch({
                success: _.bind(that.baseRender, that),
                beforeSend: function () {
                    that.$el.html(loadingTemplate);
                },
                error: function () {
                    that.$el.html(someErrorTemplate);
                },
                data: options.params });
        },
        baseRender: function(){
            var that = this;
            if(!this.model.attributes.error){
                this.render();
                if(this.initChart){
                    this.initChart();
                }
            }
            else{
                this.$el.html(_.template(notFoundErrorTemplate, { location: that.params.q }));
            }
        }
    });
});