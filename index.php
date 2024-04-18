<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Project/PHP/PHPProject.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="js/funcoes.js"></script>
        <style>
            @import 'css/layout.css';
        </style>
    </head>
    <body >
        <div class="menu">
            <a href="index.php">aritméticos</a>
            <a href="checkbox.php">checkbox e radio</a>
            <a href="imc.php">imc</a>
        </div>
        <fieldset>
            <legend>Cálculos:</legend>
            <form class="formulario" name="frmSoma" id="frmSoma" action="">
                <select name="operacao" id="operacao">
                    <option value="">selecione a operação</option>
                    <option value="1">somar</option>
                    <option value="2">subtrair</option>
                    <option value="3">multiplicar</option>
                    <option value="4">dividir</option>
                </select>
                <input type="text" name="numeroUm" id="numeroUm">
                <input type="text" name="numeroDois" id="numeroDois">
                <input type="button"  onclick="somaCalculo()" value="calcular"/>
            </form>
        </fieldset>
        <div id="resultado"></div>
    </body>
</html>
