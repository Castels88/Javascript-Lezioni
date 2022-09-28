// siamo nell'ambito di operazioni che partono in un dato momento ma vengono completate in un secondo momento
let hero = ""

let setHero = function (name){
    hero = name;
}

setHero("elio")
console.log("sync", `hi ${hero}`);

// ma cosa succede se l'assegnazione della variabile avviene in un momento differente da quando noi eseguiamo la nostra funzione?
// usiamo il setTimeout
let setHeroAsync = function(name){
    setTimeout(() => {
        hero = name
    }, 3000);
}
// come vedremo dal console log async viene stampato dopo 3 secondi
setHeroAsync(`Superman`)
console.log("async",`hi ${hero}`)

//proviamo a creare un altra funzione con timeout + una call back 
let ayncCallBack = function(name, callback){ // qui metto sia il valore di name che la callback come valore
    setTimeout(() =>{   //sto mettendo il timeout
        hero = name;// assegnerò a name il valore di hero 
        callback();// richiamero la call bacl 
    },3000)// imposto a 3 sec
}
ayncCallBack(`green arrow`,() => console.log(`async callback`,`hi ${hero}`));// qui mi verra stampato il nuovo name "green arrow" e poi la funzione
//dopo il timeout con il richiamo alla callback