

function imc() {
    var peso, altura;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    if (peso === "") {
        alert("Campo peso vazio");
        document.getElementById('peso').focus();
    } else if (altura === "") {
        alert("Campo altura vazio");
        document.getElementById('altura').focus();
    } else if ((isNaN(peso)) || (isNaN(altura))) {
        alert("Não é um valor numerico");
        document.getElementById('peso').value = "";
        document.getElementById('altura').value = "";
        document.getElementById('peso').focus();
    } else {
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        imc = peso / (altura * altura);
        if (imc < 17) {
            alert("Abaixo do peso \n imc: " + imc.toFixed(0));
            document.getElementById('frmImc').submit();
        } else if (imc >= 17 && imc < 25) {
            alert("Peso normal \n imc: " + imc.toFixed(0));
            document.getElementById('frmImc').submit();
        } else if (imc >= 25 && imc < 30) {
            alert("sobre peso \n imc: " + imc.toFixed(0));
            document.getElementById('frmImc').submit();
        } else if (imc >= 30 && imc < 35) {
            alert("Obesidade 1.\n imc: " + imc.toFixed(0));
            document.getElementById('frmImc').submit();
        } else if (imc >= 35 && imc < 40) {
            alert("Obesidade 2.\n imc: " + imc.toFixed(0));
            document.getElementById('frmImc').submit();
        } else if (imc >= 40) {
            alert("Obesidade morbida.\n imc: " + imc.toFixed(0));
            document.getElementById('frmImc').submit();
        }

    }


}
