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




// math = built-in object that provides a collection of properties and methods for mathematical constants and functions

let y = Math.PI; 
let x = Math.E;
let z;
let a;
let b;
z = Math.round(x); // arredonda para o inteiro mais proximo
a = Math.floor(y); // arredonda para baixo
 b = Math.ceil(y); // arredonda para cima
 z = Math.sqrt(16); // raiz quadrada
z = Math.trunc(3.14); // arredonda para baixo
z = Math.abs(-10); // valor absoluto
a= Math.pow(2, 3); // potenciação // o segundo valor é a potencia
b = Math.random(); // gera um numero aleatorio
a = Math.sin(30); // seno
a = Math.cos(30); // cosseno
a = Math.tan(30); // tangente
a = Math.log(10); // logaritmo natural
z = Math.sign(-10); // retorna 1 se o numero for positivo, -1 se for negativo e 0 se for zero
let max = Math.max(y,x); // retorna o maior valor
let min = Math.min(y,x); // retorna o menor valor


