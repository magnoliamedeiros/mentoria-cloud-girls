var frase = $(".frase").text();
var quantidadePalavras = frase.split(" ").length;
var tamanhoDaFrase = $("#tamanho-frase");
tamanhoDaFrase.text(quantidadePalavras);

var campo = $(".campo-de-digitacao")

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
