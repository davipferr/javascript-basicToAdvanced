let pessoa = {
    "nome": "Davi",
    "idade": 17,
    "profissao": "programador",
    "hobbies": ["Jogar", "Estudo"],
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);

console.log(pessoaJson.hobbies[0]);