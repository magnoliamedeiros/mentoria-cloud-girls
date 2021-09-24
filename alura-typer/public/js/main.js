var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-de-digitacao")

// Aguarda o html da paǵina
$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();

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
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    // alterando o css via jquery
    // campo.addClass("campo-desativado");
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

// Botao reiniciar
// Com jQuery
// $("#botao-reiniciar").on("click", function(){
//     console.log("cliquei");
// });

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
    
        if (digitado == comparavel) {
            campo.addClass("bordar-verde");
            campo.removeClass("bordar-vermelha");
        } else {
            campo.addClass("bordar-vermelha");
            campo.removeClass("bordar-verde");
        }
    });
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-de-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    // campo.removeClass("campo-desativado");
    campo.toggleClass("campo-desativado");
    campo.removeClass("bordar-vermelha");
    campo.removeClass("bordar-verde");
};
