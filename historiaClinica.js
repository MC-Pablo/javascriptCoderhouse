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




let formTratamiento = document.querySelector("#formulario2");
const valoresProtocolo = document.querySelector("#input-protocolo");
const valoresTratamiento = document.querySelector("#input-tratamiento");
const cargarValoresProtocolo = document.querySelector("#btnProtocolo");
const cargarValoresTratamiento = document.querySelector("#btnTratamiento");
const saludoBienvenida = document.querySelector("#saludo");
const menuUsuario = document.querySelector("#menuUs");



///////////////////SALUDO INICIAL///////////////////////////////////
const saludoInicial = localStorage.getItem("usuario-ingresado");
const saludoEnLS = JSON.parse(saludoInicial);

let saludo = document.createElement("h2");
saludo.classList.add("saludoBienvenida");
saludo.innerText = "¡Bienvenido/a " + saludoEnLS["usuario"] + "!";
saludoBienvenida.append(saludo);


//////////////////FORMULARIO DE INGRESO DE PACIENTES ///////////////////////////

formTratamiento = addEventListener("submit", (tratamiento) => {
  tratamiento.preventDefault();
  const valorT = document.querySelector("#input-tratamiento").value;

  if (valorT.length < 5 || valorT.length > 8) {
    alert("El valor debe tener entre 5 y 8 números. Intente nuevamente.");
    return;
  }

  if (!/^\d+$/.test(valorT)) {
    alert("El valor solo debe contener números del 0 al 9.");
    return;
  }
  localStorage.setItem("Paciente", valorT);
  let formTratamiento = document.querySelector("#formulario2");
  formTratamiento.remove()

  ///////////////////////// Menu///////////////////////////////////
  let menu = document.createElement("menu");
  menu.classList.add("mU");
  menu.id = 'menu'
  menu.innerHTML = `<li><button id="clozapina">Iniciar protocolo de Clozapina</button></li>`;
  menu.innerHTML += `<li><button id="tto">Iniciar tratamiento</button></li>`;
  menu.innerHTML += `<li><button id="anaítica">Solicitar analítica </button></li>`;
  menu.innerHTML += `<li><button id="stock">Medicamentos en stock</button></li>`;
  menuUs.append(menu);
  
  /////////////////PROTOCOLO DE CLOZAPINA//////////////////////////////////////////
  let iniciarProtocolo = document.querySelector('#clozapina');
  iniciarProtocolo.addEventListener('click', () => {

    
    const form = document.createElement('form');
    form.id = 'iniciarProtocoloCloza'; 
    form.classList.add('formulario1'); 

    
    const label = document.createElement('label');
    label.for = 'inputCloza';
    label.textContent = 'DNI o N° de Historia Clínica';
    form.append(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'inputCloza';
    input.id = 'input-tratamiento';
    input.classList.add('inputCloza')
    input.required = true; 
    form.append(input);

    
    const container = document.querySelector('#container'); 
    container.append(form);
    

  });

})

///////////////////////// Menu///////////////////////////////////



/* function constatarParametros() {
 let valorProtocolo = 
 
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
*/


function nuevoTratamiento() {
  let nuevaIndicacion = prompt('Medicacion indicada');
  let mensaje;
  const medicamentos1 = benzo.find((medicacion) => medicacion.nombre === nuevaIndicacion);
  const medicamentos2 = antipsicoticos.find((medicacion) => medicacion.nombre === nuevaIndicacion);

  if (medicamentos1 || medicamentos2) {
    mensaje = 'Indicacion agregada al esquema farmacologico';
  } else {
    mensaje = 'Medicamento fuera de stock. Derivar a Centro de salud';
  }
  alert(mensaje)
  return mensaje;
}


