/**
 * Crear algoritmoque devuelva el precio del
 * producto con impuesto incluido
 */

function precioCompleto(precio, impuesto) {
    return precio + (precio * impuesto)
}

let resultado = precioCompleto(19.90, 0.15)
console.log(resultado)