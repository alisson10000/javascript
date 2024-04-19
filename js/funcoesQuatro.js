function calcularSalario() {
    var idade, salario, aumento, salarioFinal;
    idade = document.getElementById('idade').value;
    salario = document.getElementById('salario').value;
    if (idade === "" || salario === "") {
        alert("Campo idade ou campo salario está vazio");
        document.getElementById('idade').value = "";
        document.getElementById('salario').value = "";
        document.getElementById('idade').focus();
    } else if ((isNaN(idade)) || (isNaN(salario))) {
        alert("Campo idade ou campo salario estão com valores inválidos");
        document.getElementById('idade').value = "";
        document.getElementById('salario').value = "";
        document.getElementById('idade').focus();
    } else {
        if (idade >= 65 || salario <= 1000) {
            salario = parseFloat(salario);
            aumento = salario * 0.15;
            salarioFinal = salario + aumento;
            alert("Voce recebeu um aumento de " + aumento + "\n seu salario final é : " + salarioFinal);
            document.frmSalario.submit();
        } else if (salario > 1000) {
            salario = parseFloat(salario);
            aumento = salario * 0.1;
            salarioFinal = salario + aumento;
            alert("Voce recebeu um aumento de " + aumento + "\n seu salario final é : " + salarioFinal);
            document.frmSalario.submit();
        }


    }

}