function demoPromise(name){
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
        //    if(name === "batman"){
            resolve(name); 
        // } else {
        //     reject(new error(`questo è un errore della promise`))//con reject comunicheremo che e stato prodotto un errore
        // }
            }, 1000);
        });
    };

let promise = demoPromise(`batman`);
// concateniamo piu promise in modo da avere piu risultati della promise
promise
.then((name)=>{
    console.log(`help me ${name}`);//=> help me batman
    return demoPromise `batman`; //aggiungendo qui al return la function demopromise i valori prenderanno anche il delau di 1 sec
})
.then((name)=>{
    console.log(`im ${name}`);
    return demoPromise `night`
})
.then((name)=>{
    console.log(`sono proprio ${name}`)
})
// risultato come possiamo vedere sono stati mandati a schermo tutti e 3 i diversi valori 
// help me batman
// im batman
// sono proprio night