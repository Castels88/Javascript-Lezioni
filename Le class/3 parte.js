// ereditarietà di classe
//possiamo estendere una classe con le caratteristiche di un altra
// prima creariamo la prima classe 
class Hero {
    #city;
    _name = "batman"

    constructor(name, city = "gotham"){
        this._name = name;
        this.#city = city;
    }
    sayHelp(){
        console.log(this.name, this.#city);
    }

}
// poi creiamo la seconda classe ed utilizziamo la parola chiave "extend" e il nome della prima classe
// in questo modo la 2 classe eredita tutte le proprieta e metodi della prima
class SuperHero extends Hero{
    constructor(name, city, team){ //creaiamo un nuovo costruttore che puo avere anche nuovi elementi
        super(name, city); // molto importante con la parola "super" posso richiamare le proprieta della classe genitore
        this.team = team;
    }
    ban(){
        console.log("ban gli altri eroi")
    }
}
// in questo modo sto creando un istanza di superHero e sto inserendo i dati 
let superHero = new SuperHero("elio","palermo","GDP")
console.log(superHero.sayHelp());
console.log(superHero.ban());
