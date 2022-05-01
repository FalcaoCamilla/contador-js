var currentNumberWrapper = document.getElementById('currentNumber'); //span
var currentNumber=0; 

function increment(){
    currentNumber=currentNumber+1;
    currentNumberWrapper.innerHTML = currentNumber; //dentro do html
}

function decrement(){
    currentNumber=currentNumber-1;
    currentNumberWrapper.innerHTML = currentNumber; //dentro do html
}