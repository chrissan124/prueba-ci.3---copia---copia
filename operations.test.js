const operations = require('./operations');

// TEST FOR SUM OPERATION
test('SUCCESS SUM', () => {
  expect(operations.sumOperation(5, 7)).toBe(12);
});

test('ERROR SUM', () => {
  expect(operations.sumOperation("a", 7)).toBeNaN();
});