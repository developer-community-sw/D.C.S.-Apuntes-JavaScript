// {} object
const persona = {
    nombre: 'Tony',
};

console.log(persona.nombre);

// Desestructuración
const { nombre } = persona;
console.log(nombre);

// Desestructuración con argumentos
const datosPersona = {
    nombre: 'Jhasmany',
    edad: 45,
    clave: 'Ironman',
};
// primera forma
console.log(datosPersona.edad);
console.log(datosPersona.clave);
console.log(datosPersona.nombre);

// segunda forma
// console.table(datosPersona);
// console.error(datosPersona);
// console.warn(datosPersona);



//Desestructuración con argumentos
// const retornaPersona = ({ nombre, edad, clave }) => {
//     console.log(nombre, edad, clave);
// };

// retornaPersona(datosPersona);

const animales = {
    ave: 'aguila',
    mamifero: 'vaca',
    marino: {
        pez: 'tiburon',
        mamifero: 'ballena',
    },
};

const animales1 = {
  ave: 'aguila',
  mamifero: 'vaca',
  marino: {
      pez: 'tiburon',
      mamifero: 'ballena',
  },

  
};

console.log(animales);

// const animales3 = animales; // referencia al objeto animales
// animales3.ave = 'paloma';

const animales3 = { ...animales }; // clonar el objeto animales
animales3.ave = 'paloma';





