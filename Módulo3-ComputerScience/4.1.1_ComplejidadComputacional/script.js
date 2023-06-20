function ordenamientoBurbuja(arreglo){
    let copiaArreglo = [...arreglo];

    for(let i = 0; i < copiaArreglo.length; i++){
        for(let j = 0; j < copiaArreglo.length - i - 1; j++){
            if(copiaArreglo[j] < copiaArreglo[j + 1]){
                let aux = copiaArreglo[j];
                copiaArreglo[j] = copiaArreglo[j+1];
                copiaArreglo[j+1] = aux;
            }
        }
    }
    return copiaArreglo;
}

function generarAleatorios(n, numeroMaximo){
    return Array.from({ length: n }, () => Math.floor(Math.random() * numeroMaximo));
}

let tiempoInicial;
let tiempoFinal;

let arregloBurbuja = generarAleatorios(20000, 100);
tiempoInicial = Date.now();
let arregloBurbujaOrdenado = ordenamientoBurbuja(arregloBurbuja);
tiempoFinal = Date.now();

console.log(`Burbuja: ${tiempoFinal - tiempoInicial} ms`);

/*
console.log(`Arreglo sin ordenar: `);
console.log(arregloBurbuja);

console.log(`Arreglo ordenado: `);
console.log(arregloBurbujaOrdenado);
*/

let arregloNativo = generarAleatorios(20000, 100);

tiempoInicial = Date.now();
arregloNativo.sort((a, b) => {return a-b});
tiempoFinal = Date.now();
console.log(`Usando sort JS: ${tiempoFinal - tiempoInicial} ms`);

function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n - 1);
}

let valorFactorial = 5;
let factorialResultado = factorial(valorFactorial);
console.log(`El factorial de ${valorFactorial} es: ${factorialResultado}`);


