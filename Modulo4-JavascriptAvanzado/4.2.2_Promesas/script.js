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
    let promesaCumplida = true;
    setTimeout(() => {
        console.log("Cronometro 1 terminado");
        if(promesaCumplida){
            resolve('Ok cronometro 1');
        }else{
            reject('Error cronometro 1');
        }
        
    }, 2000);
});

cronometro1.then((valorPromesaCompletada) => {
    console.log(`El valor resultante del primer cronometro es: ${valorPromesaCompletada}`);
    let cronometro2 = new Promise((resolve, reject) => {
        let promesaCumplida = false;
        setTimeout(() => {
            console.log("Cronometro 2 terminado");
            if(promesaCumplida){
                resolve('Ok cronometro 2');
            }else{
                reject('Error cronometro 2');
            }
            
        }, 2000);
    });
    return cronometro2;
}).then((valorPromesaCompletada) => {
    console.log(`El valor de la promesa anterior es: ${valorPromesaCompletada}`);
    let cronometro3 = new Promise((resolve, reject) => {
        let promesaCumplida = true;
        setTimeout(() => {
            console.log("Cronometro 3 terminado");
            if(promesaCumplida){
                resolve('Ok cronometro 3');
            }else{
                reject('Error cronometro 3');
            }
            
        }, 2000);
    });
    return cronometro3;
}).then((valorPromesaCompletada) => {
    console.log(`El valor de la promesa anterior es: ${valorPromesaCompletada}`);
}).catch((valorPromesaRota) => {
    console.log(`El valor regresado de la promesa rota es: ${valorPromesaRota}`);
});

console.log('Mensaje después de la promesa');
