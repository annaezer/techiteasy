// #### Opdracht 2 - Elementen in de DOM plaatsen
//
// _Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// Ik heb hier de key sold voor nodig en die van alle entries van de array bij elkaar optellen. Dit kan met for-loop en dan let variabele aanmaken die we kunnen overschrijven elke keer als hij over sold loopt.

let soldTvs = null;

for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold;
}

console.log(soldTvs);

// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.

// Variabel aanmaken om in op te slaan. In HTML div maken met id zodat dit gekoppeld kan worden met document, in CSS kleur op toepassen en dan overschrijven met textContent property.

const soldTvsInGreen = document.getElementById('green');
soldTvsInGreen.textContent = soldTvs;

// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// De key originalStock van de objecten bij elkaar optellen met forloop. Een let variabel aanmaken die kan worden overschreven.

let stockTvs = null;

for (let i = 0; i < inventory.length; i++) {
    stockTvs += inventory[i].originalStock;
}

console.log(stockTvs);

// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.

// Variabel aanmaken om in op te slaan. In HTML div maken met id zodat dit gekoppeld kan worden met document, in CSS kleur op toepassen en dan overschrijven met textContent property.

const stockTvsInBlue = document.getElementById('blue');
stockTvsInBlue.textContent = stockTvs;

// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

let availableTvs = stockTvs - soldTvs;

console.log(availableTvs);

const availableTvsInRed = document.getElementById('red');
availableTvsInRed.textContent = availableTvs;
