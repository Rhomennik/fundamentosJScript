let valor // Variavel nao iniciada

console.log(valor);
// console.log(valor2);

valor = null // Ausencia de  valor

console.log(valor)
    // console.log(valor.toString()) // Erro !
const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite ATRIBUIR UNDIFINED

console.log(!!produto.preco)
    // delete produto.preco
console.log(produto)

produto.preco = null // Sem preco

console.log(!!produto.preco)

console.log(produto)