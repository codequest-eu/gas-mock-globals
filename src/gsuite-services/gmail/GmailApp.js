const GmailMessage = require('./GmailMessage');

class GmailApp {
  static getMessageById(id) {
    return new GmailMessage({ id });
  }
}

module.exports = GmailApp;
