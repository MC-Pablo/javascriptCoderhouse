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



const formProtocolo = document.querySelector("#formulario1");
const formTratamiento = document.querySelector("#formulario2");
const valoresProtocolo = document.querySelector ("#input-protocolo");
const valoresTratamiento = document.querySelector ("#input-tratamiento");
const cargarValoresProtocolo = document.querySelector ("#btnProtocolo");
const cargarValoresTratamiento = document.querySelector ("#btnTratamiento");


formProtocolo = addEventListener ("submit", (event) =>{
    
} )




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


