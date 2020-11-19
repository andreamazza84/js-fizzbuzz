// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var fourDigit = prompt("Inserisci un numero intero a 4 cifre");
var sum = 0;
// Sfrutto la proprietà delle stringhe
if(fourDigit.length != 4){
  alert("Inserire un numero di 4 cifre");
}
else{
  for (var i = 0; i < fourDigit.length; i++) {
    sum += Number(fourDigit[i]);
  }

  alert("La somma delle 4 cifre inserite è " + sum);  
}
