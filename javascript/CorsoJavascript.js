/*
PREREQUISITI: INSTALLARE NODE.JS
*/

//Esempio 1: stampare una stringa di testo a schermo.
/*
Esercizo di base che stampa a schermo la stringa di testo "ciao". 
La funzione console.log, prende come input una stringa (nell'esempio
la stringa "ciao" e produce una stampa a schermo della stessa.)
 */
/*
const prompt = require('prompt-sync')();
const str = prompt('Enter a string');
console.log("ciao" + str);
process.exit(0)

/*
Per usare il prompt:

npm install prompt-sync

*/

//const prompt = require('prompt-sync')();

/*
const str = prompt('Enter a string: ');
console.log("Hai inserito " + str);
process.exit(0);
*/
const prompt = require('prompt-sync')();
/*
var a;
var b;
a = prompt("Inserisci primo numero:")
b = prompt("Inserisci secondo numero:")
c = a + b
console.log("La somma vale " + c) 
*/


/*
var a;
var b;
a = prompt("Inserisci primo numero:")
b = prompt("Inserisci secondo numero:")
a1 = parseInt(a)
b1 = parseInt(b)
c = a1 + b1
console.log("La somma vale " + c) 
*/


a = prompt("Inserisci primo numero:")
b = prompt("Inserisci secondo numero:")
c = prompt("Inserisci operatore:")
a1 = parseInt(a)
b1 = parseInt(b)
if(c=="+")
	d = a1 + b1
if(c=="-")
	d = a1 - b1

console.log("Risultato " + d) 
process.exit(0)




/*
ESERCIZIO: crea una variabile, chiamale sStringaDaStampare, copia nella variabile un 
messaggio e poi visualizza a schermo il messaggio richiamando la funzione console.log
*/


//Esempio num. 2
/*
var A;
var B;
A = 3;
B = "buongiorno a tutti";
console.log("Il tipo della var A e' " + typeof(A) + "\n");
console.log("Il tipo della var B e' " + typeof (B) + "\n");
*/


/*ESERCIZIO Crea una variabile e copiaci dentro un numero. Stampa il tipo della variabile. 
Nella stessa variabile copiaci dentro una stringa. Verifica che il tipo della
variabile � cambiato.
*/

/*
var iPosizione;
var sMiaStringa;
sMiaStringa = "paperino"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
						console.log("La z non c'e' nei primi 4 caratteri")
else
	console.log("La z c'e' nei primi 4 caratteri");
*/


/*ESERCIZIO: scrivere un programma che data una stringa (es. sMiaStringa = "buonasera")
verifica se la stringa contiene la lettera f*/

/*
sMiaStringa = "buonasera";
iPosizione = sMiaStringa.indexOf("f");
if(iPosizione>=0)
	console.log("La stringa " + sMiaStringa + " contiene la f.");
else
	console.log("La stringa " + sMiaStringa + " NON contiene la f.");
*/


/*
var iPosizione;
var sMiaStringa;
sMiaStringa = "ZanzAra"
sMiaStringa = sMiaStringa.toLowerCase();
console.log(sMiaStringa);
*/
/*

iPosizione = sMiaStringa.indexOf("z",5);
if(iPosizione == -1)
	console.log("La z non c'e'")
if(iPosizione >= 0)
	console.log("La z c'e'");
*/


"ciao;buonasera;buonanotte;"

/*ESERCIZIO: scrivere un programma che data una stringa (es. sMiaStringa = "buonasera")
verifica se la stringa contiene la lettera f nei primi 4 caratteri*/


/*ESERCIZIO: scrivere un programma che data una stringa (es. sMiaStringa = "buonasera")
verifica se la stringa inizia con la B*/

/*ESERCIZIO: il metodo indexOf prende un secondo parametro facoltativo 

iPosizione = sMiaStringa.indexOf("z",5)

In questo caso la ricerca della lettera z comincia dal quinto carattere.
*/



 
/*
sMiaStringa = "paperino"
iLenStringa = sMiaStringa.length
console.log("Hai inserito la stringa " + sMiaStringa + " lunga " + iLenStringa)
iPosizione = sMiaStringa.indexOf("z");
if(iPosizione == -1)
	console.log("La z non c'e'")

if(iPosizione >= 0)
	console.log("La z c'e'");
*/


