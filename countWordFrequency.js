const text = "Hello, Hello! World, world, world.";

function countWordFrequency(text) {
 if (text.length < 1) {
  return "Invalid text.";
 }

 const normalizedTextArray = text
  .trim()
  .toLowerCase()
  .replace(/[^\w\s]/g, "")
  .split(/\s+/);

 const setCount = new Map();

 for (const word of normalizedTextArray) {
  setCount.set(word, (setCount.get(word) || 0) + 1);
 }

 return setCount;
}

const result = countWordFrequency(text);

console.log(result);
