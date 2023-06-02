let coffeeMenu = ["Espresso", "Latte", "Cortado"];
let coffeePrices = [2.50, 2.75, 2.94, 3.00];

for (let x = 0; x < coffeeMenu.length; x++){
    console.log(`${coffeeMenu[x]} £${coffeePrices[x]} + 20% VAT £${coffeePrices[x] * 0.2)}; 
}

{let multiplesTwo = [0,3,4,5,7,8,4];

for (let i = 0; i < multiplesTwo.length; i++){ //Parent For Loop

    for (let y = i + 1; y < multiplesTwo.length; y++){ // Child

        if (i != y) {

            if (multiplesTwo[i] == multiplesTwo[y]){

                console.log(`${multiplesTwo[i]} is repeating`);

    