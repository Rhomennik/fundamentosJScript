console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bonito'
    // obj1['nome'] = 'Boito'
console.log(obj1.nome)

function Obj(nome) {

    this.nome = nome
    thios.exec = function() {
        console.log('Exec ....')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

// Chamando exec FUNCAO DENTRO DE UMA FUNCAO

obj3.exec()