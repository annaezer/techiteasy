// #### Opdracht 3 - Array methoden en functies
//
// * **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
// pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
// dubbele namen in zitten, is niet erg.

// De map methode is weer handig om over de waardes heen te loopen, en dan spreek ik de brand key aan om zo alle merken te krijgen. Ul aanmaken in Html met id zodat we deze kunnen koppelen aan JS en overschrijven met functie innerHTML. += gebruiken om zo alle waardes onder elkaar te krijgen.

const listOfTvBrands = document.getElementById("list");

inventory.map((inventories) => {
    return listOfTvBrands.innerHTML += `
    <li> ${inventories.brand} </li>
    `
})

// * **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
// -declaratie niet aan te roepen!

function tvBrandsInList(tvObjectsArray) {
    const listOfTvBrands = document.getElementById("list");
    const rewriteList = tvObjectsArray.map((tvObjectArray) => {
        return listOfTvBrands.innerHTML += `
    <li> ${tvObjectArray.brand} </li> 
    `
    })
    return rewriteList;
}

tvBrandsInList(inventory);
