const BaseClass = require('../../../helpers/BaseClass');
const ComposeActionResponse = require('./ComposeActionResponse');

class ComposeActionResponseBuilder extends BaseClass {
  build() {
    return new ComposeActionResponse(this._data);
  }
}

module.exports = ComposeActionResponseBuilder;
