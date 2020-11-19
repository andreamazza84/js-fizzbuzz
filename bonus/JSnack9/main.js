//Calcola la somma e la media dei primi 10 numeri.

var sum = 0;
var avg = 0;

for (var i = 0; i < 10; i++) {
  sum += i+1;
}
avg = sum/(i);

alert("La somma dei primi 10 numeri è pari a: " + sum);
alert("La media dei primi 10 numeri è pari a: " + avg);
