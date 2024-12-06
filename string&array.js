function filterByFirstChar(arr, char) {
    return arr.filter(str => str.startsWith(char));
  }
  
  const array = ["hello", "world", "this", "is", "a", "test"];
  const char = "h";
  
  console.log(filterByFirstChar(array, char)); // Output: ["hello"]