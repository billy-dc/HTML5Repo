/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("#envioCorreo").click(function(){
        
        // Implementar validaciones
        var email = $("#fp_email").val();
        
        alert(email);
        
        //Verificando campos vacios
        if ( email.indexOf('@', 0) == -1 || email.indexOf('.',0) == -1) {
            alert("El correo electrónico introducido no es correcto.");
            return false;
        }
        
        alert('El email introducido es correcto');

    });
});



