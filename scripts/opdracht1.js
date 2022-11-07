// #### Opdracht 1 - Array Methoden//
// * **Opdracht 1a:** Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
// console.
//
// Hier gebruik ik de map methode voor. Eerst een variabel aanmaken om het in op te kunnen slaan. Vervolgens de parameter een soortgelijke naam geven zodat we daarmee de waardes van de array terugkrijgen. Door middel van puntnotatie kun je keys in objecten aanspreken. Met return functie nieuwe array maken.

const tvTypeNames = inventory.map((inventories) => {
    return inventories.name;
})

console.log(tvTypeNames);

// * **Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
// zijn. Log de uitkomst in de console.
//
// Hier moeten we filteren op uitverkocht dus is de filtermethode geschikt. Eerst een variabel aanmaken om het in op te kunnen slaan. Parameter weer benoemen zodat we de waardes terug kunnen krijgen. De keys die we nodig hebben om volledig uitverkocht terug te krijgen is originalStock - sold === 0. Return dan true.

const tvSoldOut = inventory.filter((inventories) => {
    return inventories.originalStock - inventories.sold === 0;
})

console.log(tvSoldOut);

// * **Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
// beschikken. Log de uitkomst in de console.

// Weer de filtermethode gebruiken. Eerst variabele aanmaken en parameter om de array terug te krijgen en return specificeren op is gelijk aan ambilight. AmbiLight is een key onder de key options dus twee keer puntnotatie.

const tvWithAmbiLight = inventory.filter((inventories) => {
    return inventories.options.ambiLight === true;
})

console.log(tvWithAmbiLight);

// * **Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
// console.

// Dit kan met sort-methode. Eerst een variabele maken om het resultaat in op te slaan en parameter geven aan functie zodat we de inhoud van de array terugkrijgen.
//
// const tvPriceLowToHigh = inventory.sort((a, b) => {
//     return a.price - b.price;
// })

// console.log(tvPriceLowToHigh);
