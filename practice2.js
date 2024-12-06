// Sample product data
const products = [
    { id: 1, title: "Product 1", description: "This is product 1" },
    { id: 2, title: "Product 2", description: "This is product 2" },
    { id: 3, title: "Product 3", description: "This is product 3" },
  ];
  
  // Map and join product descriptions
  const descriptionsString = products
    .map((product) => product.description)
    .join(", ");
  
  console.log(descriptionsString);