/*                                                           *
 * ----------------- CommonsJS vs Modules ESM -------------- * 
 *                                                           */

//? Existen dos tipos de archivos para trabajar en Node JS 
//? - CommonJS  - Estos son los que tienen extención .cjs
//? - ESM       - Estos son los que tienen extención .mjs

//! Esto también puede setearse desde el package.json 
//! En su props type: "module" o "commonjs"


//? Solo para que se pueda diferenciar su utilización 
//? cuando utilizamos commonJS estaremos bajo la sintaxis 

```js
    const resource = require('source-package');

    const settings = { 
        isProduction = false,
        isDevelopment = true,
    }

    module.exports = { resource, settings } 
```

//? En cambio cuando usamos los modules de ES
//? la sintaxis será diferente

```js
    import resource from 'source-package';

    const settings = { 
        isProduction = false,
        isDevelopment = true,
    }

    export { resource, settings } 
```
//* La tendencia es utilizar esta última.