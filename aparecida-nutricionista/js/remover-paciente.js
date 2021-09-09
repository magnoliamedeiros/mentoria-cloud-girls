// Pega todos os pacientes
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);
pacientes.forEach(function(paciente){

    // evento de dublo clique 'dblclick'
    paciente.addEventListener("dblclick", function(){
        console.log("fui com duplo clique");
        this.remove();
    }); 
});