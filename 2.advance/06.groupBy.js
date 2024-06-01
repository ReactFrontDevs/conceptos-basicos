/*                                             *
 * --------------- reduce -------------------- *
 *                                             */

//!  válido para la version 21 de Node JS

//?? --Agrupar elementos en base a una prop __Object.groupBy__
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result); // Object -> groups by type element

//?? --Agrupar elementos en base a una condición __Object.groupBy__
// const result2 = Object.groupBy(inventory, ({ quantity }) =>
//   quantity > 5 ? 'ok' : 'restock'
// );

// console.log(result2); // Object -> restock[] - ok[]

//?? -- Agrupar elementos en base a una condición  __Map.groupBy__
// const result3 = Map.groupBy(inventory, ({ quantity }) =>
//   quantity > 5 ? 'ok' : 'restock'
// );

// console.log(result3); // Map -> restock[] - ok[]
