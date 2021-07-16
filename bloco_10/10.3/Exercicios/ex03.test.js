/* eslint-disable max-lines-per-function */
const test = require('./ex02');

describe('Teste se a função foi chamada', () => {
  test.randomNumber = jest.fn();

  test.randomNumber.mockImplementation((num1, num2) => num1 / num2);

  it('Teste se a função foi chamada', () => {
    expect(test.randomNumber(4, 2)).toBe(2);
  });

  it('Teste quantas vezes a funcao foi chamada', () => {
    expect(test.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Teste se a função foi chamada', () => {
    test.randomNumber.mockReset();
    
    expect(test.randomNumber).toHaveBeenCalledTimes(0);

    test.randomNumber.mockImplementation((num) => num * 2);

    expect(test.randomNumber(2)).toBe(4);
  });
});
