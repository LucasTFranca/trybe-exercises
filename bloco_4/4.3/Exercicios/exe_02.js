let n = 5
let asteristico = ""
let espaco = ""

for (let cont = 0;cont < n;cont += 1) {
  for (let index = 1;index < n - cont;index += 1) {
    espaco += " "
  }
  console.log(espaco, asteristico += "*")
  espaco = ""
}