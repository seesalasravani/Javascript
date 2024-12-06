// Sample product data
const products = [
    { id: 1, title: "Dress", price: 30, category: "women's clothing" },
    { id: 2, title: "Shirt", price: 20, category: "men's clothing" },
    { id: 3, title: "Skirt", price: 40, category: "women's clothing" },
    { id: 4, title: "Jacket", price: 50, category: "men's clothing" },
    { id: 5, title: "Blouse", price: 35, category: "women's clothing" },
  ];
  
  // Filter and reduce to calculate total price
  const totalPrice = products
    .filter((product) => product.category === "women's clothing")
    .reduce((total, product) => total + product.price, 0);
  
  console.log(totalPrice);