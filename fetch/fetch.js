// serve a fare delle chiamate sul server 
// questa API consente di andare a fare delle chiamate di tipo http che permettono di prelevare o aggiungere
// dei dati sui server
//  //tramite la key fetch indichiare il server
fetch(`https://randomuser.me/api/?results=5`)
.then((response) =>{ // come nelle promise diamo un then con il valore response che e fisso 
    console.log(response);// il response conterra tutti i valori del server
    console.log(response.ok); // questo ci dirà se la risposta è andata a buon fine e la risposta sarrà true o false
    console.log(response.status);// questo ci dirà lo status del server risposta tipo 200 300 ecc
    return response.json();// in questo modo ci sara dato il risultato del body in modo JSON
    })
    .then((data) => console.log(data));

    const fetch = required(`node-fetch`)


//tramite Promise
function getPeoplePromise(){
    fetch(`https://randomuser.me/api/?results=5`)
    .then((response) => response.json())
    .then((response) => {
        const commits = response;
        commits.results.array.forEach((commit) => console.log(commit));
            
        })
    .catch(() => console.log(`errore`));
}

getPeoplePromise();

//Async 
async function getPeopleAsync(){
    try{
        const response = await fetch(`https://randomuser.me/api/?results=5`);
        console.log(response.headers.get(`content-type`));
        const commits = await response.json();
        commits.results.forEach((commit)=> console.log(commit));
    }catch(err){
        console.log("err async await");
    }
}
//potremmo anche customizzare la richiesta e aggiungere anche delle informazioni o dei dati 
// in questo casi si usa il metodo 

n  //Post 
const user = {
    name:"batman",
    partner:"robin",
};

async function addPeople(){
try{
    let response = await fetch(`https://randomuser.me/api/?results=5`,{
        method:`POST`, // indica il tipo di metodo in questo caso vogliamo postare qualcosa
        headers: { // qui indichiamo che vogliamo mettere degli headers
            'content-type': 'application/json;charset=utf-8',  // indichiamo che il contennuto del body sara json
        },
        body: JSON.stringify(user),
    });
    let results = await response.json();
    console.log(results.message);
} catch(e){
    console.log(e);
}
}

addPeople(); 

// qualore avessimo un form nel nostro html e volessimo prendere i dati e spedirli 
// nella nostra API possiamo 
//indicare il 
fetch (`indirizzo https://`,{ // indirizzo a cui inviare i dati
    method: 'POST', // metodo che ci permette di inviare i dati
    headers: { // l headers del nosstro form 
        'content-type': 'application/json;charset=utf8'
    },
    body: new FormData(fromElem) // con la key form data prendiamo il form e lo traduciano 
    //in un formato che il body possa gestirli e inviarlo alla nostra API
});

// url 

const url = new URL(`https://api.twitter.commits`);
console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);


