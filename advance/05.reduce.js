/*                                             *
 * --------------- reduce -------------------- *
 *                                             */
/**
 * La función reduce en JavaScript se utiliza
 * para aplicar una función a un acumulador
 * y a cada elemento de un array (de izquierda a derecha)
 * para reducirlo a un solo valor.
 */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const total = numbers.reduce((acum, current) => acum + current, 0);

// console.log(total);

//?? -- Agrupemos los elementos de un array de objetos por una propiedad específica
// const people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Bob', age: 21 },
//   { name: 'Charlie', age: 22 },
//   { name: 'David', age: 23 },
// ];

// const groupedByAge = people.reduce((accumulator, person) => {
//   const age = person.age;
//   // Se computa la prop para crear una nueva key si no existe
//   if (!accumulator[age]) {
//     accumulator[age] = [];
//   }

//   // Luego se vuelve acceder a dicha prop agregando la persona al array value
//   accumulator[age].push(person);
//   return accumulator;
// }, {});

// console.log(groupedByAge);

//?? -- Conteo de colores
// const colors = ['red', 'blue', 'green', 'red', 'yellow', 'blue', 'red'];

// const colorCount = colors.reduce((accumulator, currentValue) => {
//   accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(colorCount);
