// Load modules

var Oio = require('orchestrate');
var Hoek = require('hoek');

exports.register = function (server, options, next) {
   
    // Validate options
    Hoek.assert(options, 'Missing Oio settings');

    var settings = Hoek.clone(options);
    var oio = Oio(settings.token, settings.host);
    server.expose('Oio', oio);

    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};


