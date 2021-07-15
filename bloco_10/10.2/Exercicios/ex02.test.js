const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
  };
  
  const findUserById = (id) => new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: `User with ${id} not found.` });
    });
  
  const getUserName = (userID) => findUserById(userID).then((user) => user.name);

it('verifique a chamada do callback de uma função uppercase', () => {
  expect.assertions(1);

  return getUserName(4)
    .then((data) => {
      expect(data).toBe('Mark');
    });
});

it('verifique se lanca um erro', () => {
  expect.assertions(1);

  return getUserName(2)
    .catch((error) => {
      expect(error).toEqual({ error: `User with 2 not found.` });
    });
});
