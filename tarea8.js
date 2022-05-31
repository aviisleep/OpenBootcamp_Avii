// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const persona = {
    nombre: "Javier",
    apellido: "Moreno",
    edad: 32,
    altura: 1.84,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const {edad} = persona;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [persona, {
    nombre: "Daniela",
    apellido: "Muñoz",
    edad: 28,
    altura: 1.70,
    eresDesarrollador: false
}, {
    nombre: "Lourdes",
    apellido: "Villegas",
    edad: 56,
    altura: 1.60,
    eresDesarrollador: false
}];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const ordenarPorEdad = (persona1, persona2) => {
    return persona1.edad - persona2.edad;
}