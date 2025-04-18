/*
In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:

- Recuperare la ricetta da https://dummyjson.com/recipes/{id}
- Estrarre la proprietà userId dalla ricetta
- Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
- Restituire la data di nascita dello chef
- Note del docente


Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch
Esempio di utilizzo
getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));
Esempio di output atteso
Data di nascita dello chef: 1990-06-15

*/

async function getChefBirthday(id) {
  try {
    const data = await fetch(`https://dummyjson.com/recipes/${id}`)
    const parseData = await data.json()
    // console.log("questi sono i dati", parseData)
    const userId = parseData.userId
    // console.log("questo è user id:", userId)
    const chefInformation = await fetch(`https://dummyjson.com/users/${userId}`)
    const parseChefInfo = await chefInformation.json()
    // console.log("info dello chef ->", parseChefInfo)
    return parseChefInfo.birthDate
  } catch (error) {
    throw new Error("Impossibile ottenere la data di nascita dello chef: " + error.message);
  }
}

// Funzione wrapper per usare await e stampare la data
async function showBirthday() {
  try {
    const chefBirthday = await getChefBirthday(4);
    console.log("La data di nascita dello chef è:", chefBirthday);
  } catch (error) {
    console.error("Errore:", error.message);
  }
}

showBirthday();