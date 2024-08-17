import capitalize from '../modules/capitalize';

test('Capitalize first letter', () => {
  expect(capitalize('letter')).toBe('Letter');
});
test('Capitalize first letter', () => {
  expect(capitalize(' 10002301')).toBe('10002301');
});
// test('Capitalize first letter', () => {
//   expect(capitalize('letter')).toMatch(/letter/);
// });
