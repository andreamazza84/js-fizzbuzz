// Stampa le potenze di 2 fino a 1000.

var pot = [];
var i = 0;
var num = 0;
while(num < 1000){
   num = Math.pow(2, (i+1));
   if(num > 1000){
     break
   }
   pot[i] = num;
   i++;
}

prompt("Potenze di 2 fino a mille " + pot);
