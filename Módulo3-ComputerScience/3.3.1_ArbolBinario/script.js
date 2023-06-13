class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        if (this.raiz === null) {
            let nuevoNodo = new Nodo(valor);
            this.raiz = nuevoNodo;
        } else {
            let nodoActual = this.raiz;
            while (true) {
                if (valor < nodoActual.valor) {
                    if (nodoActual.izquierdo === null) {
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.izquierdo = nuevoNodo;
                        return;
                    } else {
                        nodoActual = nodoActual.izquierdo;
                    }
                }else{
                    if(nodoActual.derecho === null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.derecho = nuevoNodo;
                        return;
                    }else{
                        nodoActual = nodoActual.derecho;
                    }
                }
            }
        }
    }

    buscar(valor){
        let nodoActual = this.raiz;
        if(nodoActual === null){
            return false;
        }

        while(nodoActual !== null){
            if(nodoActual.valor === valor){
                return true;
            }

            if(valor < nodoActual.valor){
                nodoActual = nodoActual.izquierdo;
            }else{
                nodoActual = nodoActual.derecho;
            }
        }
        return false;
    }
}

let arbolBinario = new ArbolBinario();
arbolBinario.insertar(5);
arbolBinario.insertar(3);
arbolBinario.insertar(4);
arbolBinario.insertar(7);
arbolBinario.insertar(6);
arbolBinario.insertar(7);

let valorABuscar = 4;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 5;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 7;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 1;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 11;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);
