/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("#enviar").click(function(){
        
        var clave = $("#contraseña").val();
        var mes = $("#mes").val();
        var genero = $("#genero").val();
        var telefono = $("#telefono").val();
        
        //Verificando campos vacios
        if ( clave.length < 6 ){
            alert("La clave debería tener mínimo 6 caracteres.");
            return false;
        }
        
        if ( mes == '' ){
            alert("Seleccione mes válido.");
            return false;
        }
        
        if ( genero == '' ){
            alert("Seleccione género.");
            return false;
        }
        
        if ( telefono.length < 8 ){
            alert("Ingrese número de celular válido.");
            return false;
        }
        
        alert("Validaciones OK");

    });
});


