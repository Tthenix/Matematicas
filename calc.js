// we define the variables;
var x = document.getElementById("num1");
let counter = 2;
//we assign a click event to the button id "root"
document.getElementById("raiz").addEventListener("click",irracional);
document.getElementById("divi").addEventListener("click",racional);
document.getElementById("igual").addEventListener("click",tipo);
document.getElementById("limite").addEventListener("click",limite);



//we assign function to display the value
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
//We create two functions to enter the value of the buttons
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0') setResult(result + key);
    else setResult(key);
}
//function to calculate the position
function calc() {
    var result = eval(getResult()); 
    document.getElementById("Resultado").innerHTML = result;
}
//function to reset
function del() { 
    setResult(0);
    counter = 2;
    
    
}
//we declare when it is irrational and when rational
function irracional() {
    counter = 1
}
function racional() {
    counter = 0;
}
//we show when it is irrational and when rational
function tipo(){
    
    document.getElementById("counter-label").innerHTML = counter;
}
    //We assign the value with a data entry event to the x
function number1() {
    x = + document.getElementById("prueba").value;
    var result = eval(getResult()); 
    document.getElementById("lim.izq").innerHTML = "Infinito -->" + result ;
    document.getElementById("lim.der").innerHTML = result + "<--Infinito";
    document.getElementById("Resultado").innerHTML = parseInt(result);
}