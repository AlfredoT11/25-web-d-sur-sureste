const { PI, calcularAreaCirculo } = require('./moduloA');
const constantesFisicas1 = require('./constantesFisicas');
const { funcionesGeometricas } = require('./misModulos/areasFiguras');


let areaDeCirculo = calcularAreaCirculo(5);
console.log(`El área de mi circulo es: ${areaDeCirculo}`);
console.log(`El valor de PI es: ${PI}`);

console.log(`El valor de la gravedad es: ${constantesFisicas1.GRAVEDAD} m/(s^2)`);

console.log(`El valor de la variable importada es: ${funcionesGeometricas.miVariable}`);

let areaDelRectangulo = funcionesGeometricas.calcularAreaRectangulo(5, 4);
console.log(`El area del rectangulo es: ${areaDelRectangulo}`);
