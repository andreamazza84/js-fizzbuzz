// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento!

var numbers = [];
var x = 0;

for (var i = 0; i < 100; i++) {
  numbers[i] = i + 1;
  x =  numbers[i];
  if((x % 3 == 0) && (x % 5 == 0)) {
    numbers[i] = "FizzBuzz";
  }
  else if (x % 3 == 0) {
    numbers[i] = "Fizz";
  }
  else if (x % 5 == 0) {
    numbers[i] = "Buzz";
  }
}
alert("Ecco la lista dei numeri " + numbers);
