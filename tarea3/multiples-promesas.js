// callbacks
// buscar una api
// tres solicitudes anidadas
const request = require('request'); // n librerias que hacen lo mismo

const verTodosGits = () => {
  const options = {
    uri: 'https://api.github.com/gists', // 'https://api.github.com/users/mabel2k16/repos',
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      console.log('=====================================');
      console.log(body);
      console.log('=====================================');
      console.log(response.status);
      console.log('=====================================');
      if (error) {
        return reject(error);
      }
      const repositorios = JSON.parse(body);
      return resolve(repositorios);
    });
  });
};

const repositorioRequest = (loginBuscado) => {
  const options2 = {
    uri: `https://api.github.com/users/${loginBuscado}/repos`,
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return new Promise((resolve, reject) => {
    request(options2, (error2, response2, body2) => {
      if (error2) {
        return reject(error2);
      }
      if (response2.status !== 200) {
        return reject(new Error('API rate limit exceeded'));
      }
      const respuestaJson = JSON.parse(body2);
      return resolve(respuestaJson);
    });
  });
};

const branchRequest = (duenio, nomRepositorio) => {
  const options3 = {
    uri: `https://api.github.com/repos/${duenio}/${nomRepositorio}/branches`,
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return new Promise((resolve, reject) => {
    request(options3, (error3, response3, body3) => {
      if (error3) {
        return reject(error3);
      }
      const respuestaJson = JSON.parse(body3);
      return resolve(respuestaJson);
    });
  });
};
let loginDuenio;
let nomRepositorio;
verTodosGits()
  .then((gists) => {
    if (Array.isArray(gists) 
          && gists[7] !== undefined 
          && gists[7].owner !== undefined 
          && gists[7].owner.login !== undefined) {
      loginDuenio = gists[7].owner.login;
    } else {
      throw new Error('Algo fallooooooooooooooooooooooooooo');
    }
    return repositorioRequest(loginDuenio);
  })
  .then((repositorios) => {
    if (Object.keys(repositorios).length > 0) {
      const vectorDePromesas = [];
      repositorios.forEach(repositorio => {
        const branchRequestPromise = branchRequest(loginDuenio, repositorio.name);
        vectorDePromesas.push(branchRequestPromise); // hacen las llamadas
      });
      return Promise.all([p1r, p2r, p3r]);  // tengo un vector de llamadas asíncronas, cuando todas esten resueltas resolver la promesa
      // return Promise.race([p1, p2, p3]);  // tengo un vector de llamadas asíncronas, cuando todas esten resueltas resolver la 
    }
    // console.log('sin repositorio');
    throw new Error('sin repositorio');
    // return reject(new Error('sin repositorios'));
  })
  .then((arrayDeRespuestas) => {
    console.log('arrayDeRespuestas =====================================');
    console.log(JSON.stringify(arrayDeRespuestas, null, 4));
    console.log('=====================================');
    if (Object.keys(respuesta).length > 0) {
      // console.log(respuesta);
      // return resolve(respuesta);
    } else {
      // console.log('Repositorio: ', nomRepositorio, 'Sin branches');
      throw new Error('Repositorio: ', nomRepositorio, 'Sin branches');
    // return reject(new Error('Repositorio: ', nomRepositorio, 'Sin branches'));
    }
  })
  .catch((err) => {
    console.log('error', err);
    // reject(err)
  });




  // Promise.race([
  //   verTodosGits(), // x segundos
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       throw new Error('demasiado tiempo para la solicitud')
  //     }, 3000); // siempre cada 3 segundos
  //   })
  // ])


  // 1 escenario, verTodosGits() tarda 1 segundo, entonces en el then tenemos la respuesta de esta promesa

  // 2 escenario, verTodosGits() tarda 5 segundos, entonces lanzamos un error