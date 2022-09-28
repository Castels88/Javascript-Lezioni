
    // function declaration
    //si digita il comando fuction (le si da un nome) poi si aprono (in cui possiamo mettere dei
    //paramtri) all' interno delle graffe ci sara il contenuto che sara eseguito dalla nostra funzione
function getHero() {
return "batman";// si scrive return per avere la  stringa batman
}//la parola return fassi che nel momento in cui e eseguita la funziona verra ritornato il valore
console.log(getHero());          //necessario indicarne il nome e le ().

//in questa funzione sto mettendo 1 parametro potrei anche metterne piu di uno 
//
function getAnotherHero(hero = "comedian") {
    return `the ${hero}`;// il back tip si fa alt+0096 "`"
}
getAnotherHero("batman");// return sarebbe batman
console.log(getAnotherHero())//se non mettessi ninete allora darebbe "comedian" il parametro dentro

//altro esempio
let alterEgo = 'bruce wayne';

function getAlterEgo(){
    return `Batman is ${alterEgo}`;
}
console.log(getAlterEgo())// in questo esempio eseguendo la function come return
//avremo Batman is bruce wayne abbiamo associato la variabile alla funzione

// function expression
//possiamo assegnare direttamente una function a una variabile o ad una costante 

const getHeroPartner = function () {
    return "robin";
}; //molto importante e mettere sempre il ; come nelle normali funzioni

//callback possiamo passare il parametro di una funzione ad un altra funzione

function sayHelp (hero) {
    console.log(`help ${hero}`); //  questa function andra a richiamare il risultato
    // della const sotto in questa funzione
}

function callBestHero(caller){
    const hero = `batman`;
    caller(hero);
}

callBestHero(sayHelp); //batman

//Arrow function 
// possiamo dichiarare la function expression senza mettere il codice funtion 

const getAnotherHeroPartner = () => { // come possiamo notare con questa freccetta 
    return "robin";}// viene riconosciuta come nella function expression

// inoltre in questo modo posso anche evitare di mettere il paramettro tra () nella function
// e direttamente scriverlo, qualora fossero piu parametri allora dovrei tornare a mettere le ()
// possiamo anche omettere la parola return e le graffe
    const getColorArrow = color => `arrow ${color}`;
    
// lo Scope
// per scope si intende un contenitore in cui sta la variabile
// in questo caso let hero = batman è globare cioe e inserita in tutto lo script
// il secondo all'interno della funzione let hero = superman sara all'interno della funzione
// e quindi come risultato dara superman
let hero = "batman";
if (true) {
    let hero = "superman";
    console.log(hero); // mi dara superman
}

console.log(hero);// qui invece mi dara batman perche let non e interno alla funzione
//e quindi riprendera la let hero che era globale
// altro esempio 
if (true) {
    let bestHero = "elio";
    console.log(bestHero); // mi dara elio perche interno alla funzione
}{
    //console.log(bestHero);// mi dara errore perche non e piu interno alla funzione perche è in un
    //altro contenitore
}

// altre tipi sono le variabili VAR
// esse a differenza di let e const non sono associate allo scope di tipo blocco
//bensi  uno scope di tipo funzione
var lastHero = "batman"

if (true) {
    var lastHero = "Superman";
}
console.log(lastHero);// infatti nonostante il console log sia esterno alla funzione
// java mi dara comunque il risultato superman

//lexical scope & closure
// possiamo anche nidificare le funzioni all'interno delle variabili 
//esempio 
function SimpleSayHelp() {
    let hero = "batman";
//nidificiamo un altra funzione che verra chiamato lessical scope
    function SayInnerHelp(){
        return `Help me ${hero}`;

    }
    console.log(SayInnerHelp()); // mi verra dato il risultato della fuction figlia
}
//esempio 2 
//vogliamo che mi ritorni la frase help me batman o hey batman
function SayHelp(help, hero) { //creaiamo una function con 2 parametri 
    //il primo chiediamo aiuto il secondo l'eroe 
    function SayInnerHelp() { // nidifichiamo un altra e diamo il return dei 2 parametri
        return  `${help} ${hero}`;
    }
    console.log(SayInnerHelp());
    //passiamo al console.log  interno alla funzione in modo che 
    // la function quando arriva al console log di sayinnerhelp riprenda i parametri
    //che ho dato qui sotto 
}
SayHelp("help me","batman");// quindi per mi dara la fusione delle 2 stringhe 
// help me -> $help e batman -> $hero
SayHelp("hey","batman");  // stessa cosa solo che ho mmodificato help me con hey

//altro esempio la closure

function SayHelpByClosure(help){ // creaiamo una function can un parametro
    return function(hero){ //diamo il return con un nuovo parametro
        return `${help} ${hero}`;//qui diamo entrambi i parametri 
    };
}// cosa succederà

let SayHelpMe = SayHelpByClosure("help me");// creo la variante SayHelpMe e dico che e uguale ad
// SayHelpByClosure che ricordiamoci ha il parametro help
let SayHey = SayHelpByClosure("hey"); // faccio la stessa cosa per hey

console.log(SayHelpMe("batman")); // il console log riprendera il parametro di help
// piu il valore di hero che ho inserito nelle () dopo SayHelpMe
console.log(SayHey("batman"));//stessa cosa 
