// - La fecha de hoy
let fecha = new Date();

// - La fecha de tu nacimiento
let fechaNacimiento = new Date(1990, 04, 25);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let hoy = new Date();
let esMayor = hoy > fechaNacimiento;

// - Una variable que contenga el día de tu nacimiento
let diaNacimiento = fechaNacimiento.getDate();

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = fechaNacimiento.getMonth();

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let yearNacimiento = fechaNacimiento.getFullYear();

//- Pregunta al usuario cuál es su edad y almacénala en una variable llamada edad

function edad() {
    let edad = prompt("¿Cuál es tu edad?");
    alert(`tienes ${edad} años`);
}
console.log(edad());
