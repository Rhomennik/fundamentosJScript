// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5)
imprimirSoma()

// Funcao com Retorno

function soma(a, b = 1) {
    return (a + b)
}

console.log(soma(2, 3)) // Imprimiu pq return
console.log(soma(2)) // Somou com valor Padrao