const BaseClass = require('../../../helpers/BaseClass');

class Suggestions extends BaseClass {
  addSuggestions(suggestions = []) {
    suggestions.forEach((s) => this.addSuggestion(s));

    return this;
  }
}

module.exports = Suggestions;
