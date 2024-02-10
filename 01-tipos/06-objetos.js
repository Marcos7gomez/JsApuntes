// Personaje de juego
let nombre ="Sett";
let juego = "League of Legends";
let edad = 24;

let personaje = {
//par llave/valor
    nombre: "Sett", //propiedad
    juego: "League of Legends",
    edad: 24,
};
console.log(personaje);
console.log(personaje.juego);
console.log(personaje['nombre']);

//Distintas formas de cambiar valor a propiedad
personaje.edad = 18;

personaje['edad'] = 19;

delete personaje.juego;
console.log(personaje)