// le classi permettoro la costruzione di nuovi oggetti con nuove funzionalità
// le dichiarazione delle classi avviene tramite la parola "class"
class Hero {
#city; // nelle classi possiamo avere anche attributi privati e questi si creano ponendo il "#" davanti la proprietà, non sara ne ereditabile ne utilizzabile all'esterno della classe
power = "strong"//nelle classi abbiamo la possibilità di assegnare degli attributi pubblici e possono essere richiamati dall' esterno della classe e possono essere ereditabili

_name = `batman`; // prima le proprietà private venivano richiamate ponendo l'underscore davanti al nome come in questo caso 
    constructor(name, city = `Gotham`){ // ogni classe ha un metodo chiamato "costructor" esse è l'inizializzatore della nostra classe ,nel quale passeremo i parametri 
        this._name = name; // e tramite il metodo "this" potremo assegnare i parametri di nome e citta a qielli che sono eventuali proprietà della nostra classe
        this.#city = city;
    }
    // possiamo anche definire i metodi e come negli oggetti usare la parola this per poter far ritornare dei valori da delle proprietà
    sayHelp(){
        console.log(this.name, this.#city);
    }


    get name() { // con get possiamo richiamare la proprietà privata e farla ritornare
        return this._name
        }
        
        set name(value){ // con set alla proprietà privata assegnamo un valore in questo caso (value) 
            if(value.lenght < 4){
                alert("name is too short");
                return;
            }
            this._name = value // e lo validiamo  che poi viene tornata col get 
        }



}

// per usare e mandare in stampa la classe si deve creare una variabile e fare = new "il nomedella classe ()"
let hero = new Hero("batman");
//hero.name = "superman";// sto assegnado il valore della proprietà che corrisponde al set
//console.log(hero.name);// se avessi voluto stampare il valore allora faro cosi richiamando il get 

console.log(hero.sayHelp());// batman Gotham mi viene stampato questo
