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



///////////////////SALUDO INICIAL///////////////////////////////////
function saludar() {
  const saludoBienvenida = document.querySelector("#saludo");
  const saludoInicial = localStorage.getItem("usuario-ingresado");
  const saludoEnLS = JSON.parse(saludoInicial);

  let saludo = document.createElement("h2");
  saludo.classList.add("saludoBienvenida");
  saludo.innerText = "¡Bienvenido/a " + saludoEnLS["usuario"] + "!";
  saludoBienvenida.append(saludo);
}
saludar();
crearnuevoform ();


//////////////////FORMULARIO DE INGRESO DE PACIENTES ///////////////////////////
function crearnuevoform (){
let formTratamiento = document.querySelector("#formulario2");
formTratamiento.addEventListener("submit", (event) => {
  event.preventDefault();
  const valorT = document.querySelector("#inputTratamiento");
  let valorT1 = valorT.value;

  validarInputForm2(valorT1);
});

function validarInputForm2(valorT1) {

  if (valorT1.length < 5 || valorT1.length > 8) {
    alert("El valor debe tener entre 5 y 8 números. Intente nuevamente.");
    return;
  }

  if (!/^\d+$/.test(valorT1)) {
    alert("El valor solo debe contener números del 0 al 9.");
    return;
  }
  localStorage.setItem("Paciente", valorT1);
  let formTratamiento = document.querySelector("#formulario2");
  formTratamiento.remove();
  crearMenu();
}
}


///////////////////////// Menu///////////////////////////////////
function crearMenu() {
  let menu = document.createElement("menu");

  menu.classList.add("mU");
  menu.id = 'menu'
  menu.innerHTML = `<li><button id="clozapina">Iniciar protocolo de Clozapina</button></li>`;
  menu.innerHTML += `<li><button id="tto">Iniciar tratamiento</button></li>`;
  menu.innerHTML += `<li><button id="analítica">Solicitar analítica </button></li>`;
  menu.innerHTML += `<li><button id="stock">Medicamentos en stock</button></li>`;
  const menuUs = document.querySelector("#menuUs");
  menuUs.append(menu);
  let iniciarProtocolo = document.querySelector('#clozapina');
  iniciarProtocolo.addEventListener("click", crearFormularioClozapina);

};

/////////////////PROTOCOLO DE CLOZAPINA////////////////////////////////


function crearFormularioClozapina() {

  const form = document.createElement('form');
  form.id = 'protocoloCloza';
  form.classList.add('formulario1');

  form.innerHTML = `<label for="inputCloza">Ingesar valores de Neutrófilos</label>`
  form.innerHTML += `<label for="inputFechaCloza">Ingesar fecha del estudio</label>`

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'inputCloza';
  input.classList.add('inputCloza');
  input.required = true;
  form.append(input);

  const input2 = document.createElement('input')
  input2.id = 'inputFechaCloza';
  input2.type = 'date';
  input2.classList.add('inputFechaCloza');
  form.append(input2);

  const button = document.createElement('button');
  button.type = 'submit';
  button.id = 'btnProtocolo';
  button.classList.add('btnProtocolo');
  button.innerText = 'Cargar'
  form.append(button);

  const menuCloza = document.querySelector('#menuCloza');
  menuCloza.append(form);

///////////////////PROTROCOLO//////////////////////


  const formCloza = document.querySelector('#protocoloCloza');
  formCloza.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputCloza = document.querySelector("#inputCloza");
    const valorCloza = inputCloza.value;
    const inputFechaCloza = document.querySelector("#inputFechaCloza");
    const valorFechaCloza = inputFechaCloza.value;
    localStorage.setItem('valoresNeutropeniaFecha', valorFechaCloza); 
    localStorage.setItem ('valoresNeutropenia', valorCloza );
    validarInputCloza(valorCloza);
  });

  function validarInputCloza(valorCloza) {
    if (valorCloza <= 1500) {
      Swal.fire({
        icon: "error",
        title: "Indicadores de Neutropenia.",
        text: "Reevaluar titulación.",
      });
      return;
    };
    if (!/^\d+$/.test(valorCloza)) {
      alert("El valor solo debe contener números del 0 al 9.");
      return;
    };
    
  };
};












//////////////////////FORMULARIO CLOZAPIONA//////////////////////////////////////


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


/*function nuevoTratamiento() {
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
} */


