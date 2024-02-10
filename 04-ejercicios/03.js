/**
 * indice validar que no sea menor a cerp y que el elemento
 * exista en el array
 */
function getByIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento inexistente';
    }
    return arr[idx];

}

let resultado = getByIdx([1,2], 0);
console.log(resultado);