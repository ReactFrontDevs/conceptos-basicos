/*                                             *
 * -----------------    Map     -------------- *
 *                                             */

// Map es un método para iterar una collección y retornar una nueva

/** collección de marca de autos */
const brands = [
  'Toyota',
  'Ford',
  'Chevrolet',
  'Honda',
  'Nissan',
  'BMW',
  'Mercedes Benz',
  'Volkswagen',
  'Audi',
  'Hyundai',
  'Kia',
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

//?? --Podemos replicar la colección demostrando que retorna una nueva--
// const draftCollect = brands.map((brand) => brand);
// console.log('Elementos de la collección duplicada: ', draftCollect.length);

// draftCollect.pop(); // quitamos un elemento
// console.log('Elementos de la colleción original: ', brands.length);
// console.log('Elementos de la colleción duplicada: ', draftCollect.length);

//?? --Transformar las marcas en objetos indicando si contienen un espacio en blanco -> uso de "includes()"
// const brandsWithSpaceInfo = brands.map((brand) => ({
//   brand: brand,
//   hasSpace: brand.includes(' '),
// }));

// console.log('Marcas de auto con un espacio en blanco: ', brandsWithSpaceInfo);

//?? Transformar las marcas a un formato específico si contienen un espacio en blanco -> uso de "ternario" y "toUpperCase()"
// const transformedBrands = brands.map((brand) =>
//   brand.includes(' ')
//     ? `Encontrada: ${brand.toUpperCase()} ( contiene espacio 🐝 )`
//     : `${brand}`
// );

// console.log('Marcas de auto con un espacio en blanco: ', transformedBrands);
