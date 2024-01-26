// Protrocolo para la administracion de una medicacion llamada Clozapina. Por sus caractertisticas y efectos secundarios debe seguir ciertas indicaciones.

// 1) Ingreso al sistema a traves de un usuario y contraseña. Si se repite mas de 3 veces un error el usuario será bloqueado y deberá dirigirse a administracion para su desbloqueo.

// 2) Resultados de analisis clinicos del paciente. Aqui ciertos valores deberan estar dentro de lo esperable para poder administrar la droga. Si algun valor no cumplira dicho requisito, deberá avisarle al médico para que evalue como proceder. Parametros a considerar:

// globulos blancos >= 1500


//3) Si todos los valores anteriores estan dentro de lo esperable, SI podra aceptarse la aplicacion la medicacion, de lo contrario NO se podrá.

const baseDatos = [
  {
    usuario: "drmengele",
    contraseña: "admin",
  },
  {
    usuario: "drriviera",
    contraseña: "admin",
  },
  {
    usuario: "drfrink",
    contraseña: "admin",
  },
];


while (intentosFallidos < 3) {
  let usuarioValido = prompt("Ingrese su usuario:");
  let contraseñaValida = prompt("Ingrese su contraseña:");

  const usuarioEncontrado = baseDatos.find((ingreso) => ingreso.usuario === usuarioValido);
  const contraseñaEncontrada = baseDatos.find((ingreso) => ingreso.contraseña === contraseñaValida);

  if (usuarioEncontrado && contraseñaEncontrada) {
    mensaje = "¡Bienvenido!";
    alert(mensaje);
    return true;
  } else {
    intentosFallidos++;
    mensaje = "Usuario o contraseña incorrecta";
    alert(mensaje);
  }
}

if (intentosFallidos >= 3) {
  alert("Usuario bloqueado");
  return false;
}


validarUsuario();


function constatarParametros() {
  const globulosBlancos = obtenerGlobulosBlancos();
  let mensaje;

  if (globulosBlancos >= 1500) {
    mensaje = MENSAJE_CONTINUAR;
  } else {
    mensaje = MENSAJE_ALERTA;
  }

  alert(mensaje);
}

function obtenerGlobulosBlancos() {
  return parseInt(prompt("Neutrófilos:"));
}

const MENSAJE_CONTINUAR = "Puede continuar con la titulacion de Clozapina";
const MENSAJE_ALERTA = "¡Alerta!❌ Indicadores de Neutropenia. Evaluar titulacion";

validarUsuario();



//  Segunda preentrega //


function personal(nombre, profesion, especialidad) {
  this.nombre = nombre;
  this.profesion = profesion;
  this.especialidad = especialidad;

};

const profesional1 = new personal("drmengele", "médico", "psiquiatra");
const profesional2 = new personal("drriviera", "médico", "psiquiatra");
const profesional3 = new personal("drfrink", "médico", "psiquiatra");





/* const usuario1 = new usuarios ("drmengele", "admin");
const usuario2 = new usuarios ("drriviera","admin");
const usuario3 = new usuarios ("drfrink", "admin"); */

