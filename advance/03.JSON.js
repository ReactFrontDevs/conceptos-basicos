/*                                             *
 * ----- JSON.stringify vs JSON.parse -------- *
 *                                             */

import data from './data.json' assert { type: 'json' };

//?? --Al importarlo ya lo convierte a un Objeto JS
// console.log(data);

/**
 * Objeto JSON (JavaScript Object Notation)
 *  1- Formato de Texto: JSON es un formato de texto para intercambiar datos.
 *      Los datos están en formato de texto (string) y se pueden transmitir
 *      a través de la red de manera fácil y eficiente.
 *  2- Sintaxis Estricta: JSON tiene una sintaxis estricta.
 *      Las claves deben estar entre comillas dobles, y los valores pueden ser:
 *          -> números, cadenas (entre comillas dobles),
 *          -> booleanos, nulos, arreglos o otros objetos JSON.
 *  3- Uso Común: Se utiliza principalmente para la comunicación
 *      entre un servidor y una aplicación web,
 *      permitiendo la transmisión de datos de manera legible por humanos.
 */

//?? --Convertimos el objeto a un Objeto JSON
const jsonData = JSON.stringify(data);

// console.log('\n\n------------- Objeto JSON ----------------\n\n');
// console.log(jsonData);
// console.log('\n\n------------- Objeto JSON ----------------\n\n');

/**
 * Objeto JavaScript
 *  1- Formato de Objeto: Un objeto JavaScript es una estructura de datos
 *      que existe en la memoria de una aplicación JavaScript
 *      y puede contener pares de clave-valor, funciones, y otros objetos.
 *  2- Sintaxis Flexible: La sintaxis para definir un objeto JavaScript
 *      es más flexible que la de JSON. Las claves pueden no estar entre comillas,
 *      y los valores pueden ser cualquier tipo de dato, incluidas funciones.
 *  3- Uso Común: Se utiliza dentro del contexto de un programa JavaScript
 *      para organizar y gestionar datos de forma estructurada.
 */

// ?? --Parseemos el JSON
// console.log('\n\n------------- Objeto JS ----------------\n\n');
// console.log(JSON.parse(jsonData));
// console.log('\n\n------------- Objeto JS ----------------\n\n');
