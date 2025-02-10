// Muutujad 
let loanAmount = 100000;
let guaranteeAmount = 80000;
let productCategory = "LG";
let guaranteeRate = 0;

// 1. ülesanne
/**
 * Arvuta välja käenduse määr.
 * Käenduse määr on osakaal, kui suur osa laenusummast on kaetud käendusega.
 *
 * @returns {number} - Käenduse määr protsentides.
 */

// Kõige lihtsam lahendus, mis arvutab käenduse määra osakaalu.
function calculateGuaranteeRate() {
    guaranteeRate = (guaranteeAmount / loanAmount) * 100;
    return guaranteeRate; 
}
// Testimine
console.log("Calculated Guarantee Rate:", calculateGuaranteeRate(), "%");

// 2. ülesanne
/**
 * Kontrolli ja arvuta käenduse määr vastavalt finantsteenuse liigile. Siin on oluline,
 * et vastavalt teenusele on teada maksimaalne käendusesumma. Näiteks:
 * Ettevõtte laenukäendus LG puhul on maksimaalne käendusesumma 80% laenusummast
 * Erakorraline proportsionaalne käendus olemasolevatele laenudele COP puhul on maksimaalne käendusesumma 50% laenusummast
 * Tagastame veateate, kui käenduse määr on suurem kui maksimaalne käendusesumma. Negatiivse garantii korral tagastame veateate.
 * Veateade võib olla lihtsalt console.log("Validation error")
 * @returns {number} - Käenduse määr protsentides või veateate korral 0.
 */

function calculateGuaranteeRateByProductCategory() {
    // Arvutan käenduse määra, jagades käendusesumma laenusummaga ja korrutades sajaga.
    guaranteeRate = (guaranteeAmount / loanAmount) * 100;

    // Määran muutuja maksimaalse käenduse määra jaoks vastavalt finantsteenuse liigile
    let maxGuaranteeRate = 0;

    if (productCategory === "LG") {
        maxGuaranteeRate = 80; // Määrame LG liigi puhul maksimaalse määra 80%
    } else if (productCategory === "COP") {
        maxGuaranteeRate = 50; // COP liigi puhul max 50%
    } else {
        console.log("Validation error: Unknown type category"); // Kui liik pole üks neist siis kuvame veateate, et liiki ei tuvastata
        return 0; 
    }

    // Kontrollime, kas käenduse määr on väiksem kui 0 või suurem kui lubatud maksimum. Vastasel juhul kuvame valideerimise errori.
    if (guaranteeRate < 0 || guaranteeRate > maxGuaranteeRate) {
        console.log("Validation error");
        return 0;
    }

    return guaranteeRate.toFixed(2); // Tagastame protsendi kahe komakohaga
}

// Funktsiooni testimine
console.log("Validated Guarantee Rate by Product Category:", calculateGuaranteeRateByProductCategory(), "%");
