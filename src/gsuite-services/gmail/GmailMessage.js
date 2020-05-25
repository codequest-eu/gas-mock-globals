const GmailThread = require('./GmailThread');

class GmailMessage {
  constructor(data) {
    this.data = data;
    this.thread = new GmailThread();
  }

  getId() {
    return this.data.id;
  }

  getThread() {
    return this.thread;
  }
}

module.exports = GmailMessage;