/*ESERCIZIO: scrivere un programma che data una stringa (es. sMiaStringa = "buonasera")
verifica se la stringa contiene la lettera f dal sesto carattere in poi. Se la stringa �
pi� corta di 4 (es. cane) stampa a schermo direttamente l'esito negativo.*/


/*ESERCIZIO: utilizzando il metodo indexOf scrivere un programma che verifica se la 
stringa termina con una vocale. Indizio: usa la lunghezza della stringa*/

/*

function TerminaConLettera(sStringa,sLettera)
{
	lunghezzaStringa = sStringa.length;
	lenDaCercare = sLettera.length;
	iPos = sStringa.indexOf(sLettera, lunghezzaStringa -lenDaCercare);
	if(iPos == -1)
		return 0;
	else
		return 1;
}
/*
var iRet;
iRet = TerminaConLettera("paperino","a");
*/
/*
function TerminaGruppoLettere(sStringa,vArrayLettere)
{
	iLenVect = vArrayLettere.length;
	console.log("Mi hai passato un vettore lungo " + iLenVect);

	for(var ii=0;ii<iLenVect;ii++)
	{
		//Devo verificare che sStringa non termina con nessuna delle lettere del vettore
		iRet = TerminaConLettera(sStringa,vArrayLettere[ii]);
		if(iRet == 1)
		{
			console.log("Ho trovato " + vArrayLettere[ii])
			return 1;
		}
	}
	return 0;
}
/*
var oPersona={nome:"Giulio", Cognome:"Cesare", eta:32}
console.log(oPersona.eta);
function Person(nome, Cognome, eta) {
  this.nome = nome;
  this.cognome = Cognome;
  this.eta = eta;
}
vMiaPersona = new Person("Mario","Rossi",37)
console.log(vMiaPersona.eta)
*/
/*
var sLettereVect = ["gmail.com","gmail.it","libero.it"];
iValue = TerminaGruppoLettere("andrea.dimitri@gmail.it",sLettereVect);
console.log("Ritorno: " + iValue)
*/


/*
Voglio scrivere una funzione che se PER ESEMPIO gli passo "PAPEROGA" e un insieme di lettere
qualunque "a" "c" "f" 
*/
/*
function TerminaGruppoLettere
*/






/*
var iRet;
var sMiaStringa = "caciocavalloGFR";
iRet = TerminaConLettera(sMiaStringa,"a");
if(iRet == 0)
	iRet = TerminaConLettera(sMiaStringa,"e");
	if(iRet == 0)
		iRet = TerminaConLettera(sMiaStringa,"i");
		if(iRet == 0)
			iRet = TerminaConLettera(sMiaStringa,"o");
			if(iRet == 0)
				iRet = TerminaConLettera(sMiaStringa,"u");
if(iRet == 0)
	console.log("Non termina con vocale")
else
	console.log("Termina con vocale")

*/






/*
var sMiaStringa = "caciocavallo"
var sMiaStringa2 = "screen"
var lunghezzaStringa = sMiaStringa.length
iPosizionea = sMiaStringa.indexOf("a", lunghezzaStringa -1);
if(iPosizionea == -1)
{
	console.log("non termina con la vocale a");
	iPosizionea = sMiaStringa.indexOf("e", lunghezzaStringa -1);
	if(iPosizionea == -1)
	{
		console.log("non termina con la vocale e");
		
	}
	else{
		console.log("termina con una vocale");
	}
}
else{
    console.log("termina con una vocale");
}
*/






//***************
//Esempio num. 2
/*
Sostituire � con \u00E8 per ottenere la e accentata stampata bene.
*/
/*
var A;
console.log("Il tipo della var A \u00E8 " + typeof (A) + "\n");
A = 3;
console.log("Il tipo della var A \u00E8 " + typeof (A) + "\n");
A = "ciao a tutti";
console.log("Il tipo della var A \u00E8 " + typeof (A) + "\n");
A = null;
console.log("Il tipo della var A \u00E8 " + typeof (A) + "\n");
A = 3.2;
console.log("Il tipo della var A \u00E8 " + typeof (A) + "\n");
A = Boolean(10 > 9);
console.log("Il tipo della var A \u00E8 " + typeof (A) + "\n");
*/






