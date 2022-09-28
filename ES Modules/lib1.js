// modulo libreria
// nei moduli al momento in cui mettero la parola chiave export davanti alla funzione
//rendero disponibile all'esterno questi stessi elementi
// ad esempio li posso importare nel file ES module.js
export const {sqrt} = Math
export function square(x){
    return x * x;
}
export function diag(x , y){
    return sqrt(square(x) + square(y));
}

export default() => "sono un elemento di default"
// in questo modo sto esportando piu elementi 
export{sqrt,square,diag}