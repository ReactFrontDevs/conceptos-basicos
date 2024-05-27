/*                                                  *
 * ----------------- Literal Objects -------------- *
 *                                                  */
import crypto from 'crypto';

const session = {
  status: 'authorized',
  token: crypto.randomUUID(),
  user: {
    name: 'Juan',
    location: 'San Maarin de los Andes',
    last_connect: new Date().toLocaleDateString(),
  },
};

console.log(session);

const response = {
  count: 297,
  next: 2,
  prev: null,
  more: true,
  data: {
    characters: [
      {
        name: 'Harry Potter',
      },
      {
        name: 'Hermione Granger',
      },
      {
        name: 'Ron Weasley',
      },
    ],
    api_rest: 'HP-API!',
  },
};

console.log(response);

//? Para lograr ver los personajes podemos recorrer el array de characters
for (const character of response.data.characters) {
  console.log(`Nombre del personaje ${character.name}`);
}

const { data, ...rest } = response;

console.log('Data destructurada <spred operator>: ', data);
console.log('Data destructura: <rest operator>', rest);

//? Apliquemos un ternario

response.more
  ? console.log('Aun quedan registros por recuperar...')
  : console.log('Fin de la data.');

//! cambiemos la prop more y actualicemos el script para ver su log
