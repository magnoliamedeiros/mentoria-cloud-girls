// INSERIR PLACAR
function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Alice";
    var numeroPalavras = $("#contador-de-palavras").text();

    var linha = novaLinha(usuario, numeroPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}

// NOVA LINHA
function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

// REMOVER LINHA
function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}
