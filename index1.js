// Task 1

let city = 'Gorodishche';
let country = 'Ukraine';
let members = 15000;
let stadion = true ;

console.log (typeof city, city);
console.log (typeof country, country);
console.log (typeof members, members);
console.log (typeof stadion, stadion);

// Task 2

let wight = 40;
let hight = 70; 

let square = wight * hight;

console.log(square);

// Task 3

let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;

let totalLenght = time * speedOfFirst + time * speedOfSecond; 
console.log(totalLenght);

// Task 4

const randomNumber = Math.floor(Math.random() * 100);
 if (randomNumber < 20){
    console.log ("randomNumber меньше 20");
 }
 else if (randomNumber > 50){
    console.log ("randomNumber больше 50");
 }
 else console.log ("randomNumber больше 20, и меньше 50");

 // Task 5

 switch (true) {
    case (randomNumber < 20): 
        console.log ("randomNumber меньше 20");
        break;
    case (randomNumber > 50):
        console.log ("randomNumber больше 50");
        break;
    default :
        console.log ("randomNumber больше 20, и меньше 50");
        break;
 }