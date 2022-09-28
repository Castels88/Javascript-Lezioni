//Altre tecnologie interessanti per memorizzare i dati sul browser sono LocalStorage e SessionStorage.
//LocalStorage e SessionStorage. hanno diversi metodi andiamo a vederne alcuni 
localStorage.clear()//consente di cancellare interamente il contenuto del localStorage

localStorage.setItem("hero","batman")//oppure permettono di settare degli item seguendo il principio 
//("chiave","valore")

localStorage.getItem("hero")//con il get possiamo andare a prelevare la chiave di valore che 
//era stata settata nel setItem in questo caso ("hero")

removeItem("hero");//in questo modo vado a rimuovere la chiave del setItem e di conseguenza il valore ("batman")

clear()//rimuove tutti gli elementi

Key(index)//lettura della chiave nell'index

console.log(localStorage.getItem("hero"))//avro come risultato il nostro localStorage.hero

//potremmo anche ciclare tutte le chiavi 
Object.keys(localStorage).forEach((key)=>
console.log(`${key}:${localStorage.getItem(key)}`));