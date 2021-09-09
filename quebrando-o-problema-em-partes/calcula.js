function buscaElemento(seletor) {
    return document.querySelector(seletor);
}

function aplicaTabuada(numero, tabuada) {

    return numero * tabuada;
}

var botao = buscaElemento('.botao');
var numero = buscaElemento('.numero');
var tabuada = buscaElemento('.tabuada');
var resultado = buscaElemento('.resultado');

botao.addEventListener('click', function() {

    resultado.textContent = aplicaTabuada(numero.value, tabuada.value);

});