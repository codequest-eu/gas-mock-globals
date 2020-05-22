const BaseClass = require('../../../helpers/BaseClass');

class Navigation extends BaseClass {
  constructor() {
    super();
    this._data.cards = [];
  }

  pushCard(card) {
    this._data.cards.push({ nav: 'push', card: card.getData() });
    return this;
  }

  updateCard(card) {
    this._data.cards.push({ nav: 'update', card: card.getData() });
    return this;
  }

  popCard() {
    this._data.cards.push({ nav: 'pop', card: null });
    return this;
  }
}

module.exports = Navigation;
