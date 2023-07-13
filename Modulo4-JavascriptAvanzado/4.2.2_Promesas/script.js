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

// Encadenamiento de promesas
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

// Manejo de promesas simultáneas
let cronometroSimultaneo1 = new Promise((resolve, reject) => {
    let ms = 1000;
    setTimeout(() => {
        console.log(`Cronometro de ${ms} ms terminado`);
        reject('Cronometro simultáneo 1 OK');
    })
});

let cronometroSimultaneo2 = new Promise((resolve, reject) => {
    let ms = 3000;
    setTimeout(() => {
        console.log(`Cronometro de ${ms} ms terminado`);
        reject('Cronometro simultáneo 1 OK');
    })
});

// Promise.all() se cumple cuando todas las promesas se cumplen.
//  y se rechaza con que UNA SOLA promesa se rechace-
let cronometrosAceptados = Promise.all([cronometroSimultaneo1, cronometroSimultaneo2]);
cronometrosAceptados.then((valorPromesaCumplida) => {
    console.log(`TODOS los cronometros han cumplido su promesa`);
})
.catch((valorPromesaRechazada) => {
    console.log(`Ocurrió un error`);
});

// Promise.allSettled() se cumple cuando todas las promesas terminan.
let cronometrosTerminados = Promise.allSettled([cronometroSimultaneo1, cronometroSimultaneo2]);
cronometrosTerminados.then((valorPromesaCumplida) => {
    console.log(`Todos los cronometros se han terminado`);
});

// Promise.any() se cumple cuando AL MENOS UNA promesa se cumple
//  y se rompe cuando TODAS las promesas se rompen.
Promise.any([cronometroSimultaneo1, cronometroSimultaneo2])
.then((valorPromesaCumplida) => {
    console.log(`Al menos UNA promesa se cumplió`);
})
.catch((valorPromesaRechazada) => {
    console.log(`Todas las promesas se rompieron. ):`);
});

// Promise.race() va a cumplirse o romperse con base en la primera promesa que termine y va a
// tomar ese valor para ella.
Promise.race([cronometroSimultaneo1, cronometroSimultaneo2])
.then((valorPromesaCumplida) => {
    console.log(`AL MENOS UNA promesa terminó (no me importa si se cumplió o es una promesa rota).`);
}).catch(() => console.log('Error'));
