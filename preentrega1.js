// Protrocolo para la administracion de una medicacion llamada Clozapina. Por sus caractertisticas y efectos secundarios debe seguir ciertas indicaciones.

// 1) Ingreso al sistema a traves de un usuario y contraseña. Si se repite mas de 3 veces un error el usuario será bloqueado y deberá dirigirse a administracion para su desbloqueo.

// 2) Resultados de analisis clinicos del paciente. Aqui ciertos valores deberan estar dentro de lo esperable para poder administrar la droga. Si algun valor no cumplira dicho requisito, deberá avisarle al médico para que evalue como proceder.

//3) Si todos los valores anteriores estan dentro de lo esperable, SI podra aceptarse la aplicacion la medicacion, de lo contrario NO se podrá.
let usuario = parseFloat(prompt('Ingrese Usuario'));
let contraseña = prompt('Ingrese su contraseña');
let mensaje;
let errorIngreso = 0;

if (usuario == 'drmengele' && contraseña == '123abc') {
    mensaje = ('Bienvenido ') + usuario;
}
else {
    mensaje = 'Usuario o contraseña incorrecta ❌';
}

while (usuario != 'drmengele' && contraseña != '123abc') {
    console.log('Usuario invalido');
    usuario = prompt('Usuario');
}


for (let errorIngreso = 0; errorIngreso >= 3; errorIngreso++) {
    alert('Usuario bloqueado, dirigirse a Administración')

}
alert(mensaje)


