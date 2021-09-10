var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    // remove o comportamento padrão
    event.preventDefault();

    // Pegar dados do formulário
    var form = document.querySelector("#form-adiciona");

     // Extrai informações do paciente do form
    var paciente = obtemInformacoesDoForm(form);
  
    var erros = validaPaciente(paciente);

    // Válida o paciente
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    // Limpar os campos
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
     // Cria a tr a td do paciente
     var pacienteTr = montaTr(paciente);

    // Adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    // controla o html interno de um elemento
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemInformacoesDoForm(form) {

    // Objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");

    // Adiciona a class=paciente da tr
    pacienteTr.classList.add("paciente");

    // Coloca como filho
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco!");

    if(!validaPeso(paciente.peso))
        erros.push("Peso inválido!");

    if(paciente.peso.length == 0)
        erros.push("O peso não pode ser em branco!");

    if(!validaAltura(paciente.altura))
        erros.push("Altura inválido!");

    if(paciente.altura.length == 0)
        erros.push("A altura não pode ser em branco!");

    if(paciente.gordura.length == 0)
        erros.push("A gordura não pode ser em branco!");

    return erros;
}