class ActionResponse {
  // the object should never be created directly in user code
  constructor(_data = {}) {
    this._data = _data;
  }
}

module.exports = ActionResponse;
