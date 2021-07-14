const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

describe('Deve retornar um objeto', () => {
  it('Verifica se o objeto sao iguais', () => {
    expect(obj2).toEqual(obj3);
  });
});