const ActionResponse = require('./ActionResponse');
const BaseClass = require('../../../helpers/BaseClass');

class ActionResponseBuilder extends BaseClass {
  build () {
    return new ActionResponse(this._data);
  }
}

module.exports = ActionResponseBuilder;
