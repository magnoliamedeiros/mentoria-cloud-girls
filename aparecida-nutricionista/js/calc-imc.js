var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Acessando a tabela
var pacientes = document.querySelectorAll(".paciente"); // Tenho acesso a todos os dados do paciente pelo id da tag tr

// Responsável por pegar os dados do paciente
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); // Consigo acessar pela classe a tag 'td'
    var peso = tdPeso.textContent; // Consigo ter acesso a informação que está entre as tags 'td'
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso); // true or false
    var alturaEhValida = validaAltura(altura); // true or false
    
    // Para peso inválido
    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    // Para altura inválida
    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    // Calcula o imc
    if ( alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >=0 && peso < 1000)
        return true;
    else
        return false;
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0)
        return true;
    else
        return false;
}

function calculaImc (peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}