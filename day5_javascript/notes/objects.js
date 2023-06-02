// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true, 
//     drinks: ["Cappucino","Latte","Tea"],
//     cashRegister: 40054, // Always use the lowest value of country (ie - pennies)
//     staff: ["Ben", "Kelly"]
//     staffNumberLimit: 5,
//     toiletAva: false,
//     workingDays: ["Monday","Tuesday"],
//     openin
// }

// console.log(cafe.name);

// Object

const pet = {
    petName: "Kitty",
    petType: "Cat",
    petAge: 4,
    petBreed: "Egyptian",
    petColour: "Baige",
    lastFed: "08:00",
    feedPet (time) {
        this.lastFed = time;
        return `${this.petName} has now been fed. New feed time updated to ${time}`;
    },
    checkLastFeedTime(){
        return this.lastFed;
    },

}

console.log(pet.checkLastFeedTime())
console.log(pet.feedPet("14:00"));
console.log(pet.checkLastFeedTime())

