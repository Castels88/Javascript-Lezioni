// questo metodo e piu semplice perche utilizzando async e await daremo un tempo alla funzione di dare il risultato
// e con la seconda di aspettare il resposnso delle promise

function demoPromise(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name);
        },1000)
    })
}

let promise = demoPromise(`hero`);

promise
.then((name)=>{
    console.log(`help me ${name}`);
    return demoPromise (`batman`);
})
.then((name)=>{
    console.log(`help me ${name}`);
    return demoPromise (`night`);
})
.then((name)=>{
    console.log(`and i'm the ${name}`);
})

async function demo(){ // in questo modo ponendo async dico a java che la funzione è asincrona 
let genericHero = await demoPromise(`hero`);// in questo modo sto dicendo a java di attendere la risoluzione della promise
//in questo caso sia essa risolta o rejected ,attendera ad assegnare il valore a genericHero
console.log(`help me ${genericHero}`)
}