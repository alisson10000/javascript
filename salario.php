<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="js/funcoesQuatro.js"></script>
    </head>
    <body>
        <div class="menu">
            <a href="index.php">aritméticos</a>
            <a href="checkbox.php">checkbox e radio</a>
            <a href="imc.php">imc</a>
            <a href="salario.php">salário</a>
        </div>
        <form method="get" action="#" name="frmSalario" id="frmSalario">
            <label for="idade">informe a sua idade</label>
            <input type="text" name="idade" id="idade">
            <label for="salario">informe a seu salário</label>
            <input type="text" name="salario" id="salario">
            <button type="button" onclick="calcularSalario()" >calcular</button>
        </form>
  </body>
</html>
