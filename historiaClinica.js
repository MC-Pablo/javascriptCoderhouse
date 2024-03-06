const benzodiazepinas = [
  {
    id: 'bz01',
    nombre: 'Alprazolam',
    dosis: [0.5, 1],
    stock: 'si'

  },
  {
    id: 'bz02',
    nombre: 'Clonazepam',
    dosis: [0.5, 1, 2],
    stock: 'si',

  },
  {
    id: 'bz03',
    nombre: 'Lorazepam',
    dosis: [1, 2, 5],
    stock: 'si',

  },
  {
    id: 'bz04',
    nombre: 'Diazepam',
    dosis: [5, 10],
    stock: 'si',
  },
];

const antipsicoticos = [
  {
    id: 'ap01',
    nombre: 'Haloperidol',
    dosis: [5, 10],
    stock: 'si',
  },
  {
    id: 'ap02',
    nombre: 'Risperidona',
    dosis: [1, 2],
    stock: 'si',
  },
  {
    id: 'ap03',
    nombre: 'Olanzapina',
    dosis: [5, 10],
    stock: 'si',

  },
  {
    id: 'ap04',
    nombre: 'Quetiapina',
    dosis: [25, 100, 200],
    stock: 'no',
  },
  {
    id: 'ap05',
    nombre: 'Clozapina',
    dosis: [25, 100],
    stock: 'si',
  },

  {
    id: 'ap06',
    nombre: 'Aripiprazol',
    dosis: 10,
    stock: 'no'

  }
];

const antidepresivos = [
  {
    id: 'ad01',
    nombre: 'Sertralina',
    dosis: [50, 100],
    stock: 'si',
  },

  {
    id: 'ad02',
    nombre: 'Fluoexetina',
    dosis: [50, 100],
    stock: 'si',

  },

  {
    id: 'ad03',
    nombre: 'Paroxetina',
    dosis: [50, 100],
    stock: 'si',

  }
];


