/*
const name = "Lucas"
const birthCity = "Sao Paulo"
let birthYear = 2002

console.log(name, birthCity, birthYear)

birthYear = 2030

console.log(birthYear)

//birthCity = "SP"

birthYear++

console.log(birthYear) 
*/

let candidata = 80
let situacao

if (candidata >= 80 && candidata <= 100) {
    situacao = "Aprovada"
} else if (candidata < 80 && candidata >= 60) {
    situacao = "Lista"
} else if (candidata < 60){
    situacao = "Reprovada"
}

switch (situacao) {
    case "Aprovada":
        console.log("Aprovado")
        break
    case "Lista":
        console.log("Lista de Espera")
        break
    case "Reprovada":
        console.log("Reprovado")
        break
    default:
        console.log("Valor nao indetificado")
}