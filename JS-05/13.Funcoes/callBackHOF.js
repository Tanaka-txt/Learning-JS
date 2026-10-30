// HOF -> Higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao){

    return operacao(numero1, numero2)
}

function soma(numero1, numero2){
    return numero1 + numero2
}

function divisao(numero1, numero2){
    return numero1 / numero2
}

function subtracao(numero1, numero2){
    return numero1 - numero2
}

// Arrow
const mult = ((num1, num2) => num1 * num2);

function potencia(numero1, numero2){
    return numero1 ** numero2
}

const resultadoSoma = calcular(1,2, soma)

console.log(resultadoSoma)

const teste = calcular(2,2,mult);

console.log(teste);
