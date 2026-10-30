// For
for(let contador = 1; contador <= 5; contador++) {
    console.log('Opa', contador)
}

for(let contador = 0; contador < 5; contador++) {
    console.log('Opa', contador)
}

for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 == 0) {
        console.log('Numero Par: ', numero)
    }
}

const palavra = 'Espolios'

for(let contador = 0; contador < palavra.length; contador++){
    console.log(palavra[contador]);
}

// While (Enquanto) - Primeiro verifica, se a condição for falsa nunca vai executar.

// Enquanto for verdade a condição
let contador2 = 1;

while(contador2 <= 10) {
    console.log('Numero Atual: ', contador2)
    contador2++;
}

// Do While - Ele primeiro executa depois verifica (Executa pelo menos 1 uma vez)
let n = 1;

do{
    console.log('Numero atual', n);
    n++;
}   while(n <= 10);

let altura = 7;
const escada = '*'

for(i = 0; i < altura; i++){ // 1
    let teste = altura - i;
    console.log(escada.repeat(teste));
}