
// Create promises
const promise1 = new Promise((resolve, reject) => {
    resolve("Hello");
  });
  
  const promise2 = (message) => {
    return new Promise((resolve, reject) => {
      resolve(`${message} World!`);
    });
  };
  
  const promise3 = (message) => {
    return new Promise((resolve, reject) => {
      resolve(`Final message: ${message}`);
    });
  };
  
  promise1
    .then((message) => promise2(message))
    .then((message) => promise3(message))
    .then((finalMessage) => console.log(finalMessage))
    .catch((error) => console.error(error));
  
  
  