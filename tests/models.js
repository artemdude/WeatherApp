/**
 * Created by Superman on 8/1/2014.
 */

define(function (require) {
    var CurrentWeatherModel = require('models/currentWeatherModel'),
        FAKE_URL = 'http://www.fake.com';

    QUnit.module("currentWeatherModel", {setup: function (assert) {
        CurrentWeatherModel.prototype.url = FAKE_URL;
        this.server = sinon.fakeServer.create();
    }});

    QUnit.test("model parsed properly", function (assert) {
        this.server.respondWith("GET", FAKE_URL,
            [ 200, {"Content-Type": "application/json"},
                '{"coord":{"lon":-80.2,"lat":25.77},"sys":{"message":0.0761,"country":"United States of America","sunrise":1406890047,"sunset":1406938002},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"cmc stations","main":{"temp":30.617,"temp_min":30.617,"temp_max":30.617,"pressure":1028.46,"sea_level":1028.75,"grnd_level":1028.46,"humidity":88},"wind":{"speed":2.53,"deg":118.505},"clouds":{"all":32},"dt":1406919720,"id":4164138,"name":"Miami","cod":200}' ]);

        var currentWeatherModel = new CurrentWeatherModel();
        currentWeatherModel.fetch();

        this.server.respond();

        assert.ok(currentWeatherModel, "was initialized");
        assert.deepEqual(currentWeatherModel.attributes, {
            "city": "Miami",
            "country": "United States of America",
            "desc": "scattered clouds",
            "humidity": 88,
            "icon": "03d",
            "pressure": 1028.46,
            "sunrise": 1406890047,
            "sunset": 1406938002,
            "temp": 30.617,
            "title": "Clouds",
            "windSpeed": 2.53
        }, "properly parsed");

    });

    QUnit.test("model parsed with 404", function (assert) {
        this.server.respondWith("GET", FAKE_URL,
            [ 200, {"Content-Type": "application/json"},
                '{"cod":404}' ]);

        var currentWeatherModel = new CurrentWeatherModel();
        currentWeatherModel.fetch();

        this.server.respond();

        assert.deepEqual(currentWeatherModel.attributes, {
            error: 404,
            message: 'No city found'
        }, "properly parsed");
    });
});