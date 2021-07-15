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

const getUserName = async (userID) => await findUserById(userID);

it('verifique a chamada do callback de uma função uppercase', async () => {
  expect(await getUserName(4)).toEqual({ name: "Mark" });
});

it('verifica se lanca um erro', async () => {
  try {
    await getUserName(1);
  } catch (error) {
    expect(error).toEqual({ "error": "User with 1 not found." });
  }
});