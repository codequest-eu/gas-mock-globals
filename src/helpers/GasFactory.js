const GmailMessage = require('../gsuite-services/gmail/GmailMessage');

class GasFactory {
  static createGmailMessage(props = {}) {
    return new GmailMessage(props);
  }
}

module.exports = GasFactory;
