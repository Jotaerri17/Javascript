// IF STATEMENTS = if a condicion is true, execute some code, if not, do something else



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

const myCheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit2 = document.getElementById("mysubmit2");
const subresult= document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

document.getElementById("mysubmitBtn").onclick = function() {

    if(myCheckbox.checked) {
        subresult.textContent = 'You are subscribed.';
    }
    else {
        subresult.textContent = 'You are not subscribed.';
    }
    
}


