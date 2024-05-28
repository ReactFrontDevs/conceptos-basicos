/*                                                *
 * ----------------- Promise       -------------- *
 *                                                */

//? Promise
//? Las promesas representan un acuerdo de respuesta en un tiempo asincrono
//? Es decir esta deberá resolverse y devolver una respuesta
//? Es comunmente utilizada para recuperar datos de una api o base de datos
//? De esta manera evitamos bloquear el hilo de ejecución y dicho bloque terminará
//? su ejecución una vez la promesa haya concluido.
//? Veamos un ejemplo

const sleepTime = (time) =>
  new Promise((resolve, _reject) => setTimeout(resolve, time * 1000));

//?? Primer ejemplo
// console.log('Comienzo de la ejecución.');

// await sleepTime(3);

// console.log('Fin de la ejecución...');

//?? Este seria un uso mas cotidiano
// const fetchData = async () => {
//   await sleepTime(4);
//   return new Promise((resolve, _reject) => {
//     const data = {
//       status: 'success',
//       code: 200,
//       results: ['ABC', 'BAD', 'GHT'],
//     };
//     resolve(data);
//   });
// };

// const response = await fetchData();
// console.log(response);

//?? Encadenamiento de promesas
// const fetchData = () => {
//   return new Promise((resolve, _reject) => {
//     const data = {
//       status: 'success',
//       code: 200,
//       results: ['ABC', 'BAD', 'GHT'],
//     };
//     resolve(data);
//   });
// };

// sleepTime(6).then(fetchData).then(console.log);

//?? Haciendo uso de reject
// const fetchData = async () => {
//   await sleepTime(1);
//   return new Promise((resolve, reject) => {
//     reject(1 / 0);

//     const data = {
//       status: 'success',
//       code: 200,
//       results: ['ABC', 'BAD', 'GHT'],
//     };
//     resolve(data);
//   });
// };

// fetchData().then(console.log).catch(console.error);

//?? Generando un error a fuerza
// const fetchData = async () => {
//   await sleepTime(1);
//   return new Promise((resolve, reject) => {
//     reject(new Error('Invalid request!'));

//     const data = {
//       status: 'success',
//       code: 200,
//       results: ['ABC', 'BAD', 'GHT'],
//     };
//     resolve(data);
//   });
// };

// fetchData()
//   .then(console.log)
//   .catch((err) => console.error(err.message));
