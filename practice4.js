
const products = [
  { id: 1, title: "Waterproof Jacket", price: 50, description: "Waterproof and breathable" },
  { id: 2, title: "Hiking Boots", price: 80, description: "Waterproof and insulated" },
  { id: 3, title: "Umbrella", price: 15, description: "Compact and waterproof" },
  { id: 4, title: "Backpack", price: 30, description: "Durable and water-resistant" },
  { id: 5, title: "Waterproof Phone Case", price: 25, description: "Full-body waterproof protection" },
];

// Search and filter products
const filteredProducts = products
  .filter((product) => product.description.toLowerCase().includes("waterproof"))
  .filter((product) => product.price > 20);

console.log(filteredProducts);

