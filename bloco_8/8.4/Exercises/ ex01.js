const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((previusValue, nextValue) => previusValue.concat(nextValue));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((accumulate, nextValue, index, array) => {
    if (index === 1) return `${accumulate.author.name}, ${nextValue.author.name}`;
    if (index === array.length - 1) return `${accumulate}, ${nextValue.author.name}.`;
    return `${accumulate}, ${nextValue.author.name}`;
  });
}

assert.strictEqual(reduceNames(), expectedResult);

const expectedResult1 = 43;

function averageAge() {
  return books.reduce((accumulate, nextValue, index, array) => {
    if (index === 1) {
      return (accumulate.releaseYear - accumulate.author.birthYear)
        + (nextValue.releaseYear - nextValue.author.birthYear);
    }
    if (index === array.length - 1) {
      return (accumulate + (nextValue.releaseYear - nextValue.author.birthYear)) / (array.length);
    }
    return accumulate + (nextValue.releaseYear - nextValue.author.birthYear);
  });
}

assert.strictEqual(averageAge(), expectedResult1);

const expectedResult2 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((accumulate, nextValue) => 
    (accumulate.name.length > nextValue.name.length ? accumulate : nextValue));
}

assert.deepStrictEqual(longestNamedBook(), expectedResult2);

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((accumulate, nextValue) => accumulate + nextValue.match(/a/gi).length, 0);
}

assert.deepStrictEqual(containsA(), 20);

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => {
    const person = {
      name: student,
    };
    person.average = grades[index].reduce((accumulate, nextValue, indice, array) => {
      if (indice === array.length - 1) return (accumulate + nextValue) / array.length;
      return accumulate + nextValue;
    });
    return person;
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);