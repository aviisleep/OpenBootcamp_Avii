// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaDeLaCompra = ["Leche", "Huevos", "Pan", "Aceite", "Arroz", "Café"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaDeLaCompra.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaDeLaCompra.splice(listaDeLaCompra.indexOf("Aceite de Girasol"), 1);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFavoritas = [
    {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        fecha: "1972"
    },
    {
        titulo: "El Padrino 2",
        director: "Francis Ford Coppola",
        fecha: "1974"
    },
    {
        titulo: "El Padrino 3",
        director: "Francis Ford Coppola",
        fecha: "1976"
    }
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosteriores = peliculasFavoritas.filter(pelicula => {
    return pelicula.fecha > "2010-01-01";
});


// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculasFavoritas.map(pelicula => {
    return pelicula.director;
});


// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculasFavoritas.map(pelicula => {
    return pelicula.titulo;
});


// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let listaFinal = directores.concat(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let listaFinal2 = [...directores, ...titulos];
