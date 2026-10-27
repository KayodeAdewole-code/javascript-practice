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
// if else learning
let age = parseInt(inp[0]); 
let has_adult = inp[1] === "true"; 

// Write your code below
if (age >= 10) {
    if (age < 13) {
        if (has_adult) {
            console.log("You can enter with adult supervision!");
        } else {
            console.log("Sorry, you need an adult with you");
        }
    } else {
        console.log("You can enter by yourself!");
    }
} else {
    console.log("Sorry, you are too young");
}

// learning switches part 1 
// Get the command from the user
let command = inp;

let message;

switch (command) {
   case "start":
    message = "System starting";
    break;
    case "stop":
    message = "System stopping";
    break;
    case "pause":
    message = "System paused";
    break;
    case "resume":
    message = "System resuming";
    break;
    default:
    message = "Unknown command"
    
}

console.log(message);

let var1 = inp[0] 
let var2 = inp[1] 

console.log(parseFloat(var1 * var2))


const stringValue = '42';
const zeroNumber = 0;
const positiveNumber = 7;
const emptyString = '';
const boolValue = true;
const numValue = 123;


console.log("Boolean('42'): ", Boolean(stringValue));

console.log("Boolean(0): ", Boolean(zeroNumber));

console.log("Boolean(7): ", Boolean(positiveNumber));

console.log("Boolean(''): ", Boolean(emptyString));

console.log("String(true): ", String(boolValue));

console.log("String(123): ", String(numValue));

let billAmount = parseFloat(inp[0]); 
let tipPercentage = parseFloat(inp[1]); 
let numPeople = parseInt(inp[2]); 

console.log("Bill Split Calculator")
let tipamount = (tipPercentage / 100) * billAmount;
let total = billAmount + tipamount;
console.log(total);
let split = total / numPeople;
console.log(split);

let tipamount = (tipPercentage / 100) * billAmount;
let total = billAmount + tipamount;
let split = total / numPeople;
console.log("Bill Split Calculator");
console.log(`Total (including tip): $${total}`);
console.log(`Each person pays: $${split}`);

for (let i = 3; i < 28; i++) {
   console.log(`Hello Kay: ${i}`)
}

//  loop learning 
let number = 2;

// while loop
while (number >= 3.5) {
    number = number / 2;
}

console.log(number);

// break stopping a loop 
for (let i = 1; i <= 20; i++) {
    if (i == 9) {
        break;
    }console.log(i);
}
// picking even number or speciific numbers 
for (let i = 1; i <= 20; i++) {
   if (i % 2 !== 0) {
    continue;
   }  console.log(i);
}

//% means "remainder after division".
//i % 2:
//1 % 2 → 1 (odd)
//2 % 2 → 0 (even)
//3 % 2 → 1 (odd)
//4 % 2 → 0 (even)

//Operator	Meaning	Example
//===	Equal value and type	5 === 5 → true
//!==	Not equal value or type	5 !== "5" → true
//==	Equal after type conversion	5 == "5" → true
//!=	Not equal after type conversion	5 != "5" → false

// factorial loop Factorial is a mathematical operation. Factorial of n is the product of all positive integers less than or equal to n. For example:
//Factorial of 3 is 6, which can be calculated as 1 * 2 * 3
//Factorial of 6 is 720, which can be calculated as 1 * 2 * 3 * 4 * 5 * 6
//Factorial of 2 is 2, which can be calculated as 1 * 2

let n = parseInt(inp);
let res = 1
for (let i = 1; i <= n; i++) {
    res *= i 
} 
console.log(res);
// do.. while loop 
let count = 5;
do {
    console.log(count);
    count--;
} while ( count > 0 ) // this code counts down from 5 

let count = 0;

while (count < 10) {
    console.log(count);
    count += 2;
} // this code would add up 2 at a time 

let count = 10;

while (count > 0) {
    console.log(count);
    count--;
} // this code counts down from 10 to 1

let count = 1;

while (count < 100) {
    console.log(count);
    count *= 2;
} // this code multiplies the count by 2 

let count = 100;

while (count >= 1) {
    console.log(count);
    count /= 2;
}// this code divides the count by 2

let n = parseInt(inp); // Don't change this line

// nested loop need much more practice still dont really understand 
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        if (i + j === n) {
            console.log(i, j);
        }
    }
}
for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
        console.log(x, y);
    }
}


const randomNum = Math.random();
console.log(randomNum);


const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);


const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);



const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);



const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);



const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

let fortune1 = "Your cat will look very cuddly today.";

let fortune2 = "The weather will be nice tomorrow.";

let fortune3 = "Be cautious of your new neighbors.";

