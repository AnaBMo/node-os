/* **************************************************************************************************************** 
MÓDULO 3: ARCHIVO PRINCIPAL `systemInfo.js` 
Ejecución del programa

- "importar" o "requerir" `osModule.js` y `networkModule.js`.

- ejecutar: `node systemInfo.js`

Desde node podemos abrir una nueva terminal en el sitio donde trabajamos:
Menú Terminal -> Nuevo Terminal -> Ejecutamos `node systemInfo.js` y vemos el resultado. Recuerda los `console.log()`

# Pistas:
- Completa el archivo `systemInfo.js` para imprimir la información. Puedes utilizar un bucle for...in, forEach, ... 
    También Object.entries para recorrer los objetos e imprimir la información.
- Documentación `node:os` https://nodejs.org/api/os.html
    Algunos métodos os: version(), platform(), cpus(), totalmem(), networkInterfaces, freemem(), type(), arch()
******************************************************************************************************************* */

// importar los módulos del sistema operativo y de network
const { obtenerDatosOs } = require('./osModule');
const { obtenerDatosNet } = require('./networkModule');

// mostrar los datos obtenidos en osModule.js y en networkModule.js
console.log(obtenerDatosOs());
console.log(obtenerDatosNet());






