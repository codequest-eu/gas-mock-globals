const scriptServices = require('./script-services');
const gsuiteServices = require('./gsuite-services');

const helpers = require('./helpers');

Object.assign(global, scriptServices, gsuiteServices);

module.exports = {
  ...helpers,
};
