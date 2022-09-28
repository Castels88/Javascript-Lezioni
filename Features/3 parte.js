// metodi JSON
// serve per rappresentare in maniera testuale di oggetti 
// questo è il nostro oggetto
const hero = {
    name: "elio",
    isRich: "no",
    armi: {primaria: "pelata", secondaria: "forza"},
    veicoli: ["a piedi","uber"],
    partner: "cippi cio",
    sayHelp() {
        console.log("help");
    },

    [Symbol("id")]: 123,
    something: undefined
};
//cosi creo una variabile e ordino di codificarlo in testo JSON
let json = JSON.stringify(hero);
// vedo il risultato della codifica in JSON
console.log(json)//{"name":"elio","isRich":"no","armi":{"primaria":"pelata","secondaria":"forza"},"veicoli":["a piedi","uber"],"partner":"cippi cio"} 
//attenzione quando si coverte in JSon un oggetto alcuno prorpietà vengono scartate come le Funzioni 
//, come i Symbol e i parametri undefined

//possiamo anche in fase di coversione in JSON possiamo trasformare un volare che desideriamo ad esempio 
//vogliamo che dell'oggetto venga trasformato solo il valore dell'arma primaria 
hero.armi.toJSON = function(){
    return this.primaria;
}
console.log(typeof json)

//se volessi passare una stringa in Json ad un oggetto si usa 
//Parse
const newHero = JSON.parse(json)
console.log(newHero) // risultato
// name: 'elio',
//isRich: 'no',
//armi: { primaria: 'pelata', secondaria: 'forza' },
//veicoli: [ 'a piedi', 'uber' ],
//partner: 'cippi cio'
//}


