// Variables de registro
var user = document.getElementById('nomusuario');
var nombre = document.getElementById('inputNombre');
var apellidos = document.getElementById('inputApellidos');
var correo = document.getElementById('inputEmailAddress');
var contrasena = document.getElementById('inputPassword');
var contrasena2 = document.getElementById('inputConfirmPassword');
var error = document.getElementById('error');
// Variables de inicio
var userlog = document.getElementById('loginusuario');
var passlog = document.getElementById('loginPassword');
var expReg= /^[a-zA-Z0-9.+-]+@+[a-zA-Z0-9-]+.[a-zA-Z0-9-.]/;
// Variables de Direccion
var fonoReg = /[+0-9]{9,12}/;
var direccion = document.getElementById('direccion');
var region = document.getElementById('inputRegion');
var comuna = document.getElementById('inputComuna');
var fono = document.getElementById('inputFono');
var guardado = document.getElementById('guardado');





var form = document.getElementById('register-form');
    form.addEventListener('submit', function(evt){       
        evt.preventDefault();
        console.log('Enviando datos...');
        var mensajesError = [];

        
        if(user.value === null || user.value === ''){
            mensajesError.push('Porfavor ingrese su Nombre de usuario')
        }
    
        if(nombre.value === null || nombre.value === ''){
            mensajesError.push('Porfavor ingrese su nombre')
    
        }
    
        if(apellidos.value === null || apellidos.value === ''){
            mensajesError.push('Porfavor ingrese su apellido')
    
        }
    
        if(correo.value === null || correo.value === ''){
            mensajesError.push('Porfavor ingrese un correo')
    
        }

        var esValido = expReg.test(correo.value);
        if(esValido == false){
            mensajesError.push('Su correo no es valido')
        }
    
        if(contrasena.value === null || contrasena.value === ''){
            mensajesError.push('Porfavor ingrese una contrasena')
    
        }

        if(contrasena.value.length < 7){
            mensajesError.push('La contrasena es insegura')
    
        }
    
        if(contrasena2.value === null || contrasena2.value === ''||contrasena2.value !== contrasena.value){
            mensajesError.push('La contrasena de confirmacion es incorrecta. ')
            
        }
    
        error.innerHTML = mensajesError.join('<br /> ');
        document.getElementById('error').style.visibility = 'visible';

        if(user.value === null || user.value === ''|| nombre.value === null || nombre.value === ''|| apellidos.value === null || apellidos.value === '' || correo.value === null || correo.value === ''|| contrasena.value === null || contrasena.value === ''|| contrasena2.value === null || contrasena2.value === ''|| contrasena2.value !== contrasena.value || esValido == false){
            return false;
        }
        else{
            document.getElementById('error').style.visibility = 'hidden';
            return window.location.href = 'login.html'
        }

    });


    jQuery(document).ready(function($){
        $(document).ready(function() {
            $('.mi-selector').select2();
        });
    });

function inicioForm(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(userlog.value === null || userlog.value === '' || passlog.value === null || passlog.value === ''){
        mensajesError.push('Su contraseña y/o correo son incorrectos. Intente nuevamente.')
    }

    error.innerHTML = mensajesError.join('<br />  ');
    document.getElementById('error').style.visibility = 'visible';

    
    if(userlog.value === null || userlog.value === '' || passlog.value === null || passlog.value === ''){
        return false;
    }

    else{
        document.getElementById('error').style.visibility = 'hidden';
        return window.location.href = 'index.html'
    }
}

function direccionForm(){
    console.log('Enviando formulario...');
    document.getElementById('guardado').style.visibility = 'hidden';

    var mensajesError = [];
    var save = [];

    if(direccion.value === null || direccion.value === ''){
        mensajesError.push('Porfavor ingrese su direccion')
    }

    if(region.value === null || region.value === ''){
        mensajesError.push('Porfavor seleccione una region')

    }

    if(comuna.value === null || comuna.value === ''){
        mensajesError.push('Porfavor seleccione su comuna')

    }

    if(fono.value === null || fono.value === ''){
        mensajesError.push('Porfavor ingrese un numero telefonico')

    }

    var esValido = fonoReg.test(fono.value);
    if(esValido == false){
        mensajesError.push('Su telefono no es valido')
    }


    error.innerHTML = mensajesError.join('<br />  ');
    document.getElementById('error').style.visibility = 'visible';

    
    if(direccion.value === null || direccion.value === '' || region.value === null || region.value === ''||comuna.value === null || comuna.value === ''||fono.value === null || fono.value === ''|| esValido == false){
        return false;
    }

    else{
        document.getElementById('error').style.visibility = 'hidden';
        save.push("Su direccion tiene cobertura para despacho 👍")
        guardado.innerHTML = save.join('<br /> ');
        document.getElementById('guardado').style.visibility = 'visible';
        document.getElementById("cuenta-form").reset();

    }
    


}
