// // 

const person = {
    name:"Chloe",
    age:"34",
    favArtists: "Pip Millet, Jorja Smith,Kendrick Lamar",
};

for (let i = 0; i < person.favArtists.length; i++){
    console.log (`Favourite artist ${i + 1} is ${person.favArtists}[i]`)
};

// // Creating an Alarm
const 
weekendAlarm = "no alarm needed";
weekendAlarm = "get up at 7am";

let day = "Saturday";
let alarm;

if (day === "Saturday" || day === "Sunday") {
  alarm = weekendAlarm;
} else {
  alarm = weekdayAlarm;
}

console.log("Alarm:", alarm);

//