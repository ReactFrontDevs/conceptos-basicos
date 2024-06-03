/**
 * Ejercicio de rutas
 *
 * - En el siguiente código se muestra un objeto que contiene rutas
 * - Se debe generar una fn que permita devolver:
 *      - El path general
 *      - El path relativo y absoluto de cada ruta anidada
 */

// import { addRelativeAndAbsolutePath } from './processRoutes.js';

const baseRoutes = [
  {
    Root: {
      path: '/',
      children: [{ About: 'about' }, { Contact: 'contact' }],
    },
  },
  {
    Auth: {
      path: 'auth/',
      children: [{ Profile: 'profile' }, { Dashboard: 'dashboard' }],
    },
  },
];

// * Crear una función que retorne la siguiente estructura
// {
//   Root: {
//     path: '/',
//     About: { relative: 'about', absolute: '/about' },
//     Contact: { relative: 'contact', absolute: '/contact' },
//   },
//   Auth: {
//     path: 'auth/',
//     Profile: { relative: 'profile', absolute: 'auth/profile' },
//     Dashboard: { relative: 'dashboard', absolute: 'auth/dashboard' },
//   },
// };

const convertRoutes = (baseRoutesparams) => {
  // TODO: generar la lógica
  // return customRoutes;
};

const ROUTES = convertRoutes(baseRoutes);
console.log(ROUTES);
