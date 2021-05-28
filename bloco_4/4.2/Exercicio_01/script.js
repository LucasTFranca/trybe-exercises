let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = numbers[0]
let numMaior = 0
let numMenor = 0
let par = 0
let impar = 0

for (let cont = 1;numbers.length > cont;cont += 1) {
    soma = numbers[cont] + soma
    if (numbers[cont - 1] % 2 === 0) {
        par += 1
    }else {
        impar += 1
    }
    for (index = 0;index < numbers.length;index += 1){
        if (numMaior < numbers[index]) {
            numMaior = numbers[index]
        } 
        if (numMenor > numbers[index]) {
            numMenor = numbers[index]
        }
    }
}

if (soma < 20) {
    console.log("Valor menor que 20")
} else {
    console.log("Valor maior que 20")
}

console.log("Numeros impares: ", impar)
console.log("Numeros pares: ", par)
console.log("O maior numero: ", numMaior)
console.log("O maior numero: ", numMenor)
console.log("soma: ", soma, "media: ", soma / numbers.length)