function extractFirstChars(arr) {
    return arr.map(str => str.charAt(0));
  }
  
  const array = ["hello", "world", "this", "is", "a", "test"];
  
  console.log(extractFirstChars(array)); // Output: ["h", "w", "t", "i", "a", "t"]