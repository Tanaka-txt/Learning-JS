console.log('[1] Seja Bem-Vindo a Calculadora de Troco!')

let valorCompra = 17.50;
let valorPago = 20.00;

let troco =  valorPago - valorCompra;

console.log('Valor da Compra: ', valorCompra)
console.log('Valor Pago: ', valorPago)
console.log('Valor do Troco: ', troco)

console.log('[2] Verifica Maioridade:')

let idade = 21;

if (idade >= 18){
    console.log('Maior de 18')
} else {
    console.log('Menor de 18')
}

console.log('[3] Validação de senha:')
const senha1 = 112233;
const senha2 = 'Banana';

// console.log(senha1 === senha2); Não permite se for de tipos diferentes
console.log(senha1 == senha2); // Resulta em false, como? Slá tbm skks

console.log('[4] Controle de faltas')
let totalAulas = 10;
let faltas = 7;

const limite = totalAulas * 0.25; // 1/4 OK

// console.log(limite)

if (faltas > limite) {
    console.log('Passou do limite de faltas')
} else {
    console.log('Ainda dentro do limite de faltas')
}

console.log('[5] Verificação de Login: ')

let temLogin = true;
let temSenha = true;

console.log('Resuldado: ', temLogin && temSenha) // true

console.log('[6] Valor negativo')
// Eu sei fazer os exercícios