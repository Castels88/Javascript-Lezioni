// operatore instanceOf
// con questo opratore avremo la possibilità di capire se il nostro oggetto apprtiene alla classe 

class Hero {
    #city; 
    power = "strong"
    
    _name = `batman`; 
        constructor(name, city = `Gotham`){ 
            this._name = name; 
            this.#city = city;
        }
        sayHelp(){
            console.log(this.name, this.#city);
        }
    
    
        get name() { 
            return this._name
            }
            
            set name(value){ 
                if(value.lenght < 4){
                    alert("name is too short");
                    return;
                }
                this._name = value
            }
    }
    let hero = new Hero ("batman");

    class SuperHero extends Hero{
        constructor(name, city, team){ 
            super(name, city); 
            this.team = team;
        }
        ban(){
            console.log("ban gli altri eroi")
        }
    }
    let superHero = new SuperHero("elio","palermo","GDP")
    console.log(superHero.sayHelp());
    console.log(superHero.ban());

    // per controllare cio bastera fare cosi 
    console.log(hero instanceof Hero); // guardando la riga 30 l operatore dira // true e quindi che c'è
    console.log(superHero instanceof Hero)// possiamo anche notare che l'operatore ci dira anche che superHero è un istanza di Hero ed è vero perche
    //superHero è erede di hero