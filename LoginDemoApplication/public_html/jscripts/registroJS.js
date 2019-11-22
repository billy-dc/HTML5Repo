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
        if (clave.length < 6){
            alert("La clave debería tener mínimo permitido es 5 caracteres");
            return false;
        }
        
        if ( user == '' || clave == '' ){
            alert("Por favor, complete los campos...!!");
            return false;
        }
        
    });
});


