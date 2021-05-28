let n = 5
let aste = ""
let espaco = ""

for (let cont = 1;cont <= n;cont += 1) {
  aste += "*"
  for (let index = 1;index < n - cont;index += 2) {
    espaco += " "
  }
  if((cont % 2) != 0) {
    console.log(espaco + aste)
  }
  espaco = ""
}