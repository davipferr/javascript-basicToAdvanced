let pessoa = {
    nome: 'Davi',
    idade: 17,
    altura: '1,60 m',
};

let adicionais = {
    estudante: true,
}

console.log(pessoa);

Object.assign(pessoa, adicionais);

console.log(pessoa);

