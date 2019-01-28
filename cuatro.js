const fs = require('fs');

const callback = function (err, resultado) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(resultado);
};

console.log('================== iniciando');

fs.readFile('./LICENSE', 'utf8', callback); // asíncrono

console.log('=============== finalizando');

// TODO 4 ejercicios (leas el contenido de la carpeta prueba y luego imprimas el contenido de todos los archivos que esten dentro de la carpeta)

// uno todo síncrono (primero) // SI o SI
// uno todo asíncrono (primero)  // si no lo acabas mañana lo hacemos