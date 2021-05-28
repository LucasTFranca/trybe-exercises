let porcentagem = 40

if (porcentagem >= 90) {
    porcentagem = "A"
} else if (porcentagem >= 80) {
    porcentagem = "B"
} else if (porcentagem >= 70) {
    porcentagem = "C"
} else if (porcentagem >= 60) {
    porcentagem = "D"
} else if (porcentagem >= 50) {
    porcentagem = "E"
} else if (porcentagem < 50) {
    porcentagem = "F"
}

switch (porcentagem) {
    case "A":
        console.log(porcentagem)
        break
    case "B":
        console.log(porcentagem)
        break
    case "C":
        console.log(porcentagem)
        break
    case "D":
        console.log(porcentagem)
        break
    case "E":
        console.log(porcentagem)
        break
    case "F":
        console.log(porcentagem)
        break
}
 //-> A
 //-> B
 //-> C
 //-> D
 //-> E
 //-> F
