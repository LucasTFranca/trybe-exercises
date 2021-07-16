const test = require('./ex02');

describe('Teste se a função foi chamada', () => {
  const randomNumberSpyed = jest
    .spyOn(test, 'randomNumber');
  
  randomNumberSpyed.mockReturnValue(10);

  randomNumberSpyed.mockImplementationOnce((num1, num2) => num1 / num2);

  it('Teste se a função foi chamada', () => {
    expect(randomNumberSpyed(4, 2)).toBe(2);
  });

  it('Teste o retorno da função', () => {
    expect(randomNumberSpyed()).toBe(10);
  });

  it('Teste quantas vezes a funcao foi chamada', () => {
    expect(randomNumberSpyed).toHaveBeenCalledTimes(2);
  });
});
