// Funções Globais

// Como usar?

// Como achar?

// Vai executar a função de pois que passar um determinado tempo

function saudacao() {
    console.log('Eai beleza?')
}

setTimeout(saudacao, 2000) // ms

// Faz uma ação em um intervalo de 1s
let contador = 0

const id = setInterval(() => {
    contador++
    console.log('Tempo decorrido (em segundos):', contador)
    if (contador == 10) {
        clearInterval(id) // usado para parar o setInterval (id_ é capturado quando executa  o set interval, o JS retorna um ID para limpar ele)
    }
}, 1000) //1000 ms = 1s