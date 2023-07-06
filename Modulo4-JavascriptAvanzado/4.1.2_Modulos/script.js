const { PI, calcularAreaCirculo } = require('./moduloA');
const constantesFisicas1 = require('./misModulos/constantesFisicas');
const { funcionesGeometricas } = require('./misModulos/areasFiguras');


let areaDeCirculo = calcularAreaCirculo(5);
console.log(`El área de mi circulo es: ${areaDeCirculo}`);
console.log(`El valor de PI es: ${PI}`);

console.log(`El valor de la gravedad es: ${constantesFisicas1.valorGravedad} m/(s^2)`);

console.log(`El valor de la variable importada es: ${funcionesGeometricas.miVariable}`);

let areaDelRectangulo = funcionesGeometricas.calcularAreaRectangulo(5, 4);
console.log(`El area del rectangulo es: ${areaDelRectangulo}`);

// Recordatorio de desestructuración.
let persona = {
    nombre: 'Juan',
    edad: 28,
    estatura: 1.45
};

/*
let nombre = persona.nombre;
let edad = persona.edad;
let estatura = persona.estatura;
*/

// Esta línea es el equivalente a las 3 líneas superiores comentadas.
let { nombre, edad, estatura } = persona;

console.log(`El nombre es: ${nombre}`);
