let user = {
    id:1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let prop in user){
    console.log(prop, user[prop]);
}
// user[prop] entre los corchetes para que muestre los valores 


let animales = ['chanchito feliz', 'canguro', 'leon']
for (let indice in animales){
    console.log(indice, animales[indice]);
}
// ¡¡USAR FOR OF!!