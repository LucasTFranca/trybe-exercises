const test = require('./ex01');

describe('Teste se a função foi chamada', () => {
  const randomNumberSpyed = jest
    .spyOn(test, 'randomNumber');

  randomNumberSpyed.mockReturnValue(10);

  it('Teste se a função foi chamada', () => {
    randomNumberSpyed();
    expect(randomNumberSpyed).toHaveBeenCalled();
  });

  it('Teste o retorno da função', () => {
    expect(randomNumberSpyed()).toBe(10);
  });

  it('Teste quantas vezes a funcao foi chamada', () => {
    expect(randomNumberSpyed).toHaveBeenCalledTimes(2);
  });
});
