/**
 * Created by Superman on 7/26/2014.
 */

define(function(require) {
    var notFoundErrorTemplate = require('text!templates/errors/404Template.html'),
        someErrorTemplate = require('text!templates/errors/someErrorTemplate.html'),
        loadingTemplate = require('text!templates/loadingTemplate.html');

    return Backbone.View.extend({
        initialize: function (options) {
            _.bindAll(this, 'baseRender', 'showLoading', 'showError', 'initChart', 'getChartData');

            this.init();
            this.params = options.params;
            this.model.fetch({
                success: this.baseRender,
                beforeSend: this.showLoading,
                error: this.showError,
                data: options.params
            });
        },
        baseRender: function(){
            if(!this.model.attributes.error){
                this.render();
                this.initChart();
            }
            else{
                this.$el.html(_.template(notFoundErrorTemplate, { location: this.params.q }));
            }
        },
        showLoading: function(){
            this.$el.html(loadingTemplate);
        },
        showError: function(){
            this.$el.html(someErrorTemplate);
        },
        getChartData: function(){},
        initChart: function(){},
        init: function(){}
    });
});