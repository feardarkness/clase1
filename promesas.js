const rp = require('request-promise');

// pending

// resolved
// reject

rp({
  uri: 'https://api.chucknorris.io/jokes/categories',
  json: true
})
  .then(categorias => {
    // validacion    
    return rp({
      uri: 'https://api.chucknorris.io/jokes/random?category='+categorias[5],
      json: true
    });
  })
  .then(respuesta => {
    console.log('=====================================');
    console.log(respuesta.value);
    console.log('=====================================');
  })
  .catch(err => {
    console.log(err);
  });
