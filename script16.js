function calculateShippingCost(region) {
    if (region === 1) {
      return "$10";
    } else if (region === 2) {
      return "$20";
    } else if (region === 3) {
      return "$30";
    } else if (region === 4) {
      return "$40";
    } else if (region === 5) {
      return "$50";
    } else {
      return "Invalid region";
    }
  }
  
  
  console.log(calculateShippingCost(1));  
  console.log(calculateShippingCost(2)); 
  console.log(calculateShippingCost(3));  
  console.log(calculateShippingCost(4));  
  console.log(calculateShippingCost(5));  
  console.log(calculateShippingCost(6));  
  