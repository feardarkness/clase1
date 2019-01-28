// calcular la suma de dos números

function suma(num1, num2) {
  return num1 + num2;
}

// TODO resta, multiplicacion y división

// corre una función cada cierto tiempo (una y otra vez)
setInterval(function() {
  console.log(suma(34, 465));
}, 1000);

// espera cierta cantidad de tiempo (milisegundos) pero solo una vez
setTimeout(function() {
  console.log(suma(1, 1));
}, 1000);