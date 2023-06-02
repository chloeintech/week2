// Logging a Grid

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

//Variables - Activity 1

let firstName = "Chloe";
let age = "34";
let faveColour = "lilac";

console.log(`Hi my name is ${firstName}. I am ${age} and my favourite colour is ${faveColour}.`)

//Variables - Activity 2

let breakfast = "porridge";
let lunch = "chicken salad";
let dinner = "tacos";

console.log(`Today I will eat ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

breakfast = "yoghurt and granola";
lunch = "ham sandwich";
tea = "lasagne";

console.log (`Tomorrow I will eat ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

//Variables - Activity 3
let currentDate = new Date();

let birthDate = new Date("1989-01-05");

let differenceInTime = (currentDate.getTime()-birthDate.getTime())

console.log(Math.round(differenceInTime / (1000 * 3600 * 24)))

// //Variables - Activity 4
let space1 = "x"
let space2 = "o"
let space3 = ""
let space4 = "x"
let space5 = "x"
let space6 = ""
let space7 = "o"
let space8 = ""
let space9 = ""

console.log(`   |   |   `)
console.log(` ${space1} | ${space2} | ${space3}`)
console.log(`   |   |   `)
console.log(`-----------`)
console.log(`   |   |   `)
console.log(` ${space4} | ${space5} | ${space6}`)
console.log(`   |   |   `)
console.log(`-----------`)
console.log(`   |   |   `)
console.log(` ${space7} | ${space8}  | ${space9}`)
console.log(`   |   |   `)
