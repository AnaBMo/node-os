/* ******************************************************************************************************* 
MÓDULO 1: IMPLEMENTACIÓN DE `osModule.js`

- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato da y qué cáculo debes hacer
******************************************************************************************************** */

// se importa el módulo os de Node.js del que sacaremos la información
const os = require('os'); 

// array para almacenar la info de OS
const infoOs = []; 

// insertar datos en el array:
function insertarDatosOs() {
    const datosOs = {
        Nombre: os.platform(),
        Tipo: os.type(),
        Version: os.release(),
        Arquitectura: os.arch(),
        CPUs: os.cpus().length,
        MemoriaTotal: `${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`, 
        MemoriaLibre: `${(os.freemem() / (1024 * 1024)).toFixed(2)} MB` 
    };

    infoOs.push(datosOs);
}
insertarDatosOs();

// obtener los datos almacenados en el array
function obtenerDatosOs() {
    return infoOs;
}

// exportar los módulos del sistema operativo
module.exports = { 
    insertarDatosOs,
    obtenerDatosOs
};
