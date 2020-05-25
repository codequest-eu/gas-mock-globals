const scriptServices = require('./script-services');
const gsuiteServices = require('./gsuite-services');

Object.assign(global, scriptServices, gsuiteServices);