//***************
//Esempio num. 3
/*
Prendiamo l'esempio 2 e applichiamo l'operazione di somma. Vediamo cosa succede
*/
/*
var A;
console.log("Il tipo della var A \u00E8 " + typeof (A) + ". Il suo valore \u00E8 " + A + "\n");
A = 3;
A = A + 1;
console.log("Il tipo della var A \u00E8 " + typeof (A) + ". Il suo valore \u00E8 " + A + "\n");
A = "ciao a tutti";
A = A + 1;
console.log("Il tipo della var A \u00E8 " + typeof (A) + ". Il suo valore \u00E8 " + A + "\n");
*/


//*************
//Esempio num 4
/*
La propriet� str.length si applica alle variabili di tipo stringa. Che succede per le altre variabili?
*/
/*
var A;
console.log("Il tipo della var A \u00E8 " + typeof (A) + ". Il suo valore \u00E8 " + A + "\n");
A = "ciao a tutti";
console.log("Il tipo della var A \u00E8 " + typeof (A) + ". Il suo valore \u00E8 " + A + ". La sua lunghezza " + A.length + "\n");
A = 3;
console.log("Il tipo della var A \u00E8 " + typeof (A) + ". Il suo valore \u00E8 " + A + ". La sua lunghezza " + A.length + "\n");
*/


//**************
//Esempio num. 5
/*
var A;
A = [2, 32, 3, 21];
console.log("Il tipo della var A \u00E8 " + typeof (A) + ". Il suo valore \u00E8 " + A + ". La sua lunghezza " + A.length + "\n");
console.log("Il valore di A[2]: " + A[2] + "\n");
*/
/*
var oPersona={nome:"Giulio", Cognome:"Cesare", eta:32};
console.log("Il tipo della var oPersona \u00E8 " + typeof (oPersona) + ". Il suo valore \u00E8 " + oPersona + ". La sua lunghezza " + oPersona.length + "\n");
console.log("Il nome di oPersona \u00E8: " + oPersona.nome + "\n");
*/


//*************************************
/*
The new operator lets developers create an instance of a user-defined object 
type or of one of the built-in object types that has a constructor function.
*/
//Esempio
/*
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
row = "ciao;andrea;mario"
const values = row.split(";");
console.log(values[0]);
*/



//ESEMPIO user defined objects (person) and nested user defined objects (car)
/*
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
var car2 = new Car('Nissan', '300ZX', 1992, ken);
*/

/*
Esercizio sul ciclo FOR e sull'IF
*/
/*
function VerificaMail(string)
{
	Lstring = string.length;
	for(i=0; i < Lstring; i++)
	{
		if (string[i] == '@')
		 return 1;
		
		
	}
	return 0;
}


var sMail = "ciaociao";
  r = VerificaMail(sMail);
if(r==1)
	console.log("l'email contiEne una @");
else
	console.log("l'email non contiene una @");
*/







/*
var sMail = "ciaociao";
var iNumero = 0;

len = sMail.length;
console.log(len);
na=0;
for (var i = 0; i < len; i++)
{
    if(sMail[i]=='a')
	{
		na=na+1;
	}
	
}
 console.log("Il numero di lettere a e " + na);

*/







/*
Esercizio sul ciclo FOR e sull'IF con richiamo di funzione
*/
/*
function VerificaLunghezza(sStringToValidate) {

    var nLunghezzaMail;
    nLunghezzaMail = sStringToValidate.length;
    if (nLunghezzaMail >= 10) {
        return true;
    }
    else {
        return false;
    }
}

function CalcolaTeoremaDiPitagora(dCateto1, dCateto2)
{
    dCateto1 = dCateto1 * dCateto1;
    dCateto2 = dCateto2 * dCateto2;

    dIpotenusa = dCateto1 + dCateto2;
    dIpotenusa = Math.sqrt(dIpotenusa);
    return dIpotenusa;
}


var sMail = "b0uon7a@no3t.te";
bRisultatoControllo = VerificaLunghezza(sMail);
if (bRisultatoControllo == true)
{
            console.log("La  mail e' corretta");
}
else
    console.log("La mail non va bene");

var miaIpotenusa = CalcolaTeoremaDiPitagora(3.5, 4);
console.log(miaIpotenusa);
*/








