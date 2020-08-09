const MyPromise = require('./promise');

describe('MyPromise', () => {
  test('should be defined', () => {
    expect(MyPromise).toBeDefined();
  });

  test('should be type of function', () => {
    expect(typeof MyPromise).toBe('function');
  });

  test('instance should methods: then, catch, finally', () => {});
});
