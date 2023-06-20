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

let arregloBurbuja = generarAleatorios(100, 100);
let arregloBurbujaOrdenado = ordenamientoBurbuja(arregloBurbuja);

console.log(`Arreglo sin ordenar: `);
console.log(arregloBurbuja);

console.log(`Arreglo ordenado: `);
console.log(arregloBurbujaOrdenado);

