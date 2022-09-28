function demoPromise(name){
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            if(name === "batman"){
            resolve(name) 
        } else {
            reject(new error(`questo è un errore della promise`))
        }
        }, 1000);
    });
}
let promise = demoPromise(`batman`);
console.log(promise) 

promise
.then((name)=>{
    console.log(`help me ${name}`);
    return demoPromise `batman`; 
})
.then((name)=>{
    console.log(`im ${name}`);
    return demoPromise `night`
})
.then((name)=>{
    console.log(`sono proprio ${name}`)
})
.catch((err)=>{
    console.log(`è stato provocato un errore`,err);
})