/**
 * Para crear  constructores se debe suar la escritura
 * PascalCase
 */
//{ id: 1, recuiperarClave: function() {} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function() { // es un método
        console.log('Recuperando clave...')
    }
}

let usuario = new Usuario();
console.log(usuario);
