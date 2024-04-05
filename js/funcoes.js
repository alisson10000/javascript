function olaMundo() {
    alert('Olá mundo!!!');
}

function somaCalculo() {
    var numeroUm, numeroDois, calcular, operacao;
    numeroUm = document.getElementById('numeroUm').value;
    numeroDois = document.getElementById('numeroDois').value;
    operacao = document.getElementById('operacao').value;
    operacao = parseInt(operacao);


    if (operacao = "" || numeroUm == "" || numeroDois == "") {
        alert("Campos vazios no formulário");

    } else {

        var numeroUm, numeroDois, calcular, operacao;
        numeroUm = document.getElementById('numeroUm').value;
        numeroDois = document.getElementById('numeroDois').value;
        operacao = document.getElementById('operacao').value;
        operacao = parseInt(operacao);


        if (operacao === 1) {
            calcular = parseFloat(numeroUm) + parseFloat(numeroDois);
            document.getElementById('resultado').innerHTML = "resultado da soma é: " + calcular;
//        alert("O resultado da soma é: " + calcular);
        } else if (operacao === 2) {
            calcular = parseFloat(numeroUm) - parseFloat(numeroDois);
            document.getElementById('resultado').innerHTML = "resultado da subtração é: " + calcular;
//        alert("O resultado da soma é: " + calcular);
        } else if (operacao === 3) {
            calcular = parseFloat(numeroUm) * parseFloat(numeroDois);
            document.getElementById('resultado').innerHTML = "resultado da multiplicação é: " + calcular;
//        alert("O resultado da soma é: " + calcular);
        } else if (operacao === 4) {
            calcular = parseFloat(numeroUm) / parseFloat(numeroDois);
            document.getElementById('resultado').innerHTML = "resultado da divisão é: " + calcular;
//        alert("O resultado da soma é: " + calcular);
        }

    }
}
















function soma() {
    var numUm, numDois, soma;

    numUm = document.getElementById('n1').value;

    numDois = document.getElementById('n2').value;

    soma = parseFloat(numUm) + parseFloat(numDois);

    alert(soma);
}