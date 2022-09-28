//Destrutturazione di Object 
// vediamo come dessctrutturare un oggetto 

const user2Destruct = {
name : "elio",
surname : "castels",
nickname: "pelatino"
}

//per destruttuturalizare useremo le {} invece delle ()
let {name, surname} = user2Destruct;
console.log(name,surname); // risultato elio castels

//posso destrutturalizzare l'oggetto e metterlo anche in un altra veriabile 
let { name: n, surname: s, age = 33 } = user2Destruct;// cosa ho fatto sono andato ad assegnare ad "n" il risultato di name dell'oggetto ad "s" il risultato di surname e in piu ho aggiunto pure un altra proprietà
console.log(n,s,age);// elio castels 33 

// con otherArgs0 java script va a riprendere tutte le altre proprieta che non sono state nominate nella Destrutturazione
let {name: n2, ...otherArgs0} = user2Destruct;
console.log(n2,otherArgs0);// elio { surname: 'castels', nickname: 'pelatino' } infatti inserisce le altre proprietà con i loro risultati

// possiamo anche destruttuturalizare in casi di nidificazione
//mettiamo caso nel mio ogetto avessi un altro ogetto nidificato 
user2Destruct.characteristics = {height: 190, weight: 80};
console.log(user2Destruct); // risultato
//{
//    name: 'elio',
//    surname: 'castels',
//    nickname: 'pelatino',
//    characteristics: { height: 190, weight: 80 }
//  }

let {name: n3, characteristics:{height}}= user2Destruct;
console.log(n3, height);// elio 190 esattamente va a prendere e mettere il "n3" il risultato di name e in height il risultato di height in characteristics

// potrei anche camniare a sua volta la variabile della priprietà nidificata 
let {name: n4, characteristics:{height: h}}= user2Destruct;
console.log(n4, h);// elio 190  n4== elio e h== 190


