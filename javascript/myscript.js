const prompt = require('prompt-sync')();

a = prompt("Inserisci primo numero: ")
b = prompt("Inserisci secondo numero: ")
c = prompt("Vuoi aggiungere un altro numero: ")

if(c == 'si')
{
    x = prompt('Inserisci unaltro numero: ')
}


a1=parseInt(a)
b1=parseInt(b)
x=parseInt(x)

if (typeof(x) == Number){
   d = a1+b1+c1
    console.log('La somma e: ', d)
}
else
   d = a1+b1
   console.log('La somma e: ', d)

console.log(typeof(a1))





