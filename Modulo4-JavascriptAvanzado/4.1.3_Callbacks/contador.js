// funcion para medir el tiempo de ejecucion
function mideTiempo(funcion) {
  console.time('---tiempo de ejecucion---')
  funcion()
  console.timeEnd('---tiempo de ejecucion---')
}

//Funcion sincrona
function procesoSincrono() {
  console.log('Inicio del proceso sincrono')
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  console.log('Fin del proceso sincrono')
}

// Funcion asincrona
function procesoAsincrono() {
  console.log('Inicio del proceso asincrono')
  setTimeout(()=> {
    console.log("Funcion asincrona ejecutada")
  },2000)
  console.log('Fin del proceso asincrono')
}


mideTiempo(procesoSincrono)
mideTiempo(procesoAsincrono)
