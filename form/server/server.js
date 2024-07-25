const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

var iPortaTcp = 4201;
var sIpAddress = "127.0.0.1"
app.listen(iPortaTcp,sIpAddress, () => console.log('API is running on http://' + sIpAddress + ':' + iPortaTcp));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/mansendfile', (req,res) => {
    console.log("mi hai chiesto la form di invio file");
    res.sendFile("sendfile.html",{root: './htdoc' });
});
        
// gestione della url mansendfile
app.post('/mansendfile', (req,res) => {
    pass_ricevuta = req.query.password;
    if (pass_ricevuta == "paperino")
        res.sendFile("<html> Bravo" + req.query.email + "<br>Sono pronto a ricevere il file</html>");
    else
    res.send("<html> Attenzione, password errata</html>");
    });

//pagina di invio della form
app.get('/formRegistrazione', (req,res) => {
    console.log("mi hai chiesto la form di registrazione");
    res.sendFile("form.html",{root: './htdoc' });
});

app.get('/gestisciDatiForm', (req, res) => {
    console.log(req.query.fname);
    response="<html> Buona serata " + req.query.fname 

    if(req.query.fsesso=="1")
        response+="<br>Sei un maschio"

    else
         response+="<br>Sei una femmina"
    response+="<br>La tua citta"  + req.query.fComune  
    response+="<br>Ti voglio bene</html>";
    res.send(response);
});

app.post('/gestisciDatiForm', (req, res) => {
    console.log(req.body.fname);
    response="<html> Buona serata " + req.query.fname 
    
    if(req.body.fsesso=="1")
        response+="<br>Sei un maschio"
    
    else
        response+="<br>Sei una femmina"
        response+="<br>La tua citta"  + req.body.fComune  
        response+="<br>Ti voglio bene</html>";
        res.send(response);    

});
