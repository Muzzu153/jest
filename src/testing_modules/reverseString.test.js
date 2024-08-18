import reverseString from '../modules/reverseString';

test('reverse string', () => {
  expect(reverseString('letter')).toBe('rettel');
});

test('reverse string', () => {
  expect(reverseString('123456')).toBe('654321');
});

test('reverse string', () => {
  expect(reverseString('ROAR')).toBe('RAOR');
});