//********************************
//ALGORITMO DI EUCLIDE
/*
var A;
var B;
var resto;
console.log("Ciao\n");
A = 50;
B = 30;

resto = A % B;
while (resto != 0)
{
    A = B;
    B = resto;
    resto = A % B;
}
console.log("Il MCD � " + B);
*/










//Esempio num. 6
/*
function GetGiornoDellaSettimana()
{
    var d = new Date();
    var nGiornoDellaSettimana = d.getDay();
    return nGiornoDellaSettimana;
}


function GetMeseCorrente()
{
	sddfsdfsfddf
}


var nGiornoOggi;
nGiornoOggi = GetGiornoDellaSettimana();


var day;
switch (nGiornoOggi)
{
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    default:
        console.log("Si e' verificato un errore");
        break;
}
console.log("Buon " + day);
*/





//ESERCIZIO NUMERO 7   *************************
/*
var sMail = "buonanotte";
bRisultatoControllo = ValidateEmail(sMAil);
if (bRisultatoControllo == true) {
    console.log("La  mail e' corretta");
}
else {
    console.log("La mail non va bene");
}

function ValidateEmail(sStringToValidate) {

    var nLunghezzaMail;

    nLunghezzaMail = sStringToValidate.length;


    if (nLunghezzaMail >= 10) {

        return true;
    }
    else {

        return false;
    }
}
*/


//Esempio numero 8: verificare una password che contiene un numero ed ha una lunghezza minima
/*

    function VerificaPassword(sPasswordDaVerificare)
    {
        //Calcoliamo la lunghezza della stringa
        var nLenStringa;
        var nNumeroOk;
        nLenStringa = sPasswordDaVerificare.length;
        if(nLenStringa<8)
        {
            console.log("La password deve essere lunga almeno 8");
            return 0;
        }
        else
        {
            nNumeroOk = VerificaNumero(sPasswordDaVerificare);
            if(nNumeroOk==0)
            {
                console.log("La password deve contenere almeno un numero");
                return 0;
            }
            else
            {
                return 1;
            }
        }

        return 0;
    }

var nEsito;
nEsito = VerificaPassword("Garibaldi");
if(nEsito==0)
{
    console.log("password errata");
}
else
{
    console.log("password corretta");
}
*/









//Esempio 6: validare una mail string con una regular expression
/*
ValidateEmail("andrea.dimitri@uniroma2.it");
function ValidateEmail(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
        console.log("Hai inserito un email address valido.");
        return true;
    }
    else {
        console.log("Attenzione! Hai inserito un email address non valido.");
        return false;
    }
}
*/

/*Esercizio sulle regular expression*/
/*
ValidateSaluto("ciao");
function ValidateSaluto(sStringToValidate)
{
    var sStringaDiSaluto = "buongiorno|buonasera|buona giornata|ciao";
    if (sStringToValidate.match(sStringaDiSaluto)) {
        console.log("Hai inserito un saluto valido.");
        return true;
    }
    else {
        console.log("Attenzione! Hai inserito un saluto non valido.");
        return false;
    }
}
*/

/*
CreatePrompt();

function GestisciRisultato(sStringaInserita)
{
    console.log(sStringaInserita);
}

function CreatePrompt()
{
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'OHAI> '
    });

    rl.prompt();

    rl.on('line', (line) => {
        GestisciRisultato(line);
        process.exit(0);
    });

}
*/



/*

//input
var sStringaIniziale = "buon5giorno";
var sLetteraDaCercare = 'n';
var nNumeroTentativi = 0;



CreatePrompt();



function CreatePrompt()
{
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'MioPrompt> '
    });

    rl.prompt();

    rl.on('line', (line) => {
        var nEsitoVerifica;
        nEsitoVerifica = VerificaPassword(line);
        if(nEsitoVerifica==0)
        {
            //Password sbagliata
            nNumeroTentativi = nNumeroTentativi + 1;
            if(nNumeroTentativi < 3)
            {
                console.log("Password errata. Riprova (hai ancora " + (3-nNumeroTentativi) + " tentativi)");
                rl.prompt();
            }
            else
            {
                console.log("Numero tentativi terminato. Bye!");
                process.exit(0);
            }

        }
        else
        {
            //Password giusta
            console.log("Password corretta");
            process.exit(0);
        }
        
    }
    );

}

    var Password = "Garibaldi3";
    Password[9] == '3'  
    var NumeroMio = 3;

    function VerificaNumero(sStringaDaVerificare)
    {
        //Calcoliamo la lunghezza della stringa
        var nLenStringa;
        nLenStringa = sStringaDaVerificare.length;
        for(var i=0;i<nLenStringa;i++)
        {
            if( (sStringaDaVerificare[i]>='0')  && (sStringaDaVerificare[i]<='9'))
            {
                return 1;
            }       
        }
*/

