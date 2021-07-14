/* eslint-disable complexity */
/* eslint-disable no-unused-vars */
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('Deve etorna o próprio array sem o elemento item caso ele exista no array', () => {
  it('Verifica se esta funcionando', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');

    expect(myFizzBuzz(3)).toBe('fizz');

    expect(myFizzBuzz(5)).toBe('buzz');

    expect(myFizzBuzz(32)).toBe(32);

    expect(myFizzBuzz('15')).toBe(false);
  });
});