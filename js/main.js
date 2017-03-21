function translate(){
   var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var  password = document.getElementById("inputPassword");
    var remember = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];
    
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo electrónico";
    password.placeholder = "Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión";
    
}

translate();

function mostrarDatos() {
    var correo = document.getElementById("inputEmail").value;
    var contrasena = document.getElementById("inputPassword").value;
    
    document.getElementById("titulo").innerHTML = "Datos de formulario";
    document.getElementById("datos").innerHTML = "El correo electrónico ingresado es:<br>" + correo + "<br> La clave ingresada es:<br>" + contrasena;
    
}


