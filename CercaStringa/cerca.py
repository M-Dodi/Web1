import os
import PyPDF2

lTextExtensions = [".txt", ".py", "js", ".csv", ".json"]

def CercaStringaInNomeFile(sFile,sStringa):
    #mettiamo tutto minuscolo usando sFileLower.find()
    sFileLC = sFile.lower()
    sStringaLC = sStringa.lower()

    if (sFileLC.find(sStringaLC)>=0):
        return True
    else:
        return False

def CercaStringaInTextFile(sFile,sStringa):
    iRet = -1;
    with open(sFile, "r") as file1:
        sRiga = ""
        sRiga = file1.readline()
        while (len(sRiga)>0):
           iRet = sRiga.lower().find(sStringa.lower())
           if (iRet >=0):
               return True
           sRiga = file1.readline()
            
    return False



def CercaInFilePdf(sFile,sString):
	object = PyPDF2.PdfReader(sFile)
	numPages = len(object.pages)
	for i in range(0, numPages):
		pageObj = object.pages[i]
		text = pageObj.extract_text()
		text = text.lower()
		if(text.find(sString)!=-1):
			return True
	return False
    
     


def CercaStringaInContenutoFile(sPathFile,sStringa):
    sOutFileName,sOutFileExt = os.path.splitext(sPathFile)
    
    if sOutFileExt.lower() in lTextExtensions :
        bRet = CercaStringaInTextFile(sPathFile,sStringa)
    
    if sOutFileExt.lower() == ".pdf":
        bRet = CercaInFilePdf(sPathFile,sStringa)
    
    return bRet


sRoot = input("Inserisci la root directory:")
sParola = input("Inserisci la stringa da cercare:")
sOutDir = input("Inserisci la directory di output:")

iNumFileTrovati = 0

for root, dirs, files in os.walk(sRoot):
    print(f"Sto guardando {root} che contiene {len(dirs)} subdir e {len(files)} files")
    
    for file in files:
        print("Devo vedere se {file} contiene {sParola}")
        bRet = CercaStringaInNomeFile(file,sParola)
         
    if bRet == True:
        iNumFileTrovati +=1

    else:
        sFilePathCompleto = os.path.join(root,file)
        bRet = CercaStringaInContenutoFile(sFilePathCompleto,sParola)
        if (bRet==True):
            iNumFileTrovati +=1

    if(bRet == True):
         print("Trovata parola in file" + file)

print(f"Ho trovato {iNumFileTrovati} files.")