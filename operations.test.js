const operations = require('./operations');

// TEST FOR SUM OPERATION
test('SUCCESS SUM', () => {
  expect(operations.sumOperation(5, 7)).toBe(12);
});

test('ERROR SUM', () => {
  expect(operations.sumOperation("a", 7)).toBeNaN();
});

// TEST FOR MULTIPLICATION OPERATION
test('SUCCESS MULTIPLICATION', () => {
  expect(operations.multiplicationOperation(5, 7)).toBe(35);
});

test('ERROR MULTIPLICATION', () => {
  expect(operations.multiplicationOperation("a", 7)).toBeNaN();
});