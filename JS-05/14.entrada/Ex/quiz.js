// Importei
const le = require('./interpretadorInput');
const verifica = require('./verificaResp');

let acertos = 0;

console.log('Bem vindo ao Quiz de JS!');
console.log('Responda as perguntas com as letras corretas: a, b ou c\n');

le.question('1) Qual a palavra usamos para crias uma função? \n(a) define\n(b) function\n(c) create\n', (resposta1) => {
    acertos += verifica(1,resposta1);
    le.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar()\n(b) repeat\n(c) for\n', (resposta2) => {
        acertos += verifica(2,resposta2);
        le.question('3) Qual o valor é considerado falsy em JS?\n(a) 1\n(b) 0\n(c) "texto"\n', (resposta3) => {
            acertos += verifica(3,resposta3);
            
            le.close();

            mostrarResultado();
        })
    })
})

function mostrarResultado() {
    // console.log(acertos);
    console.log('Calculando ')
    let contador = 0;

    const id = setInterval(() =>{
        contador++;
        process.stdout.write('. '); // O write não pula linha automático, fica mais bonito para os pontinhos

        if (contador === 3) {
            clearInterval(id);

            console.log('\n');
            if(acertos === 3) {
                console.log('Parabénms');
            } else if (acertos === 2){
                console.log('Muito bom! Continue');
            } else{
                console.log('Continue praticando');
            }
        }
    }, 500);
}
