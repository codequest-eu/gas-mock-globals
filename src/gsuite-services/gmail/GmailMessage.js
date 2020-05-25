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

  getHeader(name) {
      return this.data.headers && this.data.headers[name];
  }
}

module.exports = GmailMessage;
