// funcion para medir el tiempo de ejecucion
function mideTiempo(funcion) {
  console.time('---tiempo de ejecucion---')
  funcion()
  console.timeEnd('---tiempo de ejecucion---')
}
function mideTiempo2(funcion) {
  const inicio = Date.now()
  funcion()
  const fin = Date.now()
  const tiempoEjecucion = fin - inicio;
  return tiempoEjecucion
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

console.log(`Tiempo: ${mideTiempo2(procesoSincrono)}`)
console.log(`Tiempo: ${mideTiempo2(procesoAsincrono)}`)
