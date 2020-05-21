const BaseClass = require('../../../helpers/BaseClass');
const Widget = require('./Widget');

class CardSection extends BaseClass {
  constructor() {
    super();
    this._data.widgets = [];
  }

  addWidget(widget) {
    if (widget instanceof Widget === false) {
      throw new Error('Invalid value passed for "addWidget"');
    }

    this._data.widgets.push(widget.getData());

    return this;
  }

  setCollapsible(collapsible) {
    this._data.collapsible = collapsible;

    return this;
  }

  setHeader(header) {
    this._data.header = header;

    return this;
  }

  setNumUncollapsibleWidgets(numUncollapsibleWidgets) {
    this._data.numUncollapsibleWidgets = numUncollapsibleWidgets;

    return this;
  }
}

module.exports = CardSection;
