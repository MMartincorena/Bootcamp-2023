let biblioteca = [
  {
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes",
    paginas: 1056,
    prestado: false,
    genero: "Novela",
    publicado: 1605,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
    prestado: false,
    genero: "Ciencia ficción",
    publicado: 1949,
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    prestado: true,
    genero: "Realismo mágico",
    publicado: 1967,
  },
  {
    titulo: "En busca del tiempo perdido",
    autor: "Marcel Proust",
    paginas: 4215,
    prestado: true,
    genero: "Novela",
    publicado: 1913,
  },
  {
    titulo: "Ulises",
    autor: "James Joyce",
    paginas: 730,
    prestado: false,
    genero: "Modernismo",
    publicado: 1922,
  },
];

/* Parte 1: Utiliza el método .forEach() para imprimir todos los títulos de los libros y sus autores en la consola en un formato bonito.*/
/* 
console.log("Parte 1");
let listaLibros = biblioteca.forEach((libro) => {
  console.log(libro.titulo);
  console.log(libro.autor);
  console.log("************");
});
*/

/* Parte 2: Utiliza el método .filter() para crear un nuevo array que solo contenga los libros que están actualmente prestados.*/
/* console.log("Parte 2");
let listaLibrosFiltradosPorEstadoPrestado = biblioteca.filter(
  (libro) => libro.prestado
);
console.log(listaLibrosFiltradosPorEstadoPrestado);
 */

/* Parte 3: Utiliza el método .find() para buscar un libro por su título. */
/* console.log("Parte 3");
let buscarLibroProNombre = biblioteca.find((libro)=>libro.titulo==="1984");
console.log(buscarLibroProNombre);
  */

/* Parte 4: Utiliza el método .sort() para ordenar los libros por el número de páginas, de menor a mayor.*/
/* console.log("Parte 4");
let libroPaginasOrdenadas = biblioteca.sort((a, b) => a.paginas - b.paginas);
console.log(libroPaginasOrdenadas); */

/* Parte 5: Añade una función que permita añadir un nuevo libro a la biblioteca. 
Esta función debe tomar como argumentos el título, el autor y el número de páginas, 
y debe crear un nuevo objeto de libro con esos valores y añadirlo al array de la biblioteca. 
Asegúrate de que el estado de “prestado” se establezca como false por defecto.*/
/* console.log("Parte 5");
let agregarLibro = biblioteca.push({
  titulo: "Peñarol",
  autor: "Morena",
  paginas: 1891,
  prestado: false,
  genero: "Glorioso",
  publicado: 1992,
});
console.log(agregarLibro);

let listaLibros = biblioteca.forEach((libro) => {
  console.log(libro.titulo);
  console.log(libro.autor);
  console.log("************");
}); */

/* Parte 6: Añade una función que permita cambiar el estado de “prestado” de un libro dado su título. */
/* console.log("Parte 6");
const cambiarEstadoPrestadoPorNombre = (titulo) => {
  const libroEncontrado = biblioteca.find((libro) => libro.titulo === titulo);
  if (libroEncontrado) {
    libroEncontrado.prestado = !libroEncontrado.prestado;
  }
};
cambiarEstadoPrestadoPorNombre("1984"); */

/* Parte 7: Crea una función que devuelva un nuevo objeto. Este objeto debe representar la biblioteca, 
pero clasificada por autor. Las claves deben ser los nombres de los autores, y los valores deben ser arrays de los libros de cada autor.*/
/*console.log("Parte 7");
function clasificarPorAutor() {
  const bibliotecaClasificada = {};

  biblioteca.forEach(libro => {
    const autor = libro.autor;

    if (!bibliotecaClasificada[autor]) {
      bibliotecaClasificada[autor] = [];
    }
    bibliotecaClasificada[autor].push(libro);
  });

  return bibliotecaClasificada;
}
const bibliotecaClasificadaPorAutor = clasificarPorAutor();
console.log(bibliotecaClasificadaPorAutor);
*/

/* Parte 8: Utiliza el método .reduce() para encontrar el número total de páginas de todos los libros en la biblioteca.*/
/* const suma = biblioteca.reduce((acumulador, libro) => {
  return acumulador + libro.paginas;
}, 0); //el 0 hace referencia al número inicial del acumulador
console.log(suma);
 */


/*Parte 9: Crea una función que permita buscar libros por género.*/


/*Parte 10: Crea una función que devuelva todos los libros publicados en un rango de años especificado por el usuario.*/
/* const buscarLibrosPorRangoDeAños = (biblioteca, añoInicio, añoFin) => {
  const librosEnRango = biblioteca.filter(
    (libro) => libro.publicado >= añoInicio && libro.publicado <= añoFin
  );
  return librosEnRango;
};
const librosEnRango = buscarLibrosPorRangoDeAños(biblioteca, 1900, 1950);
console.log(librosEnRango); 
*/

/*Parte 11: Crea una función que permita eliminar un libro de la biblioteca por su título. */
function eliminarLibroPorTitulo(biblioteca, titulo) {
  for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].titulo === titulo) {
      biblioteca.splice(i, 1);
      return true; // Libro encontrado y eliminado
    }
  }

  return false; // Libro no encontrado
}

// Ejemplo de uso
const tituloEliminar = "1984";
const libroEliminado = eliminarLibroPorTitulo(biblioteca, tituloEliminar);

if (libroEliminado) {
  console.log(`El libro "${tituloEliminar}" ha sido eliminado.`);
} else {
  console.log(`No se encontró el libro "${tituloEliminar}".`);
}