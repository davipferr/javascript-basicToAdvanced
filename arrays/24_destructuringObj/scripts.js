let obj = {
    nome: 'Davi',
    idade: 17,
    altura: '1,60 m',
    estudante: true,
}

const {nome: vNome, idade: vIdade, altura: vAltura, estudante: vEstudante} = obj;

console.log(vNome);
console.log(vIdade);
