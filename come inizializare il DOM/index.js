// come prima cosa abbiamo bisogno di un HTML 

const html = document.documentElement; 
// in questo modo richiamo il tag html
const body = document.body; 
// in questo modo richiamo il tag body
const head = document.head;
//in questo modo richiamo il tag head

console.log(html);
console.log(body);
console.log(head);

//dobbiamo tenere a mente che esiste una gerarchia del
//html noi abbiamo 3 grandi genitori
// 1 HTML
// 2 head
// 3 body
// questi 3 genitori all'interno hanno dei figli
// ad esempio nel body tutti i tag saranno figli del body
//i tag avranno dei figli che saranno discendenti
//del body

// posso vedere quanti figli e discententi ho con
// 2 comandi

console.log(document.body.childNodes.length);
// in questo caso ne avro 9 perche prendo i discendenti
// dei tag
console.log(document.body.children.length);
// in questo caso ne avro solo 3 html head e body

//esistono ddei metodi per cercare direttamente genitori e figli 
console.log(`firstChild`,document.body.firstChild);
// con questo vediamo il primo figlio del genitore body
console.log(`lastChild`,document.body.lastChild);
// in questo modo l'ultimo figlio del genitore body
console.log(`nextSibling`,document.body.nextSibling);
//questo permette di vedere in riferimento all'oggetto che
//vogliamo esamirare i fratelli che stanno prima e dopo
// in questo esempio stiamo esaminando la head i suoi fratelli
//saranno 1 HTML e 2 Body 
console.log(`previousSibling`,document.body.previousSibling);

console.log(`parentNode`,document.body.parentNode);
// con questo possiamo vedere il genirotre dell elemento che 
//vogliamo esaminare

///////////////////////////////


//Cerchiamo gli elementi nel DOM
//tramite dei metodi possiamo cercare elementi 

//il PRIMO metodo è get element by ID
//si crea una variabile prefiribilemnte col nome
//dell'elemento che cerchiamo
let paragrafo = document.getElementById(`p-elem`)
console.log(`p-elem`,paragrafo);

//il SECONDO 
//in questo caso posso andare a ricercare tutti i tag di 
// tipo p 
const pEl = document.querySelectorAll(`p`)
console.log(`pEl`,pEl);

//in questo caso sto andando a ricercarcare si il tag p
// ma nello specifico quello con l'id p-elem
const pElId = document.querySelectorAll(`#p-elem`)
console.log(`pEl`,pEl);


//TERZO metodo
// in questo modo sto andando a ricercare tutti i tag di
// tipo li
const liEl = document.querySelector(`li`)
console.log(`liEl`,liEl);
// query selector permette di usare un ulteriore funzionalita
//con close andiamo a ricercare l'elemento in riferimento
// a quello selezionato che sara il genitore o il caso il fratello
const ulClosest = liEl.closest(`ul`)

// COME MODIFICARE UN NODO
//esistono 3 metodi 
console.log(`nodeType`,liEl.nodeType)
// ci da possibilita di trovare il tipo di nodo
console.log(`nodeName`,liEl.nodeName)
// ci da possibilita di vedere il nome del nodo
console.log(`tagName`,liEl.tagName)
// ci da possibilita di vedere il nome del tag di nodo

console.log(`data`,liEl.data)
// ci permette di vedere il valore all' interno di 
//quel nodo

//con innerHTML possiamo andare ad aggiungere all'interno
// del nostro tag il contenuto che qui abbiamo inserito
liEl.innerHTML = `<p>Prova testo</p>`;


// ricarcare attributi o modificarli 
liEl.setAttribute(`role`, `test`)
console.log(`hasAttribute`,liEl.hasAttribute(`role`))
console.log(`getAttribute`,liEl.getAttribute(`role`))
console.log(`removeAttribute`,liEl.removeAttribute(`role`))

// possiamo settare degli attributi definiti dall'utente
//anteponedo la parola data all'attributo
liEl.setAttribute(`data-test`, `test`)
console.log(`datset`,liEl.dataset.test)

// vediamo come creare nuovi elementi nel DOM

const textNode = document.createTextNode(`un nodo testuale`)
//in questo modo creiamo un testo
const newLIneNode = document.createElement('li')
// in questo modo creiamo un un tag nel nodo
newLIneNode.innerText = `un nuovo nodo`
// in questo modo popoleremo il tag newLIneNode
// con questo testo

liEl.append(textNode);//sto dicendo all'elemento li di
//appendersi al testo di textNode. con .prepend si mette dopo 

liEl.after(newLIneNode);//in questo modo gli 
// sto dicendo di mettersi dopo il newLIneNode con .before
// si metterà dopo 

//.remove lo potremmo rimuovere dall elemento
//.cloneNode potremmo clonarli e copiarlo da un altra parte
//.replaceWith potremmo rimpiazzare un nodo con un altro

// con questo metodo dico dove mettere e cosa mettere
//all'elemento liEl 
liEl.insertAdjacentHTML('before', `<p> nuovo testo</p>`);


// le classi 

//allora per aggiungere delle classi al JS 
//e queste classi di solito sono quelle dell HTML
//come prima cosa si crea la classe 
//cosi la creo
liEl.className = 'my-class';

//cosi l'aagiungo alla mia lista di classi che potro 
//gestire con .add aggiungo con .remove rimuovo 
liEl.classList.add('my-class');

//posso anche personalizzarle inline con css
// in questo caso gli ho dato un backgroundColor verde
liEl.style.backgroundColor = 'green';

// posso lanciare un comando che mi rida tutti i valori
// CSS che sono gia stati attivati
const computerStyle= getComputedStyle(document.body);
console.log(computerStyle);
// in questo modo mi ritorneranno tutti i valori
// a cui e stato applicato il CSS


//gli eventi come far interagire JS con HTML


