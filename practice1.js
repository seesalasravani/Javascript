// Sample product data
const products = [
    { id: 1, title: "Product 1", price: 30, category: "clothing" },
    { id: 2, title: "Laptop", price: 60, category: "electronics" },
    { id: 3, title: "Product 3", price: 40, category: "home goods" },
    { id: 4, title: "Smartphone", price: 80, category: "electronics" },
    { id: 5, title: "Product 5", price: 20, category: "clothing" },
  ];
  
  // Sort products by price and find first electronics product
  const firstElectronicsProduct = products
    .sort((a, b) => a.price - b.price)
    .find((product) => product.category === "electronics");
  
  console.log(firstElectronicsProduct);