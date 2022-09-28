let hero = ["batman", "superman", "flash", "green arrow"];

//se volessi rimuovere un singolo elemento
delete hero[3];//coem si puo vedere dal risultato non lo ha cancellato ha proprio svuotato l'array dell'ultimo elemento
console.log(hero);//'batman', 'superman', 'flash', <1 empty item> ]

//per rimuovere veramente si usa Splice
hero.splice(3,1) // in questo modo sto dicendo di eliminare dall'ultimo elemento solo uno
console.log(hero);//[ 'batman', 'superman', 'flash' ] infatti qui mancherà proprio green arrow 
// splice permette anche di rimuovere ed agganciare nuovi elementi
let spl = hero.splice(3,1,"cyborg");
console.log(hero); // non avremo Green arrow ma avremo cyborg [ 'batman', 'superman', 'flash', 'cyborg' ]
//oppure possimmo anche aggiungere
hero.splice(4,0,"green lantern");
console.log(hero);// risultato [ 'batman', 'superman', 'flash', 'cyborg', 'green lantern' ]


//altro metodo e slice
//con questo metodo vado a prendere degli elementi dall'array
let eroi = ["batman", "superman", "flash", "green arrow"];
let sli = eroi.slice(1,3);              // 1         3  
console.log(sli);// mi prendera solo [ 'superman', 'flash' ]

//se volessi creare un nuovo array con gli elementi di un array piu altri elementi si usa "concate"
let con = eroi.concat("wonderwoman","supergirl");
console.log(eroi);// questo sara 'batman', 'superman', 'flash', 'green arrow' ]
console.log(con);// questo sara ['batman', 'superman', 'flash', 'green arrow' "wonderwoman","supergirl" ] col concate

// un metodo che ci permette di ciclare detto foreach inserendo un item un index e a l'array stesso
eroi.forEach((item, index, array) => {
    console.log(item);//resultato sara ["batman", "superman", "flash", "green arrow"];
});
// ulteriori metodi per ricercare sono
//indexOf ,lastindexOf
console.log(eroi.indexOf("batman"));// darebbe 0 vuol dire che nella posizione zero dell'array
console.log(eroi.lastIndexOf("flash")); // darebbe 2 e la ricerca viene fatta dall'ultimo elemento
console.log(eroi.includes("flash"));// darebbe true perche ci va a dire sse quell'elemento è dentro l'array

//col metodo find potremmo trovare direttamente l'elemento
let item = eroi.find(item => item == "batman");
console.log(item);//darebbe batman

// il metodo find in modo da avere tutti gli arrei con i filtro che stiamo cercando
let newitem = eroi.find(item => item == "batman" || item == "superman");
console.log(newitem);// mi dara un array con batman e superman

// metodo map ci permette di eseguire operazioni su tutti gli elementi dell'array come aggiungere cose agli elementi del dell'array
let mapping = eroi.map((item) => {
    item += " Sr. ";
    return item;
})
console.log(mapping);// resultato [ 'batmanSr.', 'supermanSr.', 'flashSr.', 'green arrowSr.' ]

// sort ordinerà gli elementi secondo l'ordine presistente in java
eroi.sort();
console.log(eroi);//'batman', 'flash', 'green arrow', 'superman' ] in questo caso alfabetico
//reverse ordinamneto opposto al precedente
eroi.reverse();
console.log(eroi);//[ 'superman', 'green arrow', 'flash', 'batman' ]

//split e join 
// con split mettiamo caso che abbiamo una stringa e vogliamo farla diventare un array
let stringhiamo = "batman, superman, flash"
let spliTTiamo = stringhiamo.split(" "); // in questo modo tra gli elementi della strnga di sopra mettera invece della , le "" facendolo diventare un array
console.log(spliTTiamo);// [ 'batman,', 'superman,', 'flash' ]
//con join invece ipotremmo trasformare gli elementi da array a stringhe di nuovo cioe fare il procedimento inverso
console.log(spliTTiamo.join(","));// batman,superman,flash esattamente cosi
// metodo reduce
const array = [1,2,3,4,5,6,7,8,9,10]

const somma = array.reduce(function(prevValue,currentValue){
    console.log(prevValue, currentValue)
    return prevValue *= currentValue;
},1)

const d = new Date()
year = d.getFullYear
month = d.getMonth()
console.log(year)