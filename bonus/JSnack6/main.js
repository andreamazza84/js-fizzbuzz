//Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var Num = parseInt(prompt("Inserisci un numero N"));
var numbers = [];
var i = 0;
while(Num > 0){
  numbers[i] = Math.pow((i+1), 3);
  i++
  Num--;
}
prompt("Cubo dei primi N numeri = " + numbers);
