class Dispatcher {
  constructor() {
    this._lastID = 0;
    this._callbacks = {};
  }

  register(callback) {
    const id = 'CID_' + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  }

  dispatch(action) {
    for (const id in this._callbacks) {
      this._callbacks[id](action);
    }
  }
}