/*
function VerificaStringa(sStringaDaVerificare)
{
    var i;
    //Calcoliamo la lunghezza della stringa
    var nLenStringa;
    nLenStringa = sStringaDaVerificare.length;
    
    //Come funzionano i numeri
    var nNumero = 1;
    var sNumero = '1';
    var c = sNumero + 1;
    console.log(c);

    c = nNumero + 1;
    console.log(c);

    //Facciamo un ciclo for per vedere se la stringa contiene cLettera
    for(i=0;i<nLenStringa;i++)
    {
        console.log("Verifico la lettera " + i);
        if((sStringaDaVerificare[i]>='0') && (sStringaDaVerificare[i]<='9'))
        {
            console.log("Ho trovato il numero " + sStringaDaVerificare[i]);
            return;
        }



    }

    console.log("Non ho trovato il numero");
    return;
}
*/



/*
Esercizi sulle arrow function
*/
/*
hello1 = function() {
  return "Hello World!";
}
console.log("Il tipo di hello1: " + typeof(hello1))
console.log("Il valore di hello1 e': " + hello1)

function hello2() {
  return "Hello World!";
}
console.log("Il tipo di hello2: " + typeof(hello2))
console.log("Il valore di hello2 e': " + hello2)

hello3 = () => {
  return "Hello World!";
}
console.log("Il tipo di hello3: " + typeof(hello3))
console.log("Il valore di hello3 e': " + hello3)
*/



/*
Esercizi:
1) fare una funzione ValidatePassword con il ciclo for dopo aver definito requisiti semplici (almeno un numero e almeno una lettera)
2) ripetere la stessa funzione con requisiti complessi (la password devessere lunga almeno 8, poi contenere almeno uno tra !?&$ etc.)

3) cifrario di Cesare: studiarlo e scrivere le funzioni cifra e decifra 

4) fare un programma in cui da prompt vengono fatte due domande:
inserisci la mail 
inserisci la password
si validano mail e password e se non sono buone si ripropone il prompt fino a tre volte.

5) studiare le regular expressione
6) eseguire gli esercizi sulle regular expression
7) scindere nelle sue componenti elementari la regular expression della mail

*/

















/*
function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
        //console.log("Hai inserito un email address valido.");
        return true;
    }
    else {
        //console.log("Attenzione! Hai inserito un email address non valido.");
        return false;
    }
}


var bRisultatoControllo;
bRisultatoControllo = ValidateEmail("andrea.dimitri@uniroma2.it");
if (bRisultatoControllo == false)
{
    console.log("Attenzione, mail errata");
}
*/






/*
npm install --save sound-play
*/
/*
function soundError() {
    const sound = require('sound-play')
    sound.play('C:/Users/andrea/Desktop/javascript/esempio.wav');
}
soundError();
*/

/*
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);
*/

/*
var d = new Date();
var n = d.getHours();
var giorno = d.getDay();
console.log(n);
*/

/*
CreatePrompt();

function CreatePrompt
{
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
}
*/


/*L'OPERATORE new SI USA QUANDO SI VUOLE CREARE L'ISTANZA DI UN OGGETTO CREATO A PARTIRE DA UNA FUNZIONE.
Metti caso di volere creare un tipo di oggetto per le macchine. 
Vuoi che questo tipo di oggetto si chiami car, e vuoi che abbia queste propriet�: 
make (brand, marca), 
model (modello) e 
year (anno). 
Per fare questo, potresti scrivere la seguente funzione:
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Adesso puoi creare un oggetto chiamato myCar in questo modo:

var mycar = new Car("Eagle", "Talon TSi", 1993);

*/


