/*                                                    *
 * ----------------- templates strings -------------- *
 *                                                    */

//? Los template strings se resuelven entre -> `` <-
//? Nos permite:
//?   -> generar parrafos multilinea
//?   -> interpolación de variables
//?   -> creación de structuras html

const paragraph = `
    <h1>Este es el header del documento html</h1>

    <aside>Aside de la página</aside>

    <footer>Todos los derechos reservados</footer>
`;

console.log(paragraph);

const nick = 'nikodev';
const age = 35;

console.log(`El user ${nick} tiene ${age}.`);
