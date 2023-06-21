//Declaración de constantes
const baseEndpoint = 'https://api.github.com'; //Link de la API de github
const usersEndpoint = `${baseEndpoint}/users`;

//DOM
const $n = document.querySelector('.name'); //Falta de . para seleccionar la clase name
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); 
  //Error presente, faltaba el async al inicio de la función por lo que el await no podía ser usado.
  console.log(data);

  //No se usaban ` si no '
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

//Función que permite mostrar un mensaje de error cuando este se presente, el parametro err nos mostrará que tipo de error es el que se nos ha presentado.
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);