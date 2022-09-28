// le promise sono un oggetto specifico che accoglie una funzione
function demoPromise(name){
    return new Promise((resolve, reject)=>{ // le promise hanno sempre questi 2 parametri standand e non vanno modificati
        setTimeout(()=>{
            if(name === "batman"){
            resolve(name) ////con resolve diamo il comando alla funzione
        } else {
            reject(new error(`questo è un errore della promise`))//con reject comunicheremo che e stato prodotto un errore
        }
        }, 1000);
    });
}
let promise = demoPromise(`batman`);//=> Promise { <pending> } vuol dire che il resolve e stato mandato e la promise
//aspetta di capire quale valore deve mandare 
console.log(promise) // reject(new error(`questo è un errore della promise) perche il valore di demoPromise e diverso da batman

// per ordinare alla promise di inviare un valore si usa il "then"

promise
.then((name)=>{
    console.log(`help me ${name}`);//=> help me batman
    return `batman`;
}
)
