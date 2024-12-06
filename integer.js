let numbers = [3, 5, 6.7, 8, 1.2, 9.4, 10];

let integers = numbers.filter(Number.isInteger);
let nonIntegers = numbers.filter(num => !Number.isInteger(num));

console.log("Integers:", integers);  // Output: [3, 5, 8, 10]
console.log("Non-Integers:", nonIntegers);  // Output: [6.7, 1.2, 9.4]
