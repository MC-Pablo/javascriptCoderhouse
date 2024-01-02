// Protrocolo para la administracion de una medicacion llamada Clozapina. Por sus caractertisticas y efectos secundarios debe seguir ciertas indicaciones.

// 1) Ingreso al sistema a traves de un usuario y contraseña. Si se repite mas de 3 veces un error el usuario será bloqueado y deberá dirigirse a administracion para su desbloqueo.

// 2) Resultados de analisis clinicos del paciente. Aqui ciertos valores deberan estar dentro de lo esperable para poder administrar la droga. Si algun valor no cumplira dicho requisito, deberá avisarle al médico para que evalue como proceder. Parametros a considerar:

// globulos blancos >= 1500


//3) Si todos los valores anteriores estan dentro de lo esperable, SI podra aceptarse la aplicacion la medicacion, de lo contrario NO se podrá.

const USUARIO = "drmengele";
const CONTRASEÑA = "admin";

function validarUsuario() {
    let intentosFallidos = 0;
    let puedeContinuar = true;

    while (intentosFallidos < 3) {
        let usuario = prompt("Ingrese su usuario:");
        let contraseña = prompt("Ingrese su contraseña:");

        if (usuario === USUARIO && contraseña === CONTRASEÑA) {
            puedeContinuar = true;
            break;
        } else {
            intentosFallidos++;
            puedeContinuar = false;
            alert("Usuario o contraseña incorrecta");
        }
    }

    if (puedeContinuar) {
        constatarParametros();
    } else {
        alert("Usuario bloqueado");
    }
}

validarUsuario();

function constatarParametros() {
    let globulosBlancos = parseInt(prompt("Neutrófilos:"));
    let mensaje;

    if (globulosBlancos >= 1500) {
        mensaje = "Puede continuar con la titulacion de Clozapina";
    } else {
        mensaje = "¡Alerta!❌ Indicadores de Neutropenia. Evaluar titulacion";
    }

    alert(mensaje);
}

constatarParametros();