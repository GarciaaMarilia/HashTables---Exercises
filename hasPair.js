function hasPairWithSum(arr, sum) {
 if (arr.length <= 1) {
  return "The length array is not enough to check.";
 }

 const complements = new Set();

 for (let i = 0; i < arr.length; i++) {
  const complement = sum - arr[i];

  if (complements.has(arr[i])) {
   return `${arr[i]} + ${complement} = ${sum}`;
  }

  complements.add(complement);
 }

 return false;
}

console.log(hasPairWithSum([1, 2, 3, 9], 8)); // false
console.log(hasPairWithSum([1, 4, 2, 4], 8)); // true
