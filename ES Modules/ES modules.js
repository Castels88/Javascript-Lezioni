// e una procedura che ci permette di importare dati da un file ad un altro questi file
// saranno chiamati moduli 
import defElement, {square, diag as diagonal} from "./lib1" 
//in questo modo sto ordinando di 
// importare queste funzioni dal file lib1.js
// as diagona vuol dire dare un alias a quel elemento 
console.log(square(11));//121
console.log(diag(4 , 3))//5
console.log(defElement())//"sono un elemento di default"
//posso anche importare un intero modulo facendo cosi 
import * as lib from `./lib1`;

// di solito export e import lavorano sempre in maniera sincrona 
// ma volendo possiamo anche stabilire di avere alcune in maniera asincrona
async function dynamicImport(){
    const {hello} = await import(`./lib2`);
    console.log(hello)

}

dynamicImport()