const medicacionEnStock = [

  {
    id: "bz01",
    nombre: "alprazolam",
    dosis: [0.5, 1],
    stock: "si"
  },
  {
    id: "bz02",
    nombre: "clonazepam",
    dosis: [0.5, 1, 2],
    stock: "si"
  },
  {
    id: "bz03",
    nombre: "lorazepam",
    dosis: [1, 2, 5],
    stock: "si"
  },
  {
    id: "bz04",
    nombre: "diazepam",
    dosis: [5, 10],
    stock: "si"
  },
  {
    id: "ap01",
    nombre: "haloperidol",
    dosis: [5, 10],
    stock: "si"
  },
  {
    id: "ap02",
    nombre: "risperidona",
    dosis: [1, 2],
    stock: "si"
  },
  {
    id: "ap03",
    nombre: "olanzapina",
    dosis: [5, 10],
    stock: "si"
  },
  {
    id: "ap04",
    nombre: "quetiapina",
    dosis: [25, 100, 200],
    stock: "no"
  },
  {
    id: "ap05",
    nombre: "clozapina",
    dosis: [25, 100],
    stock: "si"
  },
  {
    id: "ap06",
    nombre: "aripiprazol",
    dosis: 10,
    stock: "no"
  },
  {
    id: "ad01",
    nombre: "sertralina",
    dosis: [50, 100],
    stock: "si"
  },
  {
    id: "ad02",
    nombre: "fluoxetina",
    dosis: [50, 100],
    stock: "si"
  },
  {
    id: "ad03",
    nombre: "paroxetina",
    dosis: [50, 100],
    stock: "si"
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
crearnuevoform();


//////////////////FORMULARIO DE INGRESO DE PACIENTES ///////////////////////////
function crearnuevoform() {
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


/////////////////////////MENU////////////////////////////
function crearMenu() {
  let menu = document.createElement("menu");

  menu.classList.add("mU");
  menu.id = 'menu'
  menu.innerHTML = `<li><button id="clozapina">Iniciar protocolo de Clozapina</button></li>`;
  menu.innerHTML += `<li><button id="tto">Iniciar tratamiento</button></li>`;
  menu.innerHTML += `<li><button id="stock">Medicamentos en stock</button></li>`;
  menu.innerHTML += `<li><button id="atras"> Volver atrás </button></li>`;
  const menuUs = document.querySelector("#menuUs");
  menuUs.append(menu);

  /////////////////////EVENTOS DEL MENU///////////////////////
  let iniciarProtocolo = document.querySelector('#clozapina');
  iniciarProtocolo.addEventListener("click", crearFormularioClozapina);

  let IniciarTratamiento = document.querySelector("#tto");
  IniciarTratamiento.addEventListener("click", iniciarTto);


  let stockMedicamentos = document.querySelector("#stock");
  stockMedicamentos.addEventListener("click", checkStock);

  let volverAtrás = document.querySelector("#atras");
  volverAtrás.addEventListener("click", atrás);

};


/////////////////PROTOCOLO DE CLOZAPINA///////////////////////


function crearFormularioClozapina() {
  let iniciarProtocolo = document.querySelector('#clozapina');
  iniciarProtocolo.removeEventListener("click", crearFormularioClozapina);
  const form = document.createElement('form');
  form.id = 'protocoloCloza';
  form.classList.add('formulario1');

  form.innerHTML = `<label for="inputCloza">Ingesar valores de Neutrófilos</label>`
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'inputCloza';
  input.classList.add('inputCloza');
  input.required = true;
  form.append(input);

  form.innerHTML += `<label for="inputFechaCloza">Ingesar fecha del estudio</label>`
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


  ///////////////////VALIDACION DE PROTROCOLO/////////////////////////


  const formCloza = document.querySelector('#protocoloCloza');
  formCloza.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputCloza = document.querySelector("#inputCloza");
    const valorCloza = inputCloza.value;
    const inputFechaCloza = document.querySelector("#inputFechaCloza");
    const valorFechaCloza = inputFechaCloza.value;
    localStorage.setItem('valoresNeutropeniaFecha', valorFechaCloza);
    localStorage.setItem('valoresNeutropenia', valorCloza);
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



function checkStock() {
  const menuCloza = document.querySelector('#menuCloza');
  menuCloza.innerHTML = "";

  const titulo1 = document.createElement('h2');
  titulo1.textContent = "Benzodiazepinas";
  container.append(titulo1);

  benzodiazepinas.forEach(benzo => {
    const div = document.createElement('div');
    div.classList.add('listaBenzodiazepinas');

    div.innerHTML = `<div class="benzo">
  <h3 class="benzo-nombre">${benzo.nombre}</h3>
  <p class="benzo-dosis"> mg.${benzo.dosis}</p>
  <p class="benzo-stock">En stock: ${benzo.stock}</p>
</div>`;

    const container = document.querySelector("#container");
    container.append(div);

  });
  const titulo2 = document.createElement('h2');
  titulo2.textContent = "Antispicóticos";
  container.append(titulo2);
  antipsicoticos.forEach(antipsi => {
    const div = document.createElement('div');
    div.classList.add('listaAntipsicoticos');
    div.innerHTML += `<div class="antipsicoticos">
  <h3 class="psi-nombre">${antipsi.nombre}</h3>
  <p class="psi-dosis"> mg.${antipsi.dosis}</p>
  <p class="psi-stock">En stock: ${antipsi.stock}</p>
</div>`;

    const container = document.querySelector("#container");
    container.append(div);

  });

  const titulo3 = document.createElement('h2');
  titulo3.textContent = "Antidepresivos";
  container.append(titulo3);
  antidepresivos.forEach(antidep => {
    const div = document.createElement('div');
    div.classList.add('listaAntidepresivos');
    div.innerHTML += `<div class="antidepresivos">
  <h3 class="antiDep-nombre">${antidep.nombre}</h3>
  <p class="antiDep-dosis"> mg.${antidep.dosis}</p>
  <p class="antiDep-stock">En stock: ${antidep.stock}</p>
</div>`;

    const container = document.querySelector("#container");
    container.append(div);

    let iniciarProtocolo = document.querySelector('#clozapina');
    iniciarProtocolo.addEventListener("click", crearFormularioClozapina);


  });



}

function atrás() {

  window.history.go();
}

function iniciarTto() {

  const pacienteEnLS = localStorage.getItem("Paciente");

  const iniciarTto = document.createElement("div");
  iniciarTto.classList.add ("iniciarTto");
  iniciarTto.innerHTML = `<h2> Paciente: ${pacienteEnLS}</h2>
  <button type="submit" class="btnTto" id="btnHC"> Ver historia clínica </button>
  <button type="submit" class="btnTto" id="BtnNuevoTto"> Iniciar esquema </button>

  `
  const container = document.querySelector("#container");
  container.append(iniciarTto);

  let hc = document.querySelector("#btnHC");
  hc.addEventListener("click", verHistoriaClinica);

  let nuevoTto = document.querySelector("#BtnNuevoTto");
  nuevoTto.addEventListener("click", iniciarNuevoTto);
}

function iniciarNuevoTto() {

  const buscarMedicamento = document.createElement("div");
  buscarMedicamento.classList.add ("buscarMed");
  buscarMedicamento.innerHTML =
    `
  <label for="buscarMed"> Agregar medicación </label>
  <input type="text" id="buscarMed" name="e" required>
  <button type="button" id="agregarMed"> Buscar </button>
  
  `
  const container = document.querySelector("#container");
  container.append(buscarMedicamento);

  const agregarMedicacion = document.querySelector("#agregarMed");
  agregarMedicacion.addEventListener("click", searchMedicamento);


}


function searchMedicamento() {
  const nombreMedicamento = document.querySelector("#buscarMed").value.toLowerCase();
  const medicamentoEncontrado = medicacionEnStock.find(medicamento => medicamento.nombre == nombreMedicamento && medicamento.stock === "si");
  

  if (medicamentoEncontrado) {
    console.log(`Dosis disponibles: ${medicamentoEncontrado.dosis.join(", ")}`);
    let mostrarDosis = document.createElement("div")
    mostrarDosis.innerHTML = 
    `
    <p> Medicamento: ${medicamentoEncontrado.nombre} </p>
    <p>Dosis disponibles (en mg.): ${medicamentoEncontrado.dosis.join(", ")}</p>    
    `
    const container = document.querySelector("#container");
    container.append(mostrarDosis);
    
  } else {
    alert('Medicamento no encontrado o fuera de stock');
  }
}









function verHistoriaClinica() {

}















/*
function iniciarNuevoTto() {
  const listaMedicamentos = document.createElement("div");
  listaMedicamentos.innerHTML = `<h2>Lista de Medicamentos</h2>
<h3>Benzodiazepinas</h3>
`;
  const container = document.querySelector("#container");
  container.append(listaMedicamentos);

  benzodiazepinas.forEach(benzo => {


    const div = document.createElement('div');
    div.classList.add('listaBenzodiazepinas');

    div.innerHTML = `<div>
<h3 class="benzo-nombre">${benzo.nombre}</h3>
<p class="benzo-dosis"> mg.${benzo.dosis[0]}</p>
<button class = "btnTto" id="${benzo.id}"> Agregar</button>
<p class="benzo-dosis"> mg.${benzo.dosis[1]}</p>
<button class = "btnTto" id="${benzo.id}"> Agregar</button>

`
    const container = document.querySelector("#container");
    container.append(div);

  });

 actualizarMedicacion ();


}

function actualizarMedicacion () {

}

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

const medicacionEnHC = [];
console.log(medicacionEnHC);

function esquemaMedicacion(e) {

const agregarBenzo = e.currentTarget.id;
const benzoAgregada = benzodiazepinas.find (benzo => benzo.id === agregarBenzo);

medicacionEnHC.push(benzoAgregada);


}
*/




























//////////////////////FORMULARIO CLOZAPIONA//////////////////////////////////////


///////////////////////// Menu///////////////////////////////////



/* 
function constatarParametros() {
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
}

*/
