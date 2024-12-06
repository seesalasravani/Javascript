//Arrow Function

const printEvenNumbers = () => {
  for (let i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers();