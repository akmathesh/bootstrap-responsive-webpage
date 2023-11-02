// Variables

// Variable types -These are used to store different data types.
// 1. Var
// 2. let
// 3. const

// Data Types
// 1. Primitive Types
// 2. Reference Types

// 1. Primitive Types

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Bigint
// 7. Symbol


// 2. Reference Types

// 1. Array
// 2. Object
// 3. Functions


// var 
// keyword is a global scope and block scope variable keyword
var a = 5;
var b = 10;

// console.log(a + b);

function multi(a, b) {
    var c = 5;
    // console.log(a*b);
    console.log(c);
}

multi(a, b);

// console.log(c); // Here result is undefined

// let and const
// keyword is a functional scope or block scope keyword
let x = 10;
let y = 20;

//Operators
// 1. Arithmetic Operators + - * / % ++ -- **
// 2. Assignment Operators = += -= *= /= %= **=
// 3. Comparison Operators == === != !== >= <= > < ?
// 4. String operators == Comparision operators
// 5. Logical operators
// 6. Bitwise operators & | ~ ^ << >> >>>
// 7. Ternary operators  (condition) ? x : y
// 8. Type Operators

// Condition
// 1. if
// 2. if..else
// 3. if..else..if
// 4. switch case
// 5. while
// 6. Do..while

// 1. if conditions

if (true) {
    let message = "Hello Matheshwaran, Type your code"
    console.log(message);
}

// 2. if...else  or if..else
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

// 3. switch case
var text;
var fruits = "Apple";

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
}
console.log(text);

// Objects

let obj = {
    name: "mathesh",
    age: 28,
    hadYourDinner: true,
}

console.log(obj);


// Functions
function add(x, y) {
    // let c = 5; //block scope
    console.log(x*y);
    // console.log(c);
}

add(x, y);

// console.log(c); // Here result is undefined
