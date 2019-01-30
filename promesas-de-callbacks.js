const request = require('request'); // n librerias que hacen lo mismo

// bluebird.promesify

const categoriasRequest = () => {
  return new Promise((resolve, reject) => {
    request('https://apiasdsadsa.chucknorris.io/jokes/categories', (error, response, body) => {
      if (error) {
        return reject(error);
      }
      const categorias = JSON.parse(body);
      resolve(categorias);
    });
  });
};


const bromaRequest = (categoria) => {
  return new Promise((resolve, reject) => {
    request('https://api.chucknorris.io/jokes/random?category='+categoria, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      const respuestaJson = JSON.parse(body);
      resolve(respuestaJson);
    });
  });
}

categoriasRequest()
  .then(categorias => {
    return bromaRequest(categorias[5]);
  })
  .then(respuesta => {
    console.log('=====================================');
    console.log(respuesta.value);
    console.log('=====================================');
  })
  .catch(err => {
    console.log('waaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(err);
  });

// callbacks
// buscar una api
// tres solicitudes anidadas



