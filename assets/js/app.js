//Declaración de constantes
const baseEndpoint = 'https://api.github.com'; //Link de la API de github
const usersEndpoint = `${baseEndpoint}/users`;

//DOM
const $n = document.querySelector('.name'); //Falta de . para seleccionar las clases
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {   //Error presente, faltaba el async al inicio de la función por lo que el await no podía ser usado.
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);

  if (response.ok) { //Checar si recibimos una respuesta
    const data = await response.json(); //La respuesta se convierte a un JSON
    console.log(data);

    //No se usaban ` backticks si no ' comillas simples
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } else {
    throw new Error("Error 404!, Servidor no encontrado");
  }
}

//Función que permite mostrar un mensaje de error cuando este se presente, el parametro err nos mostrará que tipo de error es el que se nos ha presentado.
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('alexllanes1').catch(handleError);