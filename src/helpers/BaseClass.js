class BaseClass {
  constructor() {
    this._data = {
      type: this.constructor.name
    };
  }

  getData() {
    return this._data;
  }
}

module.exports = BaseClass;
