function areAnagrams(str1, str2) {
 const normalizedStr1 = str1.replace(/\s+/g, "").toLowerCase(); // A função .trim() não funciona nesse caso porque .trim() remove apenas os espaços no início e no fim da string, e não os que estão no meio da string.
 const normalizedStr2 = str2.replace(/\s+/g, "").toLowerCase();

 if (normalizedStr1.length !== normalizedStr2.length) {
  return false;
 }

 const frequency1 = new Map();
 const frequency2 = new Map();

 for (const char of normalizedStr1) {
  if (frequency1.has(char)) {
   frequency1.set(char,frequency1.get(char) + 1);
  } else {
   frequency1.set(char, 1);
  }
 }

 for (const char of normalizedStr2) {
  if (frequency2.has(char)) {
   frequency2.set(char,  frequency2.get(char) + 1);
  } else {
   frequency2.set(char, 1);
  }
 }
 console.log(frequency1, frequency2);
 if (frequency1.size !== frequency2.size) {
  return false;
 }

 for (const [char, count] of frequency1.entries()) {
  if (frequency2.get(char) !== count) {
   return false;
  }
 }

 return true;
}

console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh")); // true
console.log(areAnagrams("Test", "Best")); // false