let fortune4 = "You will find a new hobby soon.";

let fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3; 
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}
console.log(selectedFortune);

// functions different  ways to write functions

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));

function maskEmail (email) {
  return email [0] + "*".repeat(email.indexOf("@") - 2) + email[email.indexOf("@") - 1] + email.slice(email.indexOf("@"));
}

let email = "Kayade@yahoo.com";

console.log(maskEmail(email));

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);

let count = 0; 

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
  } else if (
    card === 10 || card === "J" || card === "Q" || card === "K" || card === "A"
  ) {
    count--;
  } if (count > 0){
    return count + " Bet"; 
  } else {
   return count + " Hold"
  }
  
  } 

  let year = 0
function isLeapYear(year) { if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0 )) {
  return `${year} is a leap year.`
} else {
 return `${year} is not a leap year.`
}}

let result = isLeapYear(year)
console.log(result)

// leap year function 

function truncateString(string, number) {
if (string.length > number) {
  return string.slice(0, number) + `...`
} else {
  return string;
}
}
// . lenth and . slice method used with functions need better understanding on the different uses and how to spot better 

function confirmEnding(stringA, stringB) { if (stringA.slice(-stringB.length) === stringB) {
  return true
} else {
  return false
}

} 
// further using substring and slice methods with functions 

// You can add or remove elements from an array using various array methods, such as push(), pop(), shift(), unshift(), splice()
// this is for the new array part of the notes 
//The push() method is used to add one or more elements to the end of an array. The return value for the push() method is the new length of the array.
// example 
const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]

//The next method we will look at is the pop() method. The pop() method removes the last element from an array and returns that element
// example
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"

//The unshift() method adds one or more elements to the beginning of an array and returns its new length. 

//Finally, the shift() method removes the first element from an array and returns that element.
//similar to pop() but from the beginning

//Now, let's discuss the rest syntax, denoted by three dots (...). It allows you to capture the remaining elements of an array that haven’t been destructured into a new array
// example
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]

// The split() method divides a string into an array of substrings and specifies where each split should happen based on a given separator
// example
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]

//The reverse() method is an array method that reverses the elements of an array in place. This means it modifies the original array rather than creating a new one. Here's how we can use it:
// example
let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]

//The final step is to convert the reversed array of characters back into a string. We can accomplish this using the join() method
// example
let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

//all put into practice 
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));

// mixing in functions with arrays and array langauges.
let lunches = [];
function addLunchToEnd (lunches,str){
lunches.push(str);
console.log(`${str} added to the end of the lunch menu.`)
return lunches;
}

function addLunchToStart (lunches,str){
 lunches.unshift(str)
  console.log(`${str} added to the start of the lunch menu.`)
  return lunches;
}

function removeLastLunch (lunches){if(lunches.length === 0) {
  console.log("No lunches to remove.")
} else {
 let removedLunch = lunches.pop();
 console.log(`${removedLunch} removed from the end of the lunch menu.`)
 
}
return lunches;
}

function removeFirstLunch (lunches){if(lunches.length === 0) {
  console.log("No lunches to remove.")
} else {
  let removedLunch = lunches.shift();
  console.log(`${removedLunch} removed from the start of the lunch menu.`)
  
}
return lunches;
}

function getRandomLunch (lunches){ 
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomLunch = lunches[Math.floor(Math.random() * lunches.length)];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
return lunches;
}

function showLunchMenu (lunches){
  if (lunches.length > 0){
    console.log(`Menu items: ${lunches.join(", ")}`)
  } else {
    console.log("The menu is empty.")
  }
  return lunches;
}
// golf score function
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore (parr,strokes){
  if(strokes === 1){
    return names[0];
  } else if(strokes <= parr - 2){
    return names[1];
  } else if(strokes === parr - 1 ){
    return names[2]
  } else if(strokes === parr){
    return names[3]
  } else if(strokes === parr + 1){
    return names[4]
  } else if(strokes === parr + 2){
    return names[5]
  } else if(strokes >= parr + 3){
    return names[6]
  }
}

// learing deeper on objects 
// example of an object of contact information
let person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};
// accesses properties in 2 different ways
console.log(person.contact.phone.work); // "098-765-4321"
console.log(person["contact"]["phone"]["work"]); // "098-765-4321"

// object with address 
const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};
// Accessing the street of the work address
console.log(person.addresses[1].street); // "456 Market St"

// functitions with objects also knows as object methods
const person = {
    name: "Bob",
    age: 30,
    sayHello: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.sayHello()); // "Hello, my name is Bob"

// objects using functions and learing bracket notation 
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

function getProperty(animal, propertyName){
  return animal[propertyName];
};

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));