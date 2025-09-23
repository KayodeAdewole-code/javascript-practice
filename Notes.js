// javascript notes

// variables: 3 different variables are Var(oldest),Let(any variable that is going to chnage),Const(variables that you do not want to chnage)

//identifiers: the aprt that comes after the variable and this will be what the value of the variable. (cant start with caps and cannot start with numbers)

// data type: string=letters boolean= value is eaither true or false(cant be nothing else) null="it doesnt have a value but ir also does"

let age=10;
let numOfSlices=8;
let name="Kayode";
let favPlayer="My favourite player is Cole Palmer";
let itRainToday= true;


// operators: main ones= + , -, *, /, %,
let x=10;
let y=2;
let z=x-y;
// console.log(z);
let c=4;
let d=x%c;
// console.log(d);

// % gives you what's left after you divide (remainder)
let g = 25;
let h = 5;
// console.log(g/h);
// console.log(g*h);
// console.log((g+h)*h);





let num1 = 20;
let num2 = 15;
let num3 = 3;
let num4 = 10;

let answer1 = num1 * num4;
console.log(answer1)
let answer2 = num2 - num4;
console.log(answer2)

//objects = a collection of related propeties 
// can represent real world objects{people/products/places}
// object = {} the way its writen is key : value pairs {seperater values with {,}}

const person = {
    firstName : "kayode",
    lastName : "Adewole",
    age : 23,
    likesGame : true 
}
console.log(person.age + 1)

const car = {
    wheels : 4,
    doors : 5,
    seats : 7,
    carName : "Nissan"
}
console.log("the brand of this car " + car.carName)

//array = a veriable like structure that can hold
// more than 1 value
// first value is indexed at zero 

let shoes = ["nike", "addids","Puma","Gucci"];
shoes[4]="LV"
console.log(shoes[2])
console.log(shoes)

let footballPitch = {

player : 11,
refs : 2,
goalsInGame : 6,
isthegameathalftime : false 
}

let bedroom = {

clothes : 47,
shoes: 7,
favItem: 'playstation' ,
bedInRoom : true
}

let favNums = [1,4,5,2,7,9];

let n1 = 9;
let n2 = 7;

if (n1<n2){
console.log("number2 is bigger than number 1")

} else{
    console.log("number1 is bigger than number 2")
}

// (if) statements = if a condition is true, execute some code.  if not, do something (else)

let age1 = 17;
if (age1 <= 11){
console.log("you are a child" )    
}
else if (age1 <= 18){
console.log("you are a teen")    
}
else {
  console.log("you are an adult")  
}

let height1 = 177;
if (height1 <=150){
console.log("you are short")
}
else if(height1 <=180) {
console.log("you are average")
}
else {
console.log("you are tall")
}

if(age1 < 0){
    console.log("You haven't been born yet!")
}
else if (age1 <=18 && height1<=150){
 console.log("short youth")   
}
else if (age1 <=18 && height1 <=180 ){
    console.log("tall youth")
}
else if (age1 > 18 && height1 <= 150){
    console.log("short adult")
}
else if (age1 > 18 && height1 <= 180){
 console.log("tall adult")
}

let newAge = 15;
let newHeight = 163;

// Example 1
if(newAge < 0){
    console.log("You haven't been born");
} 
else if (newAge <= 11){
    console.log("You are a child");
} 
else if (newAge <= 18){
    console.log("You are a teenager");
} 
else {
    console.log("You are grown up");
}
// ------------------------------------------
// Example 2
if(newAge < 18 && newHeight >= 183){
    console.log("You are too young for the rollercoaster but tall enough");
} else if (newAge >= 18 && newHeight >= 183) {
    console.log("You are old enough and tall enough for the rollercoaster");
} else if (newAge >= 18 && newHeight < 183){
    console.log("You are old enough but not tall enough for the rollercoaster");
} else if(newAge < 18 && newHeight < 183){
    console.log("You are not old enough and not tall enough for the rollercoaster");
}
 
//------------------------------------------
// New Examples

let rating = 3.9

if (rating <= 1){
    console.log("The movie could have been better");
} else if (rating <= 3){
    console.log("The movie was alright")
} else {
    console.log("The movie was great!");
}


//------------------------------------------ 

const personP = {
    name: "Tom",
    age: 27,
    hasLicense: false
}

if (personP.age <= 17){
    console.log("You're too young");
} else if(personP.age >=18 && personP.hasLicense){
    console.log("You're over the age limit & can drive");
} else if (personP.age >=18 && !personP.hasLicense){
    console.log("You're over the age limit but cannot drive");
}

// Conditional operators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
//  > - greater than
// < - less than
//  >= - greater than or equal to
//  <= - less than or equal to
// ! - Switches true to false & false to true
// != - not equal to
// = - assisgnemnt
// == - equal to
// === - exactly equal
// && - AND 
// || - OR

let englishScore = "60";

if(englishScore === 50){
    console.log("Good job")
}


let scienceScore = 5;

if(scienceScore != 7){
    console.log("Nice one")
}


// For loop

// Print numbers 1-5
for (let i = 1; i < 6; i++) {
    console.log(i);
}

let boat = {
    numOfPeople: 25,
    numOfRooms: 16,
    CaptainName: "Jeff",
    hasItLeftDoc: "True"
}

let food = ["pizza","rice","noodles",5,30];

console.log("i love eating" + food[2], "i eat it" + food[3]);

food[5] = "chowMain";
// for loops: repeat some code LIMITED amount of times 

function addNumbers(x,y){
    let z = x +y;
    return z
}
const num5 = addNumbers(2,4)

console.log(num5)


function countryNcity(country,city){
  console.log("your fvaourite country is " + country)
  console.log(`your favourite city is ${city}` )  
}
countryNcity("france","paris")

const baller = (footballer,club) => { 
    console.log("the footballer is " + footballer )
    console.log("the club they play for " + club)

} 
baller("lamine","barcelona")

function multiplyNumbers(x,y){
    let m = x * y;
    return m
}
const num6 = multiplyNumbers(6,2)

console.log(num6)

// const age = (ageOfPerson) => {
// if (ageOfPerson <0)
//      console.log("not born")

// else if (ageOfPerson <18)
//      console.log("you are young") 

// else comsole.log("you are old")
// }
// age (15)

if (personP.age <= 17){
    console.log("You're too young");
} else if(personP.age >=18 && personP.hasLicense){
    console.log("You're over the age limit & can drive");
} else if (personP.age >=18 && !personP.hasLicense){
    console.log("You're over the age limit but cannot drive");
}

