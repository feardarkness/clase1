const request = require('request'); // n librerias que hacen lo mismo

request('https://api.chucknorris.io/jokes/categories', (error, response, body) => {
  if (error) {
    return console.log(err);
  }
  
  const categorias = JSON.parse(body);
  request('https://api.chucknorris.io/jokes/random?category='+categorias[5], (error, response, body) => {
    if (error) {
      return console.log(err);
    }
    const respuestaJson = JSON.parse(body);
    console.log(respuestaJson.value);
  });
});

// callbacks
// buscar una api
// tres solicitudes anidadas