class Animal{
    //Parámetro en orden.
    /*
    constructor(tamanio, numeroPatas, especie, peso, tienePelo){
        this.tamanio = tamanio;
        this.numeroPatas = numeroPatas;
        this.especie = especie;
        this.peso = peso;
        this.tienePelo = tienePelo;
    }
    */

    //Parámetros con objeto literal.
    constructor({tamanio = 50, numeroPatas=4, especie=null, peso = 5, tienePelo=true}){
        this.tamanio = tamanio; //Valor en cm.
        this.numeroPatas = numeroPatas;
        this.especie = especie;
        this._peso = peso; //Valor en kg.
        this.tienePelo = tienePelo;
    }

    set Peso(nuevoPeso){
        if(nuevoPeso > 2000){
            console.log("El peso es mayor al permitido");
            return;
        }
        this._peso = nuevoPeso;
    }

    get Peso(){
        return this._peso;
    }

    mover(metros){
        console.log(`Me estoy moviendo ${metros} metros`);
    }

    dormir(){
        console.log("Estoy durmiendo");
    }

    comer(kilosComida){
        console.log(`Me voy a comer ${kilosComida} kilos de comida y peso ${this._peso}`);
        this._peso += kilosComida 
        console.log(`Después de comer ${kilosComida} kg de comida, ahora peso ${this._peso}`);
    }

    hacerDelBanio(){
        console.log(`Antes de hacer del baño pesaba ${this._peso}`);
        this._peso -= 0.2;
        console.log(`Después de hacer del baño peso ${this._peso}`);
    }

    toString(){
        return `Yo soy un ${this.especie} que pesa ${this._peso} kg y que mide ${this.tamanio} cm.`;
    }
}

class Perro extends Animal{
    constructor(colorCola){
        super({});
        this.colorCola = colorCola;
    }

    mover(metros){
        console.log(`Estoy caminando ${metros} m en 4 patas mientras muevo mi colita ${this.colorCola}`);
    }

    ladrar(){
        console.log("Woof woof");
    }
}

class Pajaro extends Animal{
    constructor(colorAlas){
        super({});
        this.colorAlas = colorAlas;
    }

    mover(metros){
        console.log(`Estoy volando ${metros} m mientras muevo mis alas ${this.colorAlas}`);
    }
}

class PersonaVisora{
    constructor(){

    }

    observarAnimal(animalAObservar, metros){
        console.log(`Estoy viendo un animal que hizo: `);
        animalAObservar.mover(metros);
    }
}

//let perro = new Animal("20cm", 4, "perro", 3, true);
let perro = new Animal({
    numeroPatas : 4,
    tienePelo : true,
    especie : "perro"
})

console.log(perro.toString());

console.log(`Este animal es un ${perro.especie}`);
perro.mover(10);
perro.comer(0.5);
perro.hacerDelBanio();
perro.dormir();

perro.Peso = 2500;
console.log(`Mi nuevo peso es ${perro.Peso}`);

let perroReal = new Perro("blanco");
console.log(`Hola soy un perro y tengo la cola de color ${perroReal.colorCola}`);
perroReal.ladrar();

//perro no es de la clase Perro y por eso no puede ladrar.
//perro.ladrar();

perroReal.mover(100);

let pajarito = new Pajaro("amarillas");

let persona = new PersonaVisora();
persona.observarAnimal(pajarito, 20);

persona.observarAnimal(perroReal, 40);

console.log(`Este objeto es un Pajaro ${pajarito instanceof Pajaro} `);
console.log(`Este objeto es un Pajaro ${pajarito instanceof Perro} `);
console.log(`Este objeto es un Animal ${pajarito instanceof Animal} `);
