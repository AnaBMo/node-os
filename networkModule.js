/* **************************************************************************************************************** 
MÓDULO 2: IMPLEMENTACIÓN DE `networkModule.js`

- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.
******************************************************************************************************************* */

// se importa el módulo os de Node.js del que sacaremos la información
const os = require('os'); 

// array para almacenar la info de Net
const infoNet = []; 

// insertar datos en el array:
function insertarDatosNet() {
  const interfaces = os.networkInterfaces(); // se obtienen las interfaces de red

  // se recorre cada interfaz a través de su dirección
  for (const nombreInterfaz in interfaces) {
    interfaces[nombreInterfaz].forEach((i) => {
      const datosNet = {
        Interfaz: nombreInterfaz, 
        Familia: i.family, 
        Direccion: i.address, 
        Interno: i.internal
      };

      infoNet.push(datosNet);
    });
  }
}
insertarDatosNet();

// obtener los datos almacenados en el array
function obtenerDatosNet() {
  return infoNet;
}

// exportar los módulos del sistema operativo
module.exports = { 
  insertarDatosNet,
  obtenerDatosNet
};
