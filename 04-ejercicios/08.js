/**
 * Crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */

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

function toPairs(arr){
    let pares =[];
    for (idx in arr){
        let elemento = arr[idx];
        pares[idx] = [elemento.id, elemento];
    }
    return pares;
}

let resultado = toPairs(array);
console.log(resultado);