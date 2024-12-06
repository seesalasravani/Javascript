
// Sample product data
const products = [
  { id: 1, title: "Product 1", price: 30 },
  { id: 2, title: "Product 2", price: 60 },
  { id: 3, title: "Product 3", price: 40 },
  { id: 4, title: "Product 4", price: 80 },
  { id: 5, title: "Product 5", price: 20 },
];

// Filter and map
const expensiveProductTitles = products
  .filter((product) => product.price > 50)
  .map((product) => product.title);

console.log(expensiveProductTitles); 