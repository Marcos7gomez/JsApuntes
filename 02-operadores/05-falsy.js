// short-circuit

// Falso
// false 
// 0
// ''
// null
// undefined
// NaN
// todos estos son falsy

let nombre = 'Chanchito feliz';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('Soy funcion 1')
    return false;
}

function fn2(){
    console.log('Soy funcion 2')
    return true;
}

let x = fn1() && fn2();
// si debemos escribir una lógica pero necesitamos que una
// lógica anterior haya devuelto true usamso &&