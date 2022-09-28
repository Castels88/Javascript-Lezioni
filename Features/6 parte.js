//Try - Catch - Finally
//questi sono dei metodi per gestire gli errori in javscript
//Try
function sayHelp(){
    console.log(`help me ${hero.name}`);} // avro un errore perche sto richiamanda la prorietà {hero.name ma non è stata dichiarata }

function sayHelp(){
    try { // stiamo chiedendo di provare questo errore
        console.log(`help me ${hero.name}`);
        //throw new SyntaxError("dati incompleti:manca name") // col il throw sto ordinando a java che in case di errore mi deve  stampare questa sintassi
        // risultato message dati incompleti:manca name
        
    } catch (err){ // con catch sto andando a ordinare a java di raccogliere gli errori in queste 3 categorie
        console.log(`name`,err.name); //ReferenceError "ilnome dell'errore"
        console.log(`message`,err.message);// message hero is not defined "il messaggio di errore"
        console.log(`stack`,err.stack); //stack ReferenceError: hero is not defined "la fase in cui avviene l'errore"

        // possiamo anhe porre condizioni in caso di errori specifici
        if (err instanceof ReferenceError){
            console.log("referenceError");//referenceError
        }
            else {
                throw err;
            }
    }
}

sayHelp();
