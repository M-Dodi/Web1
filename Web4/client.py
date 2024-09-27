import json, requests
import sys


base_url = "http://127.0.0.1:8080"


def RichiediDatiCittadino():
    nome = input("Inserisci nome cittadino")
    cognome = input("Inserisci cognome cittadino")
    dataNascita = input ("Inserisci data di nascita")
    codFiscale =input("Inserisci codice fiscale")
    jRequest = {"nome":nome,"cognome":cognome,"dataNascita":dataNascita,"codice fiscale":codFiscale}
    return jRequest

def CreaInterfaccia():
    print("Operazione disponibile")
    print("1. Iserisci cittadino (es.atto di nascita)")
    print("2. Richiedi dati cittadino es. cert.residenza")
    print("3. Modificha dati cittadino")
    print("4. Elimina cittadino")
    print("5. Exit")

CreaInterfaccia()
sOper = input("Seleziona operazione")
while (sOper != "5"):
    if sOper == "1":
        apri_url = base_url + "/addcittadino"
        jsonDataRequest = RichiediDatiCittadino()
        
        try:
            response = requests.post(apri_url,json=jsonDataRequest)
            print(response.status_code)
            print(response.headers["Content-Type"])
            data1 = response.json()
            print(data1)        
        except:
            print("Problemi di comunicazione con il server, riprovare piu tardi")
    CreaInterfaccia()
    sOper = input("Seleziona operazione")

