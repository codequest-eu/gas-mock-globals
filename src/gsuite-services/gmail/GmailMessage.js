const GmailThread = require('./GmailThread');

class GmailMessage {
  constructor(data = {}) {
    this.data = data;
  }

  getId() {
    return this.data.id;
  }

  getThread() {
    return new GmailThread(this.data.thread);
  }
}

module.exports = GmailMessage;
