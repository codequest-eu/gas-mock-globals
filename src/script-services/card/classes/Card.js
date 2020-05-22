const CardHeader = require('./CardHeader');
const CardSection = require('./CardSection');
const CardAction = require('./CardAction');
const BaseClass = require('../../../helpers/BaseClass');

class Card extends BaseClass {
  constructor () {
    super();
    this._data.sections = [];
    this._data.cardActions = [];
  }

  printJson () {
    return this.getData();
  }
}

module.exports = Card;
