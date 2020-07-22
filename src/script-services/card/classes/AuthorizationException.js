const BaseClass = require('../../../helpers/BaseClass');

class AuthorizationException extends BaseClass {
  throwException() {
    // eslint-disable-next-line no-throw-literal
    throw this;
  }
}

module.exports = AuthorizationException;
