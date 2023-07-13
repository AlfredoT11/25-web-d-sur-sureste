function mostrarMensaje(){
    console.log("Cronometro terminado");
}

/*
setTimeout(mostrarMensaje, 1000);

setTimeout(() => {
    console.log("Cronometro 2 terminado");
}, 1000);

setTimeout(function mostrarMensajeCronometro(){
    console.log("Cronometro 3 terminado");
}, 1000);
*/

let cronometro1 = new Promise((resolve, reject) => {
    let promesaCumplida = false;
    setTimeout(() => {
        console.log("Cronometro terminado");
        if(promesaCumplida){
            resolve('Ok');
        }else{
            reject('Error');
        }
        
    }, 2000);
});

cronometro1.then((valorPromesaCompletada) => {
    console.log(`El valor resultante de la promesa es: ${valorPromesaCompletada}`);
}).catch((valorPromesaRota) => {
    console.log(`El valor regresado de la promesa rota es: ${valorPromesaRota}`);
});

console.log('Mensaje después de la promesa');
