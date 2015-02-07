'use strict';

var assert = require('assert');

var config = require('../lib/config');

describe('config', function () {
    it('has dbDir', function () {
        assert.ok(config.dbDir);
    });

    it('has geoIpDbs', function () {
        assert.ok(config.geoIpDbs);
    });

    it('has UserAgent', function () {
        assert.ok(config.userAgent);
    });

    it('has hostName', function () {
        assert.ok(config.hostName);
    });

    it('has hostPort', function () {
        assert.ok(config.hostPort);
    });

    it('has urlPath', function () {
        assert.ok(config.urlPath);
    });
});

