###### Exponer nuestros conocimientos

## <img  align= center width=50px height=50px src="https://media4.giphy.com/media/3hoLIVAJYkz6T0Ichp/giphy.gif?cid=6c09b952m4j3poopinf91rquev6qy4e8avu0bflq1e0vh4gp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"> Guia de ejercicios

1. Importa "ditto-data.json" en -> "1.pokemon.js"

   - extrae:
     - specie -> name
     - front_default
     - abilities -> ability -> name
     - abilities -> isHidden
   - Crea un objecto literal y muestralo por consola utilizando template string

2. Resuleve el script "routes.js".

3. Importa "futball-data.js" en -> "2.futball.js"

   - Muestra por consola:
     - Cantidad de equipos
     - Responde si todos tienen al menos 2 titulos
     - Responde si alguno se ubica en "Sarandí"
     - Todos los equipos pero los primeros tres totalmente en mayuscula
     - Todos pero en minuscula aquellos que contengan un espacio en blanco
     - Solo aquellos que se localicen en "Rosario"
     - Uno que se encuentre en "Buenos Aires"

4. Importa "futball-data.js" en -> "3.futball.js"

   - Esta vez nos toca separarlos en grupos:
     - Por ubicación
     - Por titulos
     - En dos
       - Aquellos con al menos 20 titulos
       - Aquellos con menos de 20 titulos

---

##### Realizando fetching de datos

- Utilizando [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

  - Crea un script y realiza un fetching de "todos"

    - A. Recupera el json resultante en una constante **data** y logueala por consola.
    - B. Filtra las tareas que esten sin completar
    - C. Crea un array con los titulos de todos las tareas

  - Ahora comenta el codigo anterior y:
    - crea un fn _getData_ que utilice async await y try catch
    - Repite los putnos A B C haciendo uso de _getData_

##### Referencia

```javascript
// Encadenando promesas
fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then((response) =>
  response.json()
);
```

---

<br/>

> [!Note]
>
> Para poner a prueba tus habilidades de desarrollo frontend
> te invito a visitar [Frontend Mentor](https://www.frontendmentor.io/challenges)
