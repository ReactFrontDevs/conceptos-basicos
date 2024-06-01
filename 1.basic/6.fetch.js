/*                                                *
 * ----------------- Fetching data -------------- *
 *                                                */

//? Para poner en practica el poder que tiene trbajar con Promise
//? Hagamos uso del Fetch API solicitando datos a una servicio REST público

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

//?? Primer fetch a la API
// fetch(pokeApiUrl)
//   .then((response) => response.json())
//   .then(console.log);

//?? hagamosla fallar
// fetch(pokeApiUrl + '/error-endpoint')
//   .then((response) => response.json())
//   .then(console.log)
//   .catch((err) => console.error(err.message));

//?? Esta vez haciendo uso de async await
// const response = await fetch(pokeApiUrl);
// const data = await response.json();
// console.log(data);

//?? hagamosla fallar
// try {
//   const response = await fetch(pokeApiUrl + '/error-endpoint');
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error.message);
// }

// * Con esto hemos cubierto algunas de las maneras de usar las promises y la nueva sintaxis de async await
