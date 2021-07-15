const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

it('verifique a chamada do callback de uma função uppercase', () => {
  uppercase('agua', (data) => {
    expect(data).toBe('AGUA');
  });
});