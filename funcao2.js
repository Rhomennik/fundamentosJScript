// Armazenando uma funcao em uma Variavel (const)

const imprimirSoma = function(a, b) {

    console.log(a + b)

}

imprimirSoma(2, 3)

// Armazenando Funcao Arrow
const som = (a, b) => {
    return a + b
}
console.log(som(1, 3))

// Retorno implicito, (mais curot ainda de fazer uma fuction mais ainda que o arrow)
// Executa so uma linha, entao pode ser assim curtinho so com =>
const substracao = (a, b) => a - b

console.log(substracao(3, 3))