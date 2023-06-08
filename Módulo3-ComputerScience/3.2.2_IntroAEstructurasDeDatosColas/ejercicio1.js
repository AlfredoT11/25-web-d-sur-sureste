/* 
Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los impares en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/
class Cola {
  constructor(){
    this.cola = []
  }
  // Metodos
  enqueue(element){
    this.cola.push(element)
  }
  dequeue(){
    return this.cola.shift()
  }
  isEmpty(){
    return this.cola.length === 0
  }
  peek(){
    return this.cola[0]
  }
  print(){
    console.log(this.cola)
  }
  front(){
    return this.cola[0]
  }
  back(){
    return this.cola[this.cola.length - 1]
  }
  size() {
    return this.cola.length
  }
}

function dividirCola(colaOriginal){
  var cola1 = new Cola()
  var cola2 = new Cola()

  for(var i=0; i < colaOriginal.size(); i++){
    if(i % 2 === 0){
      // Elemento par
      cola1.enqueue(colaOriginal.front())
    } else {
      // Elemento impar
      cola2.enqueue(colaOriginal.front())
    }
    colaOriginal.enqueue(colaOriginal.dequeue())//Rotar los elementos en la cola original
  }

  return [cola1,cola2]
}

var colaOriginal = new Cola()
colaOriginal.enqueue('amarillo')
colaOriginal.enqueue('rosa')
colaOriginal.enqueue('rojo')
colaOriginal.enqueue('verde')
colaOriginal.enqueue('azul')
colaOriginal.enqueue('negro')
colaOriginal.enqueue('morado')
colaOriginal.enqueue('blanco')

var [cola1, cola2] = dividirCola(colaOriginal)

console.log("Cola 1")
cola1.print()
console.log("Cola 2")
cola2.print()



