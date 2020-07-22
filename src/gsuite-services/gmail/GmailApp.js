const GmailMessage = require('./GmailMessage');

class GmailApp {
  static getMessageById(id) {
    return new GmailMessage({ id });
  }

  static sendEmail(_to, _subject, _body) {}
}

module.exports = GmailApp;
