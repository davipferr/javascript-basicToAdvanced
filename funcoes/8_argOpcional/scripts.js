function soma(a,b){
    if(a === undefined || b === undefined) {
        console.log('Está função precisa ter os dois argumentos');
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log(`Olá ${nome}`);
    } else {
        (console.log(`Olá ${nome} você têm ${idade} anos`));
    }
}

console.log(saudacao('Davi'));
console.log(saudacao('Davi', 17));