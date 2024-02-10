/**
 * Crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */

let pairs = [
    [1, {name: "Marcos" }],
    [2, {name: "Luis" }],
    [3, {name: "Gomez" }],
];
let array = [{
    id:1,
    name:'Marcos',
}, {
    id:2,
    name: 'Luis',
}, {
    id:3,
    name: 'Gomez',
}];

function toColecction(arr){
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];

    }
    return collection;
}

let resultado = toColecction(pairs);
console.log(resultado);