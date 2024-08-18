export default function reverseString(word) {
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}

console.log(reverseString('word'));

// console.log(reverseStringRecursive('word'));
