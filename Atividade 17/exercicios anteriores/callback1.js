const prompt = require('prompt-sync')();

function saudacao(nome) {
    console.log('Oi' + nome);
}
function entradaNome(callback) {
    let nome = prompt('Digite seu nome:');
    callback(nome); // chamado a função callback (saudação)
}
entradaNome(saudacao);
//obter o nome do usuário através de uma caixa de diálogo e, em seguida, chamar a função de retorno

