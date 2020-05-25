const GmailLabel = require('./GmailLabel');

class GmailThread {
  constructor(data = {}) {
    this.data = data;
  }

  getId() {
    return this.data.id;
  }

  getLabels() {
    return this.data.labels
      ? this.data.labels.map((label) => new GmailLabel(label))
      : [];
  }
}

module.exports = GmailThread;
