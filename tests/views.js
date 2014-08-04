/**
 * Created by Superman on 8/2/2014.
 */

define(function (require) {
    var CurrentWeatherView = require('views/CurrentWeatherView'),
        CurrentWeatherModel = require('models/currentWeatherModel'),
        FAKE_URL = 'http://www.fake.com';

    QUnit.module("currentWeatherView", {
        setup: function (assert) {
            this.server = sinon.fakeServer.create();
            this.server.respondWith("GET", FAKE_URL,
                [ 200, {"Content-Type":"application/json"}, '{result: "ok"}']);
            CurrentWeatherModel.prototype.url = FAKE_URL;
        }, teardown: function (assert) {
            this.view = null;
        }
    });

    QUnit.test("params were set", function (assert) {
        this.server.respond();

        this.view = new CurrentWeatherView({
            params: {
                lat: 1,
                lon: 1,
                q: 'miami',
                units: 'metrics'
            },
            model: new CurrentWeatherModel()
        });

        assert.equal(this.view.params.q, 'miami', 'location param');
        assert.equal(this.view.params.units, 'metrics', 'units param');
    });
});