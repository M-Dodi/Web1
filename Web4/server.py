from flask import Flask, json,request
from myjson import JsonSerialize,JsonDeserialize
import sys

sFileAnagrafe = "./anagrafe.json"
api = Flask(__name__)

@api.route('/pippo', methods=['GET'])
def GestisciPippo():
    myresponse = request.get("https://www.google.it")
    return myresponse.text

@api.route('/addcittadino', methods=['Post'])
def GestisciAddCitadino():
    #prendi dati della richiesta
    content_type = request.headers.get('Content-Type')
    print("Ricevuta chiamata" + content_type)
    if content_type=="application/json":
        #prendiamo il json che ha mandato il client
        jRequest = request.json
        sCodiceFiscale = jRequest["codice fiscale"]
        print("Ricevuto" + sCodiceFiscale)
        print(jRequest)
        #carichiamo anagrafe
        dAnagrafe = JsonDeserialize(sFileAnagrafe)
        if sCodiceFiscale not in dAnagrafe:
            dAnagrafe[sCodiceFiscale] = jRequest
            JsonSerialize(dAnagrafe,sFileAnagrafe)
            jRespons = {"Error":"000", "Msg": "ok"}
            return json.dumps(jRespons), 200
        else:
            jRespons = {"Error":"001", "Msg": "codice fiscale gia in anagrafe"}
            return json.dumps(jRespons), 200
        
    #controlla che il cittadino non sia nella lista
    else:
        return"Errore,formato non riconosciuto",401
    

api.run(host="199.168.99.177",port=8080)




