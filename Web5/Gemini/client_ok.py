import requests, json, sys


sModel = "gemini-1.5-pro-exp-0827"
base_url = "https://generativelanguage.googleapis.com/v1beta/models/" + sModel + ":generateContent?key="
sGoogleApiKey = "AIzaSyDotgRvHnaIRuh4xWGimjrVydtNFaqqX-Q"
api_url = base_url + sGoogleApiKey


print("Benvenuti in Google Gemini!")


iFlag = 0
while iFlag==0:
    print("\nOperazioni disponibili:")
    print("1. Inserisci una domanda")
    print("2. Inserisci una coppia(file,domanda)")
    print("3. Esci")

    iOper = int(input("Inserisci opzione"))    
    if iOper == 1:
        sQuery = input("Cosa vuoi chiedere")
        jsonDataRequest = {"contents": [{"parts": [{"text": sQuery}]}]}
        response = requests.post(api_url, json=jsonDataRequest,verify=True)
        if response.status_code == 200:
            print(response.json())
        else:
            print("Attenzione! Risposta non disponibile")

    elif iOper == 2:
        print("Servizio da gestire")
    
    elif iOper == 3:
        print("Buona giornata!")
        iFlag = 1

    else:
        print("Operazione non disponibile, riprova.")




