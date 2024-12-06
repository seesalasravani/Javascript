

function introduce(greeting, location) {
  console.log(`${greeting}, my name is ${this.name} and I am from ${location}.`);
}

const person1 = { name: 'John Doe' };
const person2 = { name: 'Jane Doe' };


const introducePerson1 = introduce.bind(person1);
const introducePerson2 = introduce.bind(person2);

introducePerson1('Hello', 'New York');
introducePerson2('Hi', 'Los Angeles');

