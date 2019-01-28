const fs = require('fs');

console.log('================== iniciando');

const resultado = fs.readFileSync('./LICENSE', 'utf8'); // síncrono
console.log(resultado);

console.log('=============== finalizando');