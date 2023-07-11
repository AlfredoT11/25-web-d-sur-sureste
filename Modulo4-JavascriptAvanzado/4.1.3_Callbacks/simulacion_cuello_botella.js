console.log("---Simulación de Cuello de Botella---");
console.log(1);
setTimeout(()=>{
    return console.log(2);
},2000);
for (let index = 0; index < 9999999999; index++);
console.log(3);
