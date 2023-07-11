

function saludar(nombre) {
    console.log(`Hola Mundo ${nombre}}`)
}

function saludar2(nombre="") {
  console.log(`Hola Dev.f`)
}

// setTimeout(saludar, 5000)


// Ejemplo 2

function procesarEntradaUsuario(callback) {
    let nombre = prompt('Dime tu nombre')
    callback(nombre)
}


procesarEntradaUsuario(saludar)
procesarEntradaUsuario(saludar2)

