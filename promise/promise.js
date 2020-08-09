class MyPromise {
  constructor(executor) {
    executor();
  }

  then() {}
  catch() {}
  finally() {}
}

module.exports = MyPromise;
