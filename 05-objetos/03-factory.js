/**
 * Para crear  constructores se debe suar la escritura
 * camelCase
 */
function crearusuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function() {
            console.log('Recuperando clave...')
        },
    };
};

let user1 = crearusuario('Nicolas', 'nicoholamundo@gmail.com');
let user2 = crearusuario('Marcos', 'marcosgomez@gmail.com');
console.log(user1, user2);
