// calcular la suma de dos números

function suma(num1, num2) {
  return num1 + num2;
}

// primer caso
// console.log(1);
// console.log(suma(1, 1));
// console.log(3);


// segundo caso
// console.log(1);
// setTimeout(function() {
//   console.log(suma(1, 1));
// }, 0);
// console.log(3);

// tercer caso

const callback = function() {
  console.log(suma(1, 1));
};

console.log(1);
setTimeout(callback, 1000);
console.log(3);

const callback = function (resultados) {
  // hacer algo
  // listar en la pantalla
}

