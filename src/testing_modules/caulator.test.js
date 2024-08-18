import calculator from '../modules/caulator';

test('Sum of two numbers', () => {
  expect(calculator.add(0, 0)).toBe(0);
});
test('Sum of two numbers', () => {
  expect(calculator.add(20, 240)).toBe(260);
});
test('Sum of two numbers', () => {
  expect(calculator.add(100, 40)).toBe(140);
});
test('Sum of two numbers', () => {
  expect(calculator.sub(0, 0)).toBe(0);
});
test('Sum of two numbers', () => {
  expect(calculator.sub(10, 5)).toBe(5);
});
test('Sum of two numbers', () => {
  expect(calculator.sub(5, 10)).toBe(-5);
});
test('Sum of two numbers', () => {
  expect(calculator.mul(0, 0)).toBe(0);
});
test('Sum of two numbers', () => {
  expect(calculator.mul(5, 5)).toBe(25);
});
test('Sum of two numbers', () => {
  expect(calculator.mul(5, -5)).toBe(-25);
});
test('Sum of two numbers', () => {
  expect(calculator.mul(-5, -5)).toBe(25);
});
test('Sum of two numbers', () => {
  expect(calculator.div(0, 0)).toBe(NaN);
});
test('Sum of two numbers', () => {
  expect(calculator.div(0, 1)).toBe(0);
});
test('Sum of two numbers', () => {
  expect(calculator.div(5, 5)).toBe(1);
});
test('Sum of two numbers', () => {
  expect(calculator.div(125, 5)).toBe(25);
});
test('Sum of two numbers', () => {
  expect(calculator.div(125, -5)).toBe(-25);
});
