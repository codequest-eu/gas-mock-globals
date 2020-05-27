const BaseClass = require('../../../helpers/BaseClass');

class UpdateDraftActionResponseBuilder extends BaseClass {
  build() {
    return this.getData();
  }
}

module.exports = UpdateDraftActionResponseBuilder;
