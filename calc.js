import "calc.css"

// definimos las variables
var x = document.getElementById("num1");
let counter = 0;
//le asignamos un evento al boton id "raiz"
document.getElementById("raiz").addEventListener("click",irracional);
document.getElementById("body").addEventListener("keyboard",teclado);




//Asignamos el valor con un evento en un ingreso de datos a la x
function number1() {
    x = + document.getElementById("prueba").value;
}
//hacemos la calculadora
function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0') setResult(result + key);
    else setResult(key);
}
function teclado(){
    var result = getResult()
    setResult(result + teclado)
    console.log("esta:",teclado)
}
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult(0);
    counter = 0;
    document.getElementById("counter-label").innerHTML = parseInt(counter);
}
//declaramos cuando es irracional y cuando racional
function irracional() {
    
    updateDisplay(counter = 1);
}
function updateDisplay(counter) {
    document.getElementById("counter-label").innerHTML = parseInt(counter);
}