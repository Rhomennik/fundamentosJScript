const prod1 = {}
prod1.nome = 'Celular Ultra Megavw'
prod1.preco = 4998.90
prod1['Desconto BlackFriday'] = 0.70 // Evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        cor: 'Azul',
        obj: {
            tamanho: 'XMP'
        }
    }
}

console.log(prod2)