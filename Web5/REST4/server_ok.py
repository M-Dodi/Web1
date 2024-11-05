import sys
from flask import Flask, jsonify, request
from myjson import JsonDeserialize, JsonSerialize
import dbclient as db
import psycopg2

cittadini = {}

api = Flask(__name__)

## Connessione al database ##
try:
    conn = psycopg2.connect(
        dbname="yourdbname",
        user="yourusername",
        password="yourpassword",
        host="localhost",
        port="5432"
    )
    cur = conn.cursor()
except Exception as e:
    print(f"Errore connessione al DB: {e}")
    sys.exit()

def MiaProcedura():
    print("Ciao a tutti")






@api.route('/login', methods=['POST'])
def GestisciLogin():
    global cur
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        #{"username":"pippo", "password":"pippo"}
        jsonReq = request.json
        sUsernameInseritoDalClient = jsonReq["username"]
        sPasswordInseritaDalClient = jsonReq["password"]
        sQuery = "select privilegi from utenti where mail= '" + sUsernameInseritoDalClient + "' and password = '" + sPasswordInseritaDalClient + "';"
        print(sQuery)
        iNumRows = db.read_in_db(cur,sQuery)
        if iNumRows == 1:
            #[0,['w']]
            lRow = db.read_next_row(cur)
            sPriv = lRow[1][0]
            print("privilegi: " + sPriv)    

            return jsonify({"Esito": "000", "Msg": "Utente registrato", "Privilegio":sPriv}), 200
        
        else:
            return jsonify({"Esito": "001", "Msg": "Credenziali errate"})
    else:
        return jsonify({"Esito": "002", "Msg": "Formato richiesta errato"}) 
                                             

@api.route('/add_cittadino', methods=['POST'])
def GestisciAddCittadino():
    global cur
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        jsonReq = request.json
        
        #prima di tutto verifico utente, password e privilegio 
        #dove utente e password me l'ha inviato il client
        #mentre il privilegio lo vado a leggere nel mio file  (utenti.json)

        codice_fiscale = jsonReq.get('codFiscale')
        nome = jsonReq.get('nome')
        cognome = jsonReq.get('cognome')
        dataNascita = jsonReq.get('dataNascita')
        sQuery = "insert into anagrafe(codice_fiscale,nome,cognome,data_nascita) values ("
        sQuery += "'" + codice_fiscale + "','" + nome + "','" + cognome + "','" + dataNascita + "');"
        
        print(sQuery)
        try:
            cur.execute(
                "INSERT INTO anagrafe (codice_fiscale, nome, cognome, data_nascita) VALUES (%s, %s, %s, %s)",
                (codice_fiscale, nome, cognome, dataNascita)
            )
            conn.commit()
            return jsonify({"Esito": "000", "Msg": "Cittadino aggiunto con successo"}), 201
        except psycopg2.IntegrityError:
            conn.rollback()
            return jsonify({"Esito": "001", "Msg": "Cittadino già esistente"}), 200
        except Exception as e:
            print(f"Errore durante l'inserimento del cittadino: {e}")
            return jsonify({"Esito": "002", "Msg": "Errore del server"}), 500
    else:
        return jsonify({"Esito": "002", "Msg": "Formato richiesta non valido"}), 400


"""
        
Questa funzione sta sul SERVER. Riceve il codice fiscale dal client 
e verifica se il codice e d i dati associati stanno in anagrafe.json
"""


@api.route('/read_cittadino/<codice_fiscale>/<username>/<password>', methods=['GET'])
def read_cittadino(codice_fiscale,username,password):

    #prima di tutto verifico utente, password e privilegio 
    #dove utente e password me l'ha inviato il client
    #mentre il privilegio lo vado a leggere nel mio file  (utenti.json)

    sQuery = "select * from cittadini where codice_fiscale='" + codice_fiscale + "';"



    cittadino = cittadini.get(codice_fiscale)
    if cittadino:
        return jsonify({"Esito": "000", "Msg": "Cittadino trovato", "Dati": cittadino}), 200
    else:
        return jsonify({"Esito": "001", "Msg": "Cittadino non trovato"}), 200






@api.route('/update_cittadino', methods=['PUT'])
def update_cittadino():

    #prima di tutto verifico utente, password e privilegio 
    #dove utente e password me l'ha inviato il client
    #mentre il privilegio lo vado a leggere nel mio file  (utenti.json)

    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        jsonReq = request.json
        codice_fiscale = jsonReq.get('codFiscale')
        try:
            cur.execute("UPDATE cittadini SET nome = %s, cognome = %s, data_nascita = %s WHERE cod_fiscale = %s RETURNING *", (jsonReq['nome'], jsonReq['cognome'], jsonReq['dataNascita'], codice_fiscale)) 
            updeted = cur.fetchone()
            if updeted:
                conn.commit()
                return jsonify({"Esito": "000", "Msg": "Cittadino aggiornato con successo"}), 200
            
            else:
                return jsonify({"Esito": "001", "Msg": "Cittadino non trovato"}), 200
   
        except Exception as e:
            print(f"Errore durante l'aggiornamento: {e}")
            return jsonify({"Esito": "002", "Msg": "Errore interno"}), 200
    else:
        return jsonify({"Esito": "002", "Msg": "Formato richiesta non valido"}), 200






@api.route('/elimina_cittadino', methods=['DELETE'])
def elimina_cittadino():

    #prima di tutto verifico utente, password e privilegio 
    #dove utente e password me l'ha inviato il client
    #mentre il privilegio lo vado a leggere nel mio file  (utenti.json)
    
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        cod = request.json.get('codFiscale')
        try:
            cur.execute("DELETE FROM cittadini WHERE cod_fiscale = %s RETURNING *", (cod,))
            deleted = cur.fetchone()
            if deleted:
                conn.commit()
                
                return jsonify({"Esito": "000", "Msg": "Cittadino rimosso con successo"}), 200
            else:
                return jsonify({"Esito": "001", "Msg": "Cittadino non trovato"}), 200
   
        except Exception as e:
            print(f"Errore durante l'eliminazione: {e}")
            return jsonify({"Esito": "002", "Msg": "Errore interno"}), 200
    else:
        return jsonify({"Esito": "002", "Msg": "Formato richiesta non valido"}), 200

api.run(host="127.0.0.1", port=8080)

