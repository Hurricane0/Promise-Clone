const MyPromise = require('./promise');

describe('MyPromise', () => {
  let promise;
  let executorSpy;

  const successResult = 42;

  beforeEach(() => {
    executorSpy = jest.fn(resolve => {
      setTimeout(() => {
        resolve(successResult);
      }, 150);
    });
    promise = new MyPromise(executorSpy);
  });

  test('should be defined', () => {
    expect(MyPromise).toBeDefined();
  });

  test('should be type of function', () => {
    expect(typeof MyPromise).toBe('function');
  });

  test('instance should methods: then, catch, finally', () => {
    expect(promise.then).toBeDefined();
    expect(promise.catch).toBeDefined();
    expect(promise.finally).toBeDefined();
  });

  test('should call executor function', () => {
    expect(executorSpy).toBeCalled();
  });

  test('should get data from then block and chain it', async () => {
    const result = await promise.then(num => num).then(num => num * 2);
    expect(result).toBe(successResult * 2);
  });
});
