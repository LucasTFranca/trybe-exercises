const newEmployees = () => {
  const employees = {
    id1: '22', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '33', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '44', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

function createEmail(name, action) {
  return {
    fullName: name,
    email: `${name.replace(' ', '_')}@trybe.com`,
    id: action().id1,
  };
}

console.log(createEmail('Pedro Guerra', newEmployees));