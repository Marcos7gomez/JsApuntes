function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...');}
    
}

// Esto sirve para extender objetos
let punto = { z: 7 };
// Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]); // se deben pasar los valores como array

console.log(punto);

// No se debe utilizar
// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() { console.log('Dibujando...');}
// `);

// const p = new Point(1,2);
// console.log(p)

