const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function xablau(obj, key, value) {
  obj[key] = value;
}

function chaves(obj, key, value) {
  return Object.keys(obj);
}

function quantity(obj, key, value) {
  return Object.keys(obj).length;
}

function value(obj, key, value) {
  return Object.values(obj);
}

function test() {
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  return allLessons;
}

function volta(obj) {
  return [obj.lesson1.materia, obj.lesson2.materia, obj.lesson3.materia];
}

const getValueByNumber = (obj, number) => Object.values(obj)[number];

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};

xablau(lesson2, 'turno', 'manha');
console.log(value(lesson2));
console.log(quantity(lesson2));
console.log(chaves(lesson2));
console.log(lesson2);
console.log(test());
console.log(volta(test()));
console.log(getValueByNumber(lesson2, 20));
console.log(verifyPair(lesson2, 'professor', 'Carlos'));