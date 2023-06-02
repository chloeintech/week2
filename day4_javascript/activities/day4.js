// // Arrays/ Loops - Activity 1

let favFilms = [
    "Wolf of Wall Street",
    "Harry Potter",
    "La Haine",
    "28 Days Later"
];

favFilms.push("Matilda","Mean Girls") //Seperate or together?

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);

// Arrays/ Loops - Activity 2
for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(randomNumber);
  }

//Arrays/ Loops - Activity 3
for (let i = 9; i >= 0; i--) {
    console.log(i);
  }

//Arrays/ Loops Activity 4
const films = ["The Shawshank Redemption", "The Godfather", "Ghostbusters", "Pulp Fiction"];

for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}

if (films[2] === "Ghostbusters") {
  console.log("Yay, it's Ghostbusters!");
} else {
  console.log("Boo! We want Ghostbusters.");
}
