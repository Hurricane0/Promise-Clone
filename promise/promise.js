function noop() {}

class MyPromise {
  constructor(executor) {
    this.queue = [];
    this.errorHandler = noop;

    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this));
    } catch (error) {
      this.errorHandler(error);
    }
  }

  onResolve(data) {
    this.queue.forEach(callback => {
      data = callback(data);
    });
  }

  onReject(error) {
    this.errorHandler(error);
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }
  catch(fn) {
    this.errorHandler = fn;
    return this;
  }
  finally() {}
}

module.exports = MyPromise;