//Esempio 7 appartenenza ad un insieme
/*
var A = ['d', 'c', 's', 44, 12];
var B;



B = 'c';
appartiene(B, A);

B = 44;
appartiene(B, A);

B = 20;
appartiene(B, A);


B = 'l';
appartiene(B, A);


function appartiene(valore_da_esaminare, array_di_riferimento) {
    for (i = 0; i < array_di_riferimento.length; i++) {
        if (valore_da_esaminare == array_di_riferimento[i])
        {
            console.log("Il valore " + valore_da_esaminare + " appartiene all'insieme");
            return true;
        }
    }
    console.log("Il valore " + valore_da_esaminare + " NON appartiene all'insieme");
    return false;
}
*/


/* Esempio 8   calcolo fattoriale con procedura ricorsiva.
var risultato = fattoriale(5);
console.log(risultato);


function fattoriale(num) {

    if (num == 0)
    {
        return 1;
    }
    else
    {
        return (num * fattoriale(num - 1));
    }
}
*/



//QUICKSORT
/*
var n = 5;
var arr = [4, 2, 6, 9, 2];

StampaVect(arr, 0, 4);

//swap(arr, 2, 4);


partition(arr, 0, n - 1)
StampaVect(arr, 0, 4);



//quickSort(arr, 0, n-1); 
//StampaVect(arr, 0, 4);
*/




/*
Creo una funzione stampa() perch� console.log ogni volta va accapo
Uso process.stdout.write ma vuole come argomento una stringa
*/
/*
function StampaVect(vectToPrint, iStart, iEnd) {
    var sTemp;
    for (var i = iStart; i <= iEnd; i++) {
        sTemp = "" + vectToPrint[i] + " ";
        process.stdout.write(sTemp);
    }
    process.stdout.write("\n");
}

function swap(arr, i, j) {
    var temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
*/

/* This function takes last element as pivot, 
   places the pivot element at its correct 
   position in sorted  array, and places 
   all smaller (smaller than pivot) to left 
   of pivot and all greater elements to  
   right of pivot */
/*
function partition(arr, l, h) {
    var x = arr[h];
    var i = (l - 1);

    for (var j = l; j <= h - 1; j++) {
        if (arr[j] <= x) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, h);
    return (i + 1);
}


/* A[] --> Array to be sorted,  
l --> Starting index,  
h --> Ending index */
/*
function quickSort(A, l, h) {
    if (l < h) {
        // Partitioning index 
        var p = partition(A, l, h);
        quickSort(A, l, p - 1);
        quickSort(A, p + 1, h);
    }
}
*/

/*
//ValidateSaluto("ciao");
function ValidateSaluto(sStringToValidate) {

    var sStringaDiSaluto = "^(buongiorno|buonasera|buona giornata|ciao)$";
    if (sStringToValidate.match(sStringaDiSaluto)) {
        console.log("Hai inserito un saluto valido.");
        return true;
    }
    else {
        console.log("Attenzione! Hai inserito un saluto non valido.");
        return false;
    }
}
*/




/*

function csvToArray(str, delimiter = ",") {
// slice from start of text to the first \n index
// use split to create an array from string by delimiter
const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
// slice from \n index + 1 to the end of the text
// use split to create an array of each csv value row
const rows = str.slice(str.indexOf("\n") + 1).split("\n");
// Map the rows
// split values from each row into an array
// use headers.reduce to create an object
// object properties derived from headers:values
// the object passed as an element of the array
const arr = rows.map(function (row) {
const values = row.split(delimiter);
const el = headers.reduce(function (object, header, index) {
object[header] = values[index];
return object;
}, {});
return el;
});
// return the array
return arr;
}

sStringa = "name,role,country
Sarene,Help Desk Operator,Thailand
Olvan,Nurse Practicioner,China
Janos,Cost Accountant,China
Dolph,Assistant Manager,China
Ariela,Database Administrator I,Azerbaijan
Lane,Environmental Tech,Indonesia
Griselda,Senior Quality Engineer,Portugal
Manda,Physical Therapy Assistant,Brazil
Leslie,Information Systems Manager,Japan
Aleen,Cost Accountant,Canada";
*/