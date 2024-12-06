function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
  }
  
  // Example usage:
  const string = "Hello 123 world 456.78";
  const numbers = extractNumbers(string);
  console.log(numbers);