// Novo recurso no ecs 2015
const pessoa = {
    nome: "Ana",
    idade: 18,
    Endereco: "200 Mcs",
    obj: {
        conta: "00-22-1445",
        numero: 100
    }
}

const { nome, idade } = pessoa


console.log(nome, idade)

const { nome: n, idade: i } = pessoa

console.log(n, i)