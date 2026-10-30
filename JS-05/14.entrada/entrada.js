// 'readLine' - Biblioteca que interage com o terminal
// Importar -> const readline = require('redline')

const readLine = require('readline') // importou biblioteca

const leitor = readLine.createInterface({ // cria o leitor
    input: process.stdin,  // entrada
    output: process.stdout // saida
})

// leitor.question('Qual sua idade?', Number.MIN_VALUE(1));

leitor.question('Qual é o seu nome? ', (nome)=> {
    console.log('Olá, ',nome)
    console.log('Boas vindas ao sistema!')

    leitor.question('Qual sua idade? ', (idade)=> {
        if(idade > 18) {
            console.log('Voce pode ter CNH');
        } else {
            console.log('Não pode usar CNH');
        }
        leitor.close()
    })
})

leitor.question('Qual é o seu nome? ', (nome)=> {
    console.log('Olá, ',nome)
    console.log('Boas vindas ao sistema!')
    
    leitor.close()
})