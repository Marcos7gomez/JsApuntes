let obj = {};
let obj2 = new Object;

/**
 * new Array(); []
 * new String(); "" ''
 * new Number(); 123
 * new Boolean(); true false
 */

function Usuario(){
    this.name = "Marcos";
}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1"; // Lo toma como objeto
const s2 = new String("1 + 1"); // Lo toma literal
console.log(s2.valueOf());

