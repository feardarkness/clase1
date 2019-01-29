const multiplicar = (param1) => {
  return (param2) => {
    return param1 * param2;
  };
};

const multiplicarPorDos = multiplicar(2);

const multiplicarPorTres = multiplicar(3);

const numeros = [1, 2, 3, 4];

const resultado = numeros.map(multiplicarPorDos);

numeros.map((valor) => {
  // no traen valores del exterios
});

// primero es ordenar descendentemente un vector (calificaciones) // sin foreach // sin for // => sort
const notas = [
  {
    nombre: 'Ariel',
    calificacion: 20,
  },
  {
    nombre: 'Mabel',
    calificacion: 30,
  },
  {
    nombre: 'Juan',
    calificacion: 25,
  }
];

// dado un array de n elementos // sin foreach // sin for // slice // splice // shift
// a) obtener los primeros tres
// b) obtener los ultimos tres
// c) obtener "n" elementos a partir de la posicion p


const vector3 = [1, 2, 3, 4, 5, 6];
// a) [1, 2, 3]
// b) [4, 5, 6]
// c) n=2, p=3 [3, 4, 5]


// dado un array, verificar si un elemento existe en el array // sin foreach // sin for // filter // reduce // indexOf // findIndex
const vector4 = [1, 2, 3];

// si elemnto = 2 => retornar true
// si elemnto = 5 => retornar false

// dado un array, obtener los elementos mayores a n // sin foreach ni for
const vector5 = [1, 2, 3, 4, 5, 6];
// si n = 2 => [3, 4, 5, 6]
// si n = 5 => [6]
