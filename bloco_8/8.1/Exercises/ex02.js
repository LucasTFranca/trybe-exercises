function verifyNumber(luckyNumber, number) {
  if (luckyNumber === number) return 'Parabéns você ganhou';
  return 'Tente novamente';
}

function randomNumber(number, action) {
  const luckyNumber = Math.floor(Math.random() * 6);
  return action(luckyNumber, number);
}

console.log(randomNumber(5, verifyNumber));