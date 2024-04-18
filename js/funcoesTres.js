/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

function imc() {
    var peso, altura, imc;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    if (peso === "") {
        alert("Campo peso vazio");
    } else if (altura === "") {
        alert("Campo altura vazio");
    } else if (!(isNaN(peso)) || !(isNaN(altura))) {
        alert("Não é um valor numerico");
    } else {
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        imc = peso / (altura * altura);
        if (imc < 17) {
            alert("Abaixo do peso");
        } else if (imc >= 17 && imc < 25) {
            alert("Peso normal");
        } else if (imc >= 25 && imc < 30) {
            alert("sobre peso");
        } else if (imc >= 30 && imc < 35) {
            alert("Obesidade 1.");
        } else if (imc >= 35 && imc < 40) {
            alert("Obesidade 2.");
        } else if (imc >= 40) {
            alert("Obesidade morbida.");
        }
    }


}
