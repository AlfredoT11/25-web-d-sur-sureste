const number2text = require('number2texto');

let textoIngles = number2text(222);
let textoEspaniol = number2text(1234567, 'es');

console.log(textoIngles);
console.log(textoEspaniol);