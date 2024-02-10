function suma(a, b){
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado)
console.log(typeof suma)

// valores de funciones cuando las llamamos = argumentos
// valores referenciados dentro de las funciones se llaman parametros
