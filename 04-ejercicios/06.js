/**
 * Crear algoritmo que devuelva cantidad de números
 *  positivos de una array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let contador = 0;
    for (elemento of arr){
        if (elemento >=0){
            contador++;
        }
    }
    return contador;
}

let numeros = cuantosPositivos(array)
console.log(numeros);