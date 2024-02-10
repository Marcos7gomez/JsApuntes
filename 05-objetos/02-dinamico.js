const user = {id: 1 };

user.name = 'Marcos';
user.guardar = function(){
    console.log('Guardando...', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id: 1 }); //Para que no se pueda modificar el objeto
const user1 = Object.seal({ id: 1 }); // Sus propiedades quedan fijas pero sus valores pueden cambiar
user1.name = 'Nico';
user1.id = 2;
console.log(user1);
