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
            response = requests.post(api_url,json=jsonDataRequest)
            if(response.status_code!=200):
                print("Attenzione,servizio non disponibile")
            print(response.status_code)
            print(response.headers["Content-Type"])
            data1 = response.json()
            print(data1)        
        except:
            print("Problemi di comunicazione con il server, riprovare piu tardi")
    
    if sOper=="2":
        codiceFiscaleCittadino=input("MI dai il codice fiscale?")
        api_url = base_url + "/read_cittadino/" + codiceFiscaleCittadino
        try:
            response =requests.get(api_url)
            print(response.status.get(api_url))

        except:
                    
    
    
    CreaInterfaccia()
    sOper = input("Seleziona operazione")

