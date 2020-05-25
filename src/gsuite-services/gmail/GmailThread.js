class GmailThread {
  constructor(data) {
    this.data = data;
    this.labels = [];
  }

  getId() {
    return this.data.id;
  }

  getLabels() {
    return this.labels;
  }
}

module.exports = GmailThread;
