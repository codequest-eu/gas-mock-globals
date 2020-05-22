const ActionResponse = require('./ActionResponse');

class ActionResponseBuilder {
  build () {
    return new ActionResponse({
      navigation: this.navigation,
      notification: this.notification
    });
  }
}

module.exports = ActionResponseBuilder;
