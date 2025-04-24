//console.log("Hello, World!");
//console.log("This is a test.");

//window.alert("this is an alert!");
//window.alert("this is another alert!");

// this is a comment /* this is a comment */

//document.getElementById("H1").textContent = "Hello";
//document.getElementById("P").textContent = "This is a test.";

// variable = A container that stores a value
//            Behaves as if it were the value it contains

// 1. declaration  lex x;
// 2. assigment    x = 100;

/*
let x = 100; // declaration and assignment
let y;
y = 200; // assignment
let z = x + y; // declaration and assignment
console.log(`The sum is ${z} and the value of x is ${x} and the value of y is ${y}`);
console.log(typeof x); // number


let FirstName = "João"; // string
let SecondName = "Rafael"; // string
let Age = 18; // number
let isStudent = true; // boolean
let people = FirstName + " " + SecondName; // string

document.getElementById("p1").textContent =`The name is ${people} and the age is ${Age}`;
document.getElementById("p2").textContent = `${people} is a student: ${isStudent}`;


let online = true; // boolean
console.log(`João is online: ${online}`);
let forSale = false; // boolean
console.log(`This car for sale: ${forSale}`);
*/


// Arithmetic Operators = ( + - * / ** % )
// ex. 11 = x + 5;

//students /= 2;
//students *= 2;
//students++;  soma 1 a variável students
//students--;  subtrai 1 a variável students

// Operator precedence
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication and Division * / %
// 4. Addition and Subtraction + -


// How to accept user input
// 1. Easy Way = window.prompt("Enter your name: ");
// 2. Professsional Way = html textbox

//let username;
//document.getElementById("submit").onclick = function(){
//    username = document.getElementById("input1").value;
//    document.getElementById("h1").textContent = `Hello ${username}`;}

// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// let age = window.prompt("Qual sua idade?");
// age = Number(age); // converte para number
// age+=1; // =181 porem se usar age++; funciona
// console.log(age); // string


// const = a variable that cant be changed

//let pi = 3.14; // number
//let radius;
//let circumference;

//document.getElementById("submit2").onclick = function(){
//    radius = document.getElementById("myText").value;
//    radius = Number(radius); // converte para number
//   circumference = 2 * pi * radius;
//    document.getElementById("h3").textContent = `The circumference is ${circumference}cm`;};


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
