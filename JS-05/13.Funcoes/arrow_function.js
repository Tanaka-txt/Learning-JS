// Saudação
const nome = 'José';
                
// function saudacao(nomeDaPessoa) {
//     console.log('Olá, ', nomeDaPessoa);
// }

// Arrow Function
// 1 - Atribui a uma variavel

const saudacao = (nome) => {
    console.log('Vida longa para o: ', nome);
}

// Da para simplificar
const saudacao1 = nome => console.log('Olá', nome);

saudacao('José');
saudacao1('Julio');