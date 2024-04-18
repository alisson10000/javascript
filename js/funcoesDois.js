function validaFormulario() {
    var checkboxes = document.getElementsByName("hobbies");
    var selecionados = [];
    var sexo;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    if (sexo) {
        alert('Está selecionado.' + sexo.value);
    } else {
        alert('Nada selecionado');
    }
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selecionados.push(checkbox.value);
        }
    });
    if (selecionados.length > 0) {
        var mensagem = "Interesses selecionados: " + selecionados.join(", ");
        alert(mensagem);
    } else {
        alert("Por favor, selecione pelo menos um interesse.");
    }
}



