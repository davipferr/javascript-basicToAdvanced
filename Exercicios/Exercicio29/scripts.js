let onibus = {
    roda: 8,
    limiteDePassageiros: 40,
    portas: 2,
}
onibus.janelas = 20;

delete onibus.roda;
console.log(onibus);

console.log(onibus.janelas);