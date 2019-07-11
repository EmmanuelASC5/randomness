//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber() {
    const number = Math.random();
    const times21 = number * 21
    const final = Math.floor(times21);
    console.log(final);
}

randomNumber();

function randomLetter() {
    const decimal = Math.random();
    const times25 = decimal * 25;
const randomLetter = alphabet[Math.floor(times25)];
console.log(randomLetter);
}
randomLetter();

function randomFood() {
    const food = Math.random();
    const times6 = food * 6;
    const randomFood = foods[Math.floor(times6)];
    console.log(randomFood);
}
randomFood();


function randomStudent() {
    const student = Math.random();
    const times7 = student * 7;
    const randomStudent = students[Math.floor(times7)];
    console.log(randomStudent);
}
randomStudent();

function randomGroup() {randomStudent(), randomStudent(), randomStudent();}
randomGroup();