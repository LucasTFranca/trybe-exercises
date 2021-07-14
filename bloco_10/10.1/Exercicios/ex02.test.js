function myRemove(arr, item) {
  const newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

describe('Deve retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Verifica se esta funcionando', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);

    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);

    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);

    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});