// par Nome / Valor
const saudacao = 'Opa' // Contexto Lexico

function exec() {
    const saudacao = 'Falaaaaa' // Outro contexto Lexico
    return saudacao
}
// Objeto sao grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 23,
    peso: 90,
    endereco: {
        logradouro: "Rua muito masssa",
        numero: "782"

    }
}


console.log(saudacao)

console.log(exec())

console.log(cliente)