var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-de-digitacao")

// Aguarda o html da paǵina
$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();

    // Com JavaScript
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var quantidadePalavras = frase.split(" ").length;
    var tamanhoDaFrase = $("#tamanho-frase");
    tamanhoDaFrase.text(quantidadePalavras);
}

function inicializaContadores() {

    // Quando a um click no campo 'click
    // Quando a um input no campo
    campo.on("input", function(){
        // pega o valor (o que foi digitado)
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length -1;
        $("#contador-de-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-de-caracteres").text(qtdCaracteres);

    });
}

function inicializaCronometro() {

    var tempoRestante = $("#tempo-digitacao").text();

    campo.one("focus", function(){
        var cronometroID = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
            }
        }, 1000);
    });
}

// Botao reiniciar
// Com jQuery
// $("#botao-reiniciar").on("click", function(){
//     console.log("cliquei");
// });

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-de-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
};
