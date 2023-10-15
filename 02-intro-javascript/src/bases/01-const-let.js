console.log('hola mundo');

//variables y constantes

const nombre = 'Jhasmany';

// ejemplos de uso variable let
// declaracion correcta de una variable let cuando se va a reasignar una modificacion
let apellido = 'Fernandez';
apellido = 'Perez';

console.log(nombre, apellido);

//dentro de la vifurcacion solo se mantiene el valor de la variable let
if (true) {
    let nombre = 'Peter';
    console.log(nombre);
}

console.log(nombre);