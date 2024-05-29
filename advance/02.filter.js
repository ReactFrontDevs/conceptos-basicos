/*                                             *
 * -----------------    Filter  -------------- *
 *                                             */

// Filter es un método para iterar una collección retornando una nueva colección con aquellos elementos que cumplan una condición.

/** collección de marca de autos */
const brands = [
  'Toyota',
  'Chevrolet',
  'Honda',
  'Nissan',
  'Mercedes Benz',
  'Volkswagen',
  'Hyundai',
  'Mazda',
  'Subaru',
  'Porsche',
  'Jaguar',
  'Ferrari',
  'Lamborghini',
  'Tesla',
  'Volvo',
  'Land Rover',
];

console.log(
  `Cantidad de elementos de la colección original ➡️ ${brands.length}\n`
);

//?? --Obtener solo los elementos de la colección que tengan un " " en blanco
//? - Primeramente verifiquemos la existencia
// const condition = (element) => element.includes(' ');

// const brandsWithBlanckspaceExists = brands.some((ele) => condition(ele));

// console.log('Existencia en la colección: ', brandsWithBlanckspaceExists);

// const elementsWithBlanckspace = brands.filter((ele) => condition(ele));

// console.log('Elemetos registrados: ', elementsWithBlanckspace);

// ?? --Responder si todos los elementos de la colección cumplen una condición

// const isGreaterThan = (element, evalLength) => element.length > evalLength;

// const evaluate = 4;
// const elementsGreaterThanFour = brands.every((ele) =>
//   isGreaterThan(ele, evaluate)
// );

// console.log(
//   `Los elementos ${
//     elementsGreaterThanFour ? '' : 'no'
//   } tienen un largo mayor a ${evaluate}`
// );

//?? --Obtengamos el priner elemento que contenga "ss" en su estructura
// const elementWith_ss = brands.find((ele) =>
//   ele.toLocaleLowerCase().includes('ss')
// );
// console.log(`Elemento encontrado ${elementWith_ss}`);

//!! Este método retorna el primer elemento que cumple con la condición
