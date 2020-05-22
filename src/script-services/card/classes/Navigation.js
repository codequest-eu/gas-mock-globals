const BaseClass = require('../../../helpers/BaseClass');

class Navigation extends BaseClass {
  constructor() {
    super();
    this._data.cards = [];
  }

  pushCard(card) {
    this._data.cards.push({ pushCard: card.getData() });
    return this;
  }

  updateCard(card) {
    this._data.cards.push({ updateCard: card.getData() });
    return this;
  }

  popCard() {
    this._data.cards.push({ popCard: null });
    return this;
  }
}

module.exports = Navigation;
