<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Project/PHP/PHPProject.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="js/funcoesDois.js"></script>
        <style>
            @import 'css/layout.css';
        </style>

    </head>
    <body >
        <div class="menu">
            <a href="index.php">aritméticos</a>
            <a href="checkbox.php">checkbox e radio</a>
        </div>
        <fieldset>
            <legend><h1>Dados pessoais:</h1></legend>
            <form class="formulario" name="frmCheckbox" id="frmCheckbox" action="">
                <label> informe o seu sexo</label>
                <input type="radio" id="sexo" name="sexo" value="masculino"> masculino
                <input type="radio" id="sexo" name="sexo" value="feminino">feminino
                <br /><label><h1>Selecione seus hobbies:</h1></label>

                <input type="checkbox" value="esporte" name="hobbies" id="hobbies"> <label>esporte</label>
                <input type="checkbox" value="musica" name="hobbies" id="hobbies"> <label>musica</label>
                <input type="checkbox" value="tecnologia" name="hobbies" id="hobbies"> <label>tecnologia</label>
                <input type="checkbox" value="academia" name="hobbies" id="hobbies"> <label>academia</label>


                <button type="button" onclick="validaFormulario()">enviar</button>


            </form>
        </fieldset>
        <div id="resultado"></div>
    </body>
</html>
