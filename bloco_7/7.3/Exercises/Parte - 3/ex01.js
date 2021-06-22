const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello';
  const array = [];
  for (const person in people) {
    array.push(`${greeting} ${people[person]}`);
  }
  return array;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);