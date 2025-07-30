//  = assigment operator
//  == comparison ooperator (compare if values are equal)
//  === strict equality operator (compara o tipo de dado e o valor)
//  != inequality operator ( compara os valores e retorna true se forem diferentes)
//  !== strict inequality opertor  (compara o tipo de dado e o valor, retorna true se forem diferentes)






// While loop

/*
let username = "";

do{
    username = window.prompt("Please enter your username:");
}while( username == "" || username == null)
console.log(`Welcome, ${username}!`);



let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Enter your username:");
    password = window.prompt("Enter your password:");

    if(username === "JR" && password === "123"){
        loggedIn = true;
        console.log('You are logged in!');
        
    }
    else{
        console.log("Invalid credentials! Please try again.");
    }
}while(!loggedIn)
*/



// For loop = repeat some code a LIMITED amount of times

/*
for(let i = 10; i > 0; i-=2){
    console.log(i);
}console.log("Happy new year!");
*/


for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue; // Skip the number 13
    }
    else{
        console.log(i);
    }
}
