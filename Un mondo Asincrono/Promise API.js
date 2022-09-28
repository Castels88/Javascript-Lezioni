// le promise mettono a disposizione piu API o modi 
promise.all([ // permette di mettere piu promise attendere il risultato e tornare un array dei valori risolti,
//pero se una di queste promise va in errore il risultato della promise sara il risultato dell'errore
//quindi il vero risultato di tutto si ha solo se tutte le promise vengano risolte
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(console.log);

// Promise.resolve(value)//per rigettare un valore
// Promise.reject(error)// per far ritornare un valore

// Promise.allSettled(promise) // questa a mio parere è la migliore perche da tutti i risultati sia quelli della promise che i rejected
// Promise.race(promise)// ci dara il risultato della promise risolta per prima

// Promise.any(promise) // eseguirà le promise ritornera il risultato della prima trovata ma se tutte 
//falliscono di dara un errore di aggregazione dell'errore