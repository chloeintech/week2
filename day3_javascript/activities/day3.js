// If/Else/Switch - Activity 1

// let age = "17";

// if (age >17 ) {
//     console.log("Yes I can serve you.");
// } 
// else if (age <=17) {
//     console.log("You aren't old enough.");
// }

// If/Else/Switch - Activity 1 (Stretch)

let age = "34";
let country = "UK";

if (age >17 && country === "UK" ) {
    console.log("Yes I can serve you.");
} 
else {
    console.log("You aren't old enough or do not live in the UK.");
}

// If/Else/Switch - Activity 2

let pizzaTopping = "Chicken"

switch(pizzaTopping){
    case "mozzerella":
    case "ham":
    case "nduja":
        console.log("This is an important ingredient for my pizza.");
        break;
    case "pepperoni":
        console.log(`I don't mind have ${pizzaTopping} on my pizza.`);
        break;
    case "Pineapple":
    case "Chicken":
        console.log(`${pizzaTopping} should not be on a pizza.`)
}

// If/Else/Switch - Activity 3

let password = "Codenation"

if (password.length < 8) {
  console.log("The password is too short.");
} else {
  console.log(`Password: ${password}` );
}

// If/Else/Switch - Activity 4

let num = 18;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num);
}

// If/Else/Switch - Activity 5
// If/Else/Switch - Activity 6
let time = 7;
let placeOfWork = "Office";
let townOfHome = "Home";

if (time === 7) {
  console.log("At 7 AM, I'm at home.");
} else if (time === 8) {
  console.log("At 8 AM, I'm commuting.");
} else if (time === 9) {
  console.log("At 9 AM, I'm at work in the " + placeOfWork + "");
} else {
  console.log("I'm somewhere else.");
}

