let vehiclleType = "car";
let hero = { // stiamo andandoa creare un oggetto con diversi valori il nostro oggetto si chiamerà hero
    name: "batman",// creaiamo una proprietà: e mettiamo la stringa di risultato
    weapen: "batarang", // stessa cosa qui
    "best Partner": "robin", // in questo caso la proprietà puo anche essere formata da una stringa
    [vehiclleType]: "batmobile", // possiamo anche inserire una variabile da assegnare come priopriotà ma deve essere tra []
    call: function(){
        return `help me ${this.name}`;
    }
};
// in questi modi posso richiamare l'oggetto con le proprieta
console.log(hero.call())// richiamo tutto l'oggetto 
console.log(hero.name);// richiamo il la proprietà nome
console.log(hero["name"]);// posso fare anche cosi
console.log(hero["best Partner"]);// in caso di stringhe importante metterle tra []
console.log(hero.car);// in questo caso invece di metterci la funzione devo mettere il valore della funzione quindi car e cosi avro BATMOBILE

delete hero ["best Partner"] ; // in questo modo ad eliminare una proprieta se voglio 
hero.partner = "robin"; // in questo modo aggiungo una nuova proprieta

// operatore in e ciclo for of
//per verificare che una proprieta e contenuta all'interno di un oggetto si una la parola "in"
//esempio 
if("car" in hero) { 
    console.log("car e presente in hero");
}
// altro caso e recupare i dati dell'oggetto tramite il ciclo "for"
// con il ciclo for e creando una funzione che chiamero prop cosi tanto per dare un nome 
//ordinero di ritornarmi tutti i risultati dell'oggetto
for (let prop in hero){
    console.log(prop, hero[prop]); //all'interno di questo ciclo tutte le prorieta verranno date 
}
//passagio per valore e riferimento
//mettiamo caso io voglio cambiare il riferimento dell'oggetto che sarebbe batman 
//faro cosi
let AnotherHero = hero
AnotherHero.name = "superman";
console.log(AnotherHero.name);//superman
console.log(hero.name);//superman
//se invece voglio cambiare oggetto o passarlo esiste una procedura
//creo una variabile = do il comando "object.assign"apro()le {}indicano che stiamo passando ad un oggetto vuoto , il contenuto dell'oggetto hero;
let CloneHero = Object.assign({}, hero);
CloneHero.name = "green Arrow";
console.log(CloneHero.name);//green arrow
//metodi degli oggetti
//nelle poprieta degli oggetti possiamo avere anche delle funzioni e queste sono chiamate metodi
//come nell'esempio sopra 
//call: function(){
//    return `help me ${this.name}`;per far si che si possano catturare delle prorprietà all'interno del nostro oggetto
//} si usa la parola chiave "this".il nome della proprietà

//costruttore oggetti
//il costruttore crea per noi nuovi oggetti , vediamo come creare un costruttore
function Hero(name, weapen){//si crea una fucntion col nome che si vuole dare al costruttore è uso comune usare la lettera maiuscola (mettiamo parametri che vogliamo assegnare a delle proprietà)
    this.name = name;//assegnamo le proprieta con "this"
    this.weapen = weapen;
    this.callMe = function(){ //e mandiamo il call me per avere richiamati tutti i valori
        return `help me ${this.name}`;
    }
}
let hero = new Hero ("batman", "batarang");
// creeremo un nuovo oggetto tramita la parola chiave "new" e il nome del costruttore (con i oarametri che voglio vengano assegnati)

console.log(hero.name);//batman
console.log(hero.weapen);//batarang

