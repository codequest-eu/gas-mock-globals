const BaseClass = require('../../../helpers/BaseClass');

class UniversalActionResponseBuilder extends BaseClass {
  build() {
    return this.getData();
  }

  displayAddOnCards(cards = []) {
    this.setCards(cards);

    return this;
  }
}

module.exports = UniversalActionResponseBuilder;
