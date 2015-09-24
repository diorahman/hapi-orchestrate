// Load modules

var Hapi = require('hapi');
var Code = require('code');
var Lab = require('lab');
var Defaults = require('./config');


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('Oio plugin', function () {

    it('should load plugin', function (done) {

        var server = new Hapi.Server();
        server.register({
            register: require('../'),
            options: Defaults
        }, function (err) {
            expect(err).to.not.exist();
            done();
        });
    });
});

