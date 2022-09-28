//setTimeout e setInterval
//queste sono 2 api che ci permettono di eseguire un processo dopo un intervallo di tempo 
//oppure di eseguire il processo ad intervalli di tempo stabiliti
let hero = "batman"
function sayHelp(){
    console.log("aiuto")
}

setTimeout(sayHelp,2000)// il processo verra effettuato dopo 3000=> 3 secondo [Done] exited with code=0 in 3 seconds

console.log("ciao") // questa verra visualizzato subito 

function anotherHero (hero){
    console.log(`wella ${hero}!`)
}
setTimeout(anotherHero,3000,"superman") //wella superman! [Done] exited with code=0 in 4.115 seconds
// come possiamo vedere all'interno del set time possiamo anche inserire valori da assegnare alla variabile nominata in anotherHero

let intervalId = setInterval(anotherHero,3000,"wonder woman")//questo intervello ordinerà a java di ripetere wella wonder woman! ogni 5 sec 

// per fermalo , attiviamo un nuovo time out 
setTimeout(() => clearInterval(intervalId),7000); // diro con clearInterval di fermare(intervalId) dopo 7 sec

