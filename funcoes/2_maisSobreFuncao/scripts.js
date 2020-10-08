function multiplicarNumeros(x, y, z){
    return x * y * z;
}

console.log(multiplicarNumeros(2, 4, 6));

const mult = multiplicarNumeros(2,4,6);
console.log('O valor de mult é ' + mult);

function podeDirigir(idade, cnh) {
    if(idade >=18 && cnh == true){
        console.log('Você pode dirigir!');
    } else {
        console.log('Você não pode dirigir');
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(17, 0));