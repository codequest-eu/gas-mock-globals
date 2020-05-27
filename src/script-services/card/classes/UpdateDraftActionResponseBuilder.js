const BaseClass = require('../../../helpers/BaseClass');
const UpdateDraftActionResponse = require('./UpdateDraftActionResponse');

class UpdateDraftActionResponseBuilder extends BaseClass {
  build() {
    return new UpdateDraftActionResponse(this._data);
  }
}

module.exports = UpdateDraftActionResponseBuilder;
