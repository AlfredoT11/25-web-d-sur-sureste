let arregloLineal = [2, 5, -2, 8, 10];

for(let i=0; i<arregloLineal.length; i++){
    console.log(`Índice: ${i} Valor: ${arregloLineal[i]}`);
}

let arregloMultidimensional = [ 
                                [ 2,  5,  4], //Fila 0
                                [-1,  3,  8],  //Fila 1
                                [ 6,  7, 10]  //Fila 2
                              ];

console.log(arregloMultidimensional[1][1]);
console.log(arregloMultidimensional[2][0]);
console.log(arregloMultidimensional[1][2]);

let arregloTridimensional = [ 
    [ 
        [2, 5],  
        [8, 4]
    ], 
    [ 
        [1, 7],  
        [6, 9]
    ],  
  ];

console.log(arregloTridimensional[1][0][1]);

const arreglo1 = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

const arreglo2 = [
    [10, 11, 12], 
    [13, 14, 15], 
    [16, 17, 18]
]

const suma = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
]

for(let i=0; i < suma.length; i++){
    for(let j=0; j < suma[i].length; j++){
        suma[i][j] = arreglo1[i][j] + arreglo2[i][j];
    }
}

console.log("Resultado de suma: ");

console.table(suma);

/*
for(let i=0; i < suma.length; i++){
    for(let j=0; j < suma[i].length; j++){
        console.log(suma[i][j]);
    }
}
*/

//Pila arreglo
let pila = [];

pila.push(8);
pila.push(5);
pila.push(3);

console.log(pila);

pila.pop();

console.log(pila);

console.log(pila[pila.length-1]);

class Pila{
    constructor(){
        this.arreglo = [];
    }

    push(nuevoValor){
        this.arreglo.push(nuevoValor);
    }
    pop(){
        return this.arreglo.pop();
    }
    peek(){
        return this.arreglo[this.arreglo.length-1];
    }
    size(){
        return this.arreglo.length;
    }
    printWithoutModify(){
        console.log(this.arreglo);
    }
    printModify(){
        //Opción 1.
        /*
        let len = this.arreglo.length;
        for(let i=0;i<len;i++){
            console.log(this.arreglo.pop());
        }*/

        //Opción 2.
        while(this.arreglo.length != 0){
            console.log(this.arreglo.pop());
        }
    }
}

let pila1 = new Pila();
pila1.push(1);
pila1.push(2);
pila1.push(3);
pila1.push(4);
pila1.push(5);

pila1.printWithoutModify();

pila1.pop();

pila1.printWithoutModify();

console.log(`Último valor: ${pila1.peek()}`);

pila1.printModify();

pila1.printWithoutModify();

// Alternativa para acceso de último elemento.
let arreglo = [1, 2, 3, 4];
console.log(arreglo.slice(-1)[0]);

// Pila con referencias

class Nodo{
    constructor(valorNodo, nodoSiguiente){
        this.valor = valorNodo;
        this.siguiente = nodoSiguiente;
    }
}

class PilaNodos{
    constructor(){
        this.tope = null;
    }

    push(nuevoValor){
        if(this.tope == null){
            let nuevoNodo = new Nodo(nuevoValor, null);
            this.tope = nuevoNodo;
        }else{
            let nuevoNodo = new Nodo(nuevoValor, this.tope);
            this.tope = nuevoNodo;
        }
    }

    pop(){
        if(this.tope == null){
            console.log("La pila está vacía");
            return null;
        }
        let valorDeNodoSacado = this.tope.valor;
        this.tope = this.tope.siguiente;
        return valorDeNodoSacado;
    }

    print(){
        if(this.tope == null){
            console.log("La pila está vacía");
        }else{
            console.log(this.tope.valor);
        }
    }
}

console.log("Pila con nodos");
let pilaNodos = new PilaNodos();
pilaNodos.push(10);
pilaNodos.print();
pilaNodos.push(5);
pilaNodos.print();
pilaNodos.push(4);
pilaNodos.print();

console.log(`El valor sacado es: ${pilaNodos.pop()}`);
console.log(`El nuevo valor del tope es: `);
pilaNodos.print()
console.log(`El valor sacado es: ${pilaNodos.pop()}`);
console.log(`El nuevo valor del tope es: `);
pilaNodos.print()
console.log(`El valor sacado es: ${pilaNodos.pop()}`);
console.log(`El nuevo valor del tope es: `);
pilaNodos.print()
