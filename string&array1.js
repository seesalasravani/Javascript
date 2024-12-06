function filterOutSubstring(arr, substr) {
    return arr.filter(str => !str.includes(substr));
  }
  
  const array = ["hello", "world", "this", "is", "a", "test"];
  const substr = "o";
  
  console.log(filterOutSubstring(array, substr)); // Output: ["this", "is", "a", "test"]