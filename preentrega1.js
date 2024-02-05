// Protrocolo para la administracion de una medicacion llamada Clozapina. Por sus caractertisticas y efectos secundarios debe seguir ciertas indicaciones.

// 1) Ingreso al sistema a traves de un usuario y contraseña. Si se repite mas de 3 veces un error el usuario será bloqueado y deberá dirigirse a administracion para su desbloqueo.

// 2) Resultados de analisis clinicos del paciente. Aqui ciertos valores deberan estar dentro de lo esperable para poder administrar la droga. Si algun valor no cumplira dicho requisito, deberá avisarle al médico para que evalue como proceder. Parametros a considerar:

// globulos blancos >= 1500


//3) Si todos los valores anteriores estan dentro de lo esperable, SI podra aceptarse la aplicacion la medicacion, de lo contrario NO se podrá.


////////////////////////// ARRAYS /////////////////////////////////

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
  {
    usuario: "drhouse",
    contraseña: "admin",
  }
];

function personal(nombre, profesion, especialidad) {
  this.nombre = nombre;
  this.profesion = profesion;
  this.especialidad = especialidad;

};

const profesional1 = new personal("drmengele", "médico", "psiquiatra");
const profesional2 = new personal("drriviera", "médico", "psiquiatra");
const profesional3 = new personal("drfrink", "médico", "psiquiatra");
const profesional4 = new personal("drhouse", "médico", "clinico");

const benzo = [
  {
    monodroga: 'alprazolam',
    dosis: [0.5, 1],

  },
  {
    nombre: 'clonazepam',
    dosis: [0.5, 1, 2],

  },
  {
    nombre: 'lorazepam',
    dosis: [1, 2, 5],

  },
  {
    nombre: 'diazepam',
    dosis: [5, 10],

  },
];

const antipsicoticos = [
  {
    nombre: 'haloperidol',
    dosis: [5, 10]
  },
  {
    nombre: 'risperidona',
    dosis: [1, 2],
  },
  {
    nombre: 'olanzapina',
    dosis: [5, 10],

  },
  {
    nombre: 'quetiapina',
    dosis: [25, 100, 200]
  },
  {
    nombre: 'clozapina',
    dosis: [25, 100]
  }
];

const antidepresivos = [
  {
    nombre: 'sertralina',
    dosis: [50, 100],
  },

  {
    nombre: 'fluoexetina',
    dosis: [50, 100],

  },

  {
    nombre: 'paroxetina',
    dosis: [50, 100],

  }
];

//////////////////////// INICIO DE SESION//////////////////////////


const form = document.querySelector("#formulario");
const iniciaUsuario = document.querySelector("#user");
const iniciaPass = document.querySelector("#password");
const iniciarSesion = document.querySelector("btnLogin");

let puedeContinuar = true;
let intentosFallidos = 0;


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuarioValido = document.querySelector("#user").value;
    const contraseniaValida = document.querySelector("#password").value;
    const usuarioEncontrado = baseDatos.find((ingreso) => ingreso.usuario === usuarioValido);
    const contraseñaEncontrada = baseDatos.find((ingreso) => ingreso.contraseña === contraseniaValida);


    while (intentosFallidos < 3) {
        
        if (usuarioEncontrado && contraseñaEncontrada) {
            puedeContinuar = true;
            break;
        } else {
            puedeContinuar = false;
            intentosFallidos++;
            alert("Usuario o contraseña incorrecta");
            return;
        }
    }

    if (puedeContinuar && intentosFallidos < 3) {
        alert("¡Bienvenido!");
        window.open ("./html/historiaClinica.html");
    } else {
        alert("Usuario bloqueado.Dirigirse a Administracion");
    }

});





///////////////////////TRATAMIENTO//////////////////////////////////////

/* function constatarParametros() {
  let globulosBlancos = parseInt(prompt("Neutrófilos:"));
  let mensaje;

  if (globulosBlancos >= 1500) {
    mensaje = "Puede continuar con la titulacion de Clozapina";
  } else {
    mensaje = "¡Alerta!❌ Indicadores de Neutropenia. Evaluar titulacion";
  }

  alert(mensaje);
}


function continuarTratamiento() {
  const indicacion = confirm("¿Desea realizar otra indicacion medica?");
  if (indicacion) {
    nuevoTratamiento();
  } else {
    return;
  }
}

continuarTratamiento()

function nuevoTratamiento () {
  let nuevaIndicacion = prompt ('Medicacion indicada');
  let mensaje;
  const medicamentos1 = benzo.find  ((medicacion) => medicacion.nombre === nuevaIndicacion);
  const medicamentos2 = antipsicoticos.find  ((medicacion) => medicacion.nombre === nuevaIndicacion);
  
  if (medicamentos1 || medicamentos2) { 
  mensaje = 'Indicacion agregada al esquema farmacologico';
  } else{
    mensaje = 'Medicamento fuera de stock. Derivar a Centro de salud';
  }
  alert (mensaje)
  return mensaje;

}


*/






