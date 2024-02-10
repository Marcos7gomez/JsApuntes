const punto = {
    x: 10,
    y: 15,
    dibujar(){
        console.log() 
            console.log('Dibujando');
        
    }
};

//delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
}
// let keys = Object.keys(punto);
// console.log(Object.keys(punto)); // Esto devuelve un array con las propiedades del objeto
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {//entries = métodos de clase
    console.log(entry);
}// Esto devuelve el par. Nombre de propiedad y su valor
// como array
// Esto es mas viejo

for (let llave in punto) {
    console.log(llave, punto[llave])
}// Esto es nuevo