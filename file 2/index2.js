// IF STATEMENTS = if a condicion is true, execute some code, if not, do something else


/*
const mytext =document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultado = document.getElementById("resultado");
let age;
let CNH = false;

mysubmit.onclick = function(){

    age = mytext.value;
    age = Number(age);
    if( age >=75){
    resultado.textContent = 'Você não pode dar entrada na sua CNH, pois já passou do limite de idade.';
}
    else if(age >=18){

            if(CNH){
                resultado.textContent = 'Você já possui CNH.';
            }
            else{
                resultado.textContent = 'Você pode dar entrada na sua CNH.';
                
            }
}
    else if(age <= 0){
        resultado.textContent = 'Idade inválida.';
        }
    else{
        resultado.textContent = 'Você precisa ter 18 anos para dar entrada na sua CNH.';
    } 

}


// .Checked = property that determines the checked satet of an HTML checkbox or radio button element

const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit2 = document.getElementById("mysubmit2");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit2.onclick = function(){

    if(mycheckbox.checked) {
        subresult.textContent = 'You are subscribed.';
    }
    else {
        subresult.textContent = 'You are not subscribed.';
    }
    if(visaBtn.checked){
        paymentresult.textContent = 'You have selected Visa.';
    }
    else if(mastercardBtn.checked){
        paymentresult.textContent = 'You have selected Mastercard.';
    }
    else if(paypalBtn.checked){
        paymentresult.textContent = 'You have selected PayPal.';
    }
    else {
        paymentresult.textContent = 'No payment method selected.';
    }


}



// ternrary operator = a shorcut to if{} and else{} statements helps to assing a variable based on a condition. condition ? CodeIfTrue; CodeIfFalse;

let idade = 19;
let message = age >= 18 ? 'Você é maior de idade.' : 'Você é menor de idade.';
console.log(message);

let preço = 133000;
let desconto = preço > 120000 ? preço * 0.15 : 0;
console.log(`O valor total é de R$${preço - desconto}.`);

*/


// SWITCH = can be a efficient replacement to many else if statements, especially when dealing with multiple conditions based on the same variable.

let testScore = 92;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    case testScore >= 60:
        letterGrade = 'D';
        break;
    case testScore >= 50:
        letterGrade = 'E';
        break;
    default:
        letterGrade = 'F';
        break;
}
console.log(`Your letter grade is ${letterGrade}.`);



//  STRING METHODS = allow you to manipulate and work wiith text (strings)
/*
let username = "JohnDoe   ";
console.log(username.toLowerCase()); // Converts to lowercase
console.log(username.toUpperCase()); // Converts to uppercase
console.log(username.length); // Gets the length of the string
console.log(username.charAt(0)); // Gets the character at index 0
console.log(username.indexOf("Doe")); // Finds the index of "Doe" in the string
console.log(username.lastIndexOf("o")); // Finds the last index of "o" in the string
console.log(username.startsWith("John")); // Checks if the string starts with "John"
console.log(username.endsWith("Doe")); // Checks if the string ends with "Doe"
console.log(username.replace("Doe", "Smith")); // Replaces "Doe" with "Smith   
console.log(username.replaceAll("o", "a")); // Replaces all occurrences of "o" with "a"
console.log(username.split("")); // Splits the string into an array of characters
console.log(username.split("D")); // Splits the string into an array using "o"
console.log(username.trim()); // Removes whitespace from both ends of the string
console.log(username.includes("John")); // Checks if the string includes "John" 
console.log(username.slice(0, 4)); // Extracts a substring from index 0 to 4
console.log(username.substring(0, 4)); // Extracts a substring from index 0 to 4
console.log(username.concat("123")); // Concatenates "123" to the end of the string
console.log(username.repeat(2)); // Repeats the string twice
console.log(username.padStart(10, "0")); // Pads the start of the string with
console.log(username.padEnd(10, "0")); // Pads the end of the string with "0"
console.log(username.match(/[A-Z]/g)); // Finds all uppercase letters in the string
console.log(username.match(/[a-z]/g)); // Finds all lowercase letters in the string
console.log(username.slice(-1)); // Gets the last character of the string
let firstName = username.slice(0, )
console.log(firstName); // Gets the first name from the username if a space is present
let lastName = username.slice(username.indexOf(" ") +1);


const email = 'JoaoR@gmail.com';
let usernameEmail = email.slice(0, email.indexOf('@'));
console.log(usernameEmail); // Extracts the username from the email address
let extensionEmail = email.slice(email.indexOf('@'));
console.log(extensionEmail); // Extracts the domain from the email address
*/

