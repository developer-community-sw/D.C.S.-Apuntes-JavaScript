const nombre = 'Jhasmany';
const apellido = 'Fernandez';

// Uso del backtick
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

const nombreCompleto2 = `hola mundo`;
console.log(nombreCompleto2);

// fuciones en js string
function getSaludo(nombre) {
  return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombre)}`);

