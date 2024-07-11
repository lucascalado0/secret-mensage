function exibirTextoNaTela(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagem() {
    exibirTextoNaTela('h1', 'Nenhuma mensagem encontrada');
    exibirTextoNaTela('p', 'Digite um texto que voce deseja criptografar ou descriptografar');
}

exibirMensagem();

function ocultarImagem() {
    document.getElementById('imagem').style.display = 'none';

}

function criptografar() {
    var texto = document.getElementById('campoTexto').value;

    if (/[A-ZÀ-ÖØ-Ý]/.test(texto) || /[áéíóúãõâêîôûàèìòùäëïöü]/.test(texto)) {
        alert("Por favor, use apenas letras minúsculas e sem acentos!");
        return;
    } else {

        var textoCriptografado = texto.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    exibirTextoNaTela('p', textoCriptografado);
    exibirTextoNaTela('h1', '')
    ocultarImagem();
}

function descriptografar() {
    var texto = document.getElementById('campoTexto').value;

    if (/[A-ZÀ-ÖØ-Ý]/.test(texto) || /[áéíóúãõâêîôûàèìòùäëïöü]/.test(texto)) {
        alert("Por favor, use apenas letras minúsculas e sem acentos!");
        return;
    } else {

        var textoCriptografado = texto.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    exibirTextoNaTela('p', textoCriptografado);
    exibirTextoNaTela('h1', '')
    ocultarImagem();
}

function copiarTexto() {
    let resultado = document.getElementById('mensagemFinal');
    let range = document.createRange();
    range.selectNode(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    ocultarImagem();


    // Limpa a mensagem após alguns segundos
    setTimeout(() => {
        asideContentMessage.innerText = '';
    }, 3000); // A mensagem será removida após 3 segundos (3000 milissegundos)
}

















//  function exibirMensagem(mensagem) {
//      document.getElementById('mensagemFinal').innerText = mensagem;
//      document.getElementById('mensagemTitulo').style.display = 'none';
//  }

