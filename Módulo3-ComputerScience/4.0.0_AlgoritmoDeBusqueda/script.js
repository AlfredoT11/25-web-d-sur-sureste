// Busqueda secuencial

//Tiene que devolver la posicion en que se encuentra el elemento a buscar
//Si no se encuentra el elemento, devolver -1

function busquedaSecuencial (array, elementoABuscar) {
  const size = array.length
  for(let i=0; i < size; i++){
    if(array[i] === elementoABuscar){
      return i
    }
  }
  return -1
}

const miArray = [3,4,7,8,2,10,5,6]

console.log(busquedaSecuencial(miArray, 10)) // 5
console.log(busquedaSecuencial(miArray,8)) // 3

console.log(miArray.indexOf(8))

// Busqueda binaria
//Es necesario un array ordenado
const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function binarySearch(array, element) {
  let min = 0;
  let max = array.length
  let aux; // esta nos va a calcular la mitad

  //Minimo no puede ser mas o igual que el maximo
  while(min <= max){
    aux = Math.floor((max + min)/ 2) // rendondeamos los elementos porque no podemos pedir la posicoon 4.5 de mi arreglo pero si la posicion 4
    if(array[aux] === element){
      //Si encontro el elemento
      return aux;// Retornamos el indice del elemento encontrado
    } else if(array[aux] < element){
      //Si el elemento esta en la mitad derecha
      min = aux + 1
    } else {
      //Si el elemento esta en la mitad izquierda
      max = aux - 1
    }
  }
  return -1
}

console.log("binarySearch",binarySearch(myArray,11))
