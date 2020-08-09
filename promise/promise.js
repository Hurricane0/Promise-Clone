class MyPromise {
  constructor(executor) {
    this.queue = [];

    executor.call(null, this.onResolve, this.onReject);
  }

  onResolve(data) {
    this.queue.forEach(callback => {
      data = callback(data);
    });
  }

  onReject() {}

  then(fn) {
    this.queue.push(fn);
    return this;
  }
  catch() {}
  finally() {}
}

module.exports = MyPromise;
