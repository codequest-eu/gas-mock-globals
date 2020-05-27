class BaseClass {
  constructor(data = {}) {
    this._data = {
      type: this.constructor.name,
      ...data,
    };

    const proxy = new Proxy(this, {
      get: (instance, key) => {
        if (key in instance) {
          return instance[key];
        }

        if (key.length > 3) {
          if (key.startsWith('set')) {
            const newKey = key[3].toLowerCase() + key.slice(4);
            return (value) => {
              const data = value instanceof BaseClass ? value.getData() : value;

              instance._data[newKey] = data;
              return proxy;
            };
          }

          if (key.startsWith('add')) {
            const newKey = `${key[3].toLowerCase()}${key.slice(4)}s`;

            return (...values) => {
              const value = values.length === 1 ? values[0] : values;
              const data = value instanceof BaseClass ? value.getData() : value;

              instance._data[newKey] = instance._data[newKey] || [];
              instance._data[newKey].push(data);
              return proxy;
            };
          }
        }

        return undefined;
      },
    });
    return proxy;
  }

  getData() {
    return this._data;
  }
}

module.exports = BaseClass;
