/*                                        *
 * ----------------- Array -------------- *
 *                                        */

//? Los array nos permiten tener elementos indexados
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

//? Cumplen con los principios de las colleciones indexadas de otros lenguajes como python, java, etc

fruits.push('Pears');
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits[2]);
console.log(fruits.at(-1));

//? Creación de un nuevo array a partir de un array

const draftFruits2 = fruits;
console.log(draftFruits2 === fruits);

//! de esta manera hemos logrado romper la referencia al objeto mediante el operador spread
const draftFruits = [...fruits];

console.log(fruits);
console.log(draftFruits);

console.log(draftFruits === fruits);

//? Tambien podemos utilizar la desestructuración
const [firstFruit, _unused, ...restFruits] = fruits;

console.log('1º fruit: ', firstFruit);
console.log('Unused: ', _unused);
console.log('Rest: ', restFruits);

// ? Apliquemos un ternario
const count = 3;
fruits.length > count
  ? console.log(`Hay más de ${count} frutas en el array!`)
  : console.log(`No hay más de ${count} frutas en el array...`);
