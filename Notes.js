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