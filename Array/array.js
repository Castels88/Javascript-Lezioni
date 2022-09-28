//sono un elenco ordinato di elementi
//vediamo come sono mostrati
let hero = ["batman", "superman", "flash", "green arrow"];// questo e un array mettendo tra [ ] e gli elementi dentro sono array
//oppure
let OtherHeros = new Array ("batman", "superman", "flash", "green arrow")// questo e un altro modo mettendo new e la parola chiave Array
//oppure
let TypeOfHeroes = new Array("batman", {name:"superman"}, ["flash", "green arrow"]);//dentro un array posso anche avere oggetti come per name:superman o array nidificati come per gli ultimi 2 

// come modificare gli array

// con "pop" rimuovo l'ultimo elemento in coda
let LastHero = hero.pop();
console.log(hero);//"batman", "superman", "flash" manca green arrow

//aggiungere elementi alla fine degli elementi
hero.push("green arrow", "cyborg");
console.log(hero);//aggiungere alla fine 'batman', 'superman', 'flash', 'green arrow', 'cyborg'

//rimuovere il primo elemento
let FirstHero = hero.shift();
console.log(hero); // mancherà batman ['superman', 'flash', 'green arrow', 'cyborg' ]

//aggiungere il primo elemento
hero.unshift("batman", "Wonderwoman");
console.log(hero);// avro di nuovo batman più wonderwoman all'inizio [Wonderwoman, "batman", "superman", "flash", "green arrow", cyborg]

//e possibile ottenere la lunghezza di un array con la propprità lenght
console.log(hero.length);// 6 mi dirà che sono gli elementi
//se volessi svuotare gli elementi si fa cosi 
//hero.length = 0; 


//ora come facciamo ad accedere ad un elemento degll'array?
// si mette il nome dell'array si aprono [1] il numero all'interno sarebbe l'elemento designato attenzione perche 
//gli elementi partono da zero non da 1 quindi in questo caso avro il secondo elemento
hero[1]
console.log(hero[1]); //mi dara Wonderwoman

//tramite un ciclo for posso andare a visualizare i mei elementi ordinati dall'array in console
//for (creo un indice pari a 0;e che non venga superata la lunghezza di hero; questo è un incrementatore )
for (let i = 0; i < hero.length; i++) {
    console.log(hero[i]); // il console log mi mostrerà tutti gli elementi ordinati dell/array
//Wonderwoman
//batman
//Wonderwoman
//superman
//flash
//green arrow
//cyborg
}
