
const nome = 'José';
                
             // Parametro
function saudacao(nomeDaPessoa) {
    console.log('Olá, ', nomeDaPessoa);
}

saudacao(nome);

// Return
function calcularDobroDeUm(valor) {
    return valor * 2;
}

let teste = calcularDobroDeUm(4);
console.log(teste)