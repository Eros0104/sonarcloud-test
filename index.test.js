const { 
  add,
  square,
  cube,
  power,
  root,
  round,
  roundUp
} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
  expect(add(-1, -1)).toBe(-2);
});

test('squares 3 to equal 9', () => {
  expect(square(3)).toBe(9);
});

test('cubes 2 to equal 8', () => {
  expect(cube(2)).toBe(8);
});

test('raises 2 to the power of 3 to equal 8', () => {
  expect(power(2, 3)).toBe(8);
});

test('calculates the square root of 9 to equal 3', () => {
  expect(root(9)).toBe(3);
});

test('rounds 1.5 to equal 2', () => {
  expect(round(1.5)).toBe(2);
});

test('rounds up 1.1 to equal 2', () => {
  expect(roundUp(1.1)).toBe(2);
});


