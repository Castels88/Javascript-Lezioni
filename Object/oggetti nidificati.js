// dentro agli oggetti abbiamo delle proprieta che possono anche essere nidificate a sua volta
//esempio

let hero = {
    name: "batman",
    weapen: "batarang",
    vehicle: {         // come possiamo vedere ho nidificato all'interno di vehicle altre 2 proprieta
        type: "car",
        model: "batmobile",
    },
    partner:{
        name: "robin",
        vehicle:{
            type: "moto",
            model: "batmoto",
        },
    }
};      
//come possiamo andare richiamare le proprietà nidificate?
//si andra a mettere nel console log le varie proprorpieta di cui si vuole avere il risultato
//richiamandole col .e il nome della proprietà
console.log(hero.vehicle.model);//mi dara batmobile
console.log(hero.partner.name);//mi dara robin
console.log(hero.vehicle.targa)//questo mi dara undefined perche non esiste questa proprietà

//se volessi controllare se quella proprieta esiste o meno su utilizza l'optional chaning
let targa = hero?.vehicle?.targa; // mi da un errore perche targa non esite 
let model = hero?.vehicle?.type?.model; //non mi dara nessun errore
//
//se volessi avere tutte le proprieta allora si fa cosi con 3 valori
console.log(Object.values(hero));//qui mi dara un arrey tipo [batman , batarang ,tutti i valori
console.log(Object.keys(hero));// in questo modo ritornerebbero le proprietà
console.log(Object.entries(hero));// in questo modo avro la proprietà con il suo valore per ogni elemento