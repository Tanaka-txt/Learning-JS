
function verifica(questao, resposta){
    switch (questao) {
        case 1:
            if(resposta === 'b'){
                return 1
            } else {
                return 0
            }
        break;

        case 2:
            if(resposta === 'c'){
                return 1
            } else {
                return 0
            }
        break;

        case 3:
            if(resposta === 'b'){
                return 1
            } else {
                return 0
            }
        break;

        default:
            console.log('Erro ao valor inserido inconsistence');
            return 0
        break;
    }
}
module.exports = verifica;