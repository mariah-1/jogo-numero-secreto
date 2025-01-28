let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;

    if (chute == numeroSecreto) {
        // Se o chute for correto, mostra apenas a mensagem de sucesso
        exibirTextoNaTela('h1', 'Parabéns Você acertou!');
        
        exibirTextoNaTela('p', `Com ${tentativas} Tentativas`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Se o chute for incorreto, mostra a mensagem de erro
        exibirTextoNaTela('h1', 'Você errou!');

        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        limparTela();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparTela(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativas = 0; // Reinicia as tentativas
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // Corrigido
}