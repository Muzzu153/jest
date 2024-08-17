export default function capitalize(word) {
  const trimmedWord = word.trim();
  const capitalizedWord = trimmedWord[0].toUpperCase() + trimmedWord.slice(1);
  return capitalizedWord;
}
