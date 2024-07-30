const prompt = require('prompt-sync')();

var a = prompt("Inserisci primo numero: ")
var b = prompt("Inserisci secondo numero: ")
var c = prompt("Vuoi aggiungere un altro numero: ")

if(c == 'si')
{
    x = prompt('Inserisci unaltro numero: ')
}


var a1=parseInt(a)
var b1=parseInt(b)


x1=parseInt(x)
d = a1+b1+x1
console.log('La somma e: ' + d)




