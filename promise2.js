const promise = new Promise((resolve, reject) => {
    reject("Error message");
  });
  
  promise
    .then((value) => console.log(value))
    .catch((error) => console.error(error));
  