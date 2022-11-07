// #### Opdracht 4 -Functies
//
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//
//     * **Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.

// Inventory keys aanspreken: brand, type en name, iteren door array met objects met forloop-methode want maar 1 resultaat terug. Poging twee: geen forloop maken maar gewoon simpel houden.

function brandTypeName(tvObjectsArray) {
    const oneTV = tvObjectsArray.brand + " " + tvObjectsArray.type + " - " + tvObjectsArray.name;
    return oneTV;
}

console.log(brandTypeName(inventory[1]));

//
// * **Opdracht 4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft in het format `€379,-` of `€159,-`.

// Ook weer simpel gehouden (te simpel?) door alleen een variabel aan te maken, zelfs die kan weg en gelijk achter return maar wie weet heb ik ze nog nodig straks.

function priceOfOneTv(price) {
    const priceWithSigns = `€${price},-`;
    return priceWithSigns;
}

console.log(priceOfOneTv(inventory[3].price));

//
// * **Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

// Je moet itereren langs de schermgroottes van 1 object met for loop. Let variabele aanmaken om het in op te slaan en te kunnen overschrijven. Const variabele aanmaken om inches naar cm om te rekenen. Als er maar 1 entry is moet er geen streepje achter komen: if statement.

function stringOfScreenSizes(screenSizesArray) {
    let screenSize = '';
    for (let i = 0; i < screenSizesArray.length; i++) {
        const inchesToCm = screenSizesArray[i] * 2.54;
        screenSize += `${screenSizesArray[i]} inch (${inchesToCm} cm)`;
        if (i < screenSizesArray.length - 1) {
            screenSize = `${screenSize} | `;
        }
    }
    return screenSize;
}

console.log(stringOfScreenSizes([43, 50, 55, 58]));

//
// * **Opdracht 4d:** Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```

// Alle functies aanroepen met eerste entry van array; inventory[0]. Div met id maken in html bestand zodat we de getElementById kunnen gebruiken en zo met innerHTML de variabelen op de pagina weergeven.

const tvOnPage = document.getElementById("tv");
tvOnPage.innerHTML = `
<p>${brandTypeName(inventory[0])}</p>
<p>${priceOfOneTv(inventory[0].price)}</p>
<p>${stringOfScreenSizes(inventory[0].availableSizes)}</p>
`

//
// * **Opdracht 4e:** Maak een herbruikbare functie die de informatie van **alle** tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function allTvsOnPage(tvArray) {
    const tvsOnPage = document.getElementById("allTvs");
    const allTvsInfo = tvArray.map((tvDetail) => {
        return `
<p>${brandTypeName(tvDetail)}</p>
<p>${priceOfOneTv(tvDetail.price)}</p>
<p>${stringOfScreenSizes(tvDetail.availableSizes)}</p>
`;
    })
    tvsOnPage.innerHTML = `${allTvsInfo}`;
}

console.log(allTvsOnPage(inventory));


