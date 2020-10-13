let names = ['Davi', 'João', 'José', 'Paulo', 'Mara'];

let idades = [17,32,64];

function tamanho(dado) {
    if(dado.length < 5){
        console.log('Poucos Elementos');
    } else {
        console.log('Muitos Elementos');
    }
}

tamanho(names);
tamanho(idades);