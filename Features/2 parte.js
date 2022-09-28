//Rest and Spread Operators
// il rest operator permette di raccogliere dentro un paramettro tutti gli elementi in eccedenza sotto forma di array
let [a,b, ...c] = [1,2,3,4] // il rest si indica con i 3 "..."
console.log(a,b,c);// a=1 b=2 c=[ 3, 4 ] e come vedremo i parametri 3 e 4 verranno raccolti dentro il parametro c stto forma di array

// proviamo ad utilizzarlo come raccolta di parametri in eccesso
function showName(firstname, surname, ...titles){
    console.log(firstname + " " + surname);// elio castels dara questo 
    console.log(titles[0])// qui ci dara il primo elemento dell'indice dei titles che appunto sara "eroe"
    console.log(titles[1])// qui ci dara il secondo elemento dell'indice dei titles che sara "bello"
    console.log(titles.length) // qui mi dira di quanti elementi e formato il titles quindi "2 elementi"
}
showName("elio","castels","eroe","bello")

//spread 
//prende un elemento complesso che sia un array o un oggetto e lo scompone in singoli elementi
let arr1 = [1,-2,3,4];
let arr2 = [8,3,-8,1];
console.log(arr1);// giustamente mi dara [ 1, -2, 3, 4 ]
console.log(...arr1);//dara questo 1 -2 3 4 non sono piu dentro un array ma isingoli valori 
//a cosa ci serve questo ad esempio usando la funz math.max mettendo x parametri di avere il numero massimo
console.log(Math.max(...arr1,...arr2));// risultato 8 quindi una volta scomposti i 2 array mi trovera il singolo risultato piu grande di tutti e 2 gli array

// vediamo come si comporta lo spread con gli array
let nomi = ["Fabio","marco","luca","giorgio"]
showName(nomi);// in questo caso tutti gli elementi di nomi verrebbero posizionati dentro il primo elemento di Showname sarebbe showName(firstname Fabio,marco,luca,giorgio, gli altri non definiti undefined)
//se mettessi lo spread guardate
showName(...nomi); // mi inserira tutti i valori 
//Fabio marco
//luca
//giorgio
//2
// seguendo i console log di sopra

// possiamo unire anche piu array 
let newArr = [ ...arr1, ...arr2 ] // in questo modo stiamo creando un nuovo array con i valori di arr1 e arr2
console.log(newArr); //infatti come vedete avro tutti i valoru in un nuovo array
//[
//    1, -2,  3, 4,
//    8,  3, -8, 1
//  ]

// lo spread puo essere utilizzato anche sugli oggetti vediamo come 
let obj1 = {
    type: "batmobile",
    price: 200,
    owner: "elio"
}
let obj2 = {
    type: "batmobile",
    price: 300,
    color: "black"
}

console.log(obj1);//{ type: 'batmobile', price: 200 } 
console.log({...obj1});//in questo modo creiamo un nuovo oggetto ponendo le {} dentro il console log con lo spread operator
//posso anche modificare direttamente una proprieta ddell'oggetto 
console.log({ ...obj1, ...{price:2000}});//{ type: 'batmobile', price: 2000 } il nuovo ogetto invece di type 200 avra type 2000

// creaiamo un nuovo oggetto con entrambi le proprietà dei 2 e aggiungiamo una nuova proprietà
let newObj = { ...obj1, ...obj2, seat:3, ...{price:2000}};
console.log(newObj);//{ type: 'batmobile', price: 2000, color: 'black', seat: 3 } come possiamo vedere avremo elementi del primo elementi del secondo piu la nuova proprietà più la proprietà sovrascritta
