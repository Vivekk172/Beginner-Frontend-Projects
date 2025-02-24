let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    display.value = eval(display.value) 
}
function squareToDisplay(value) {
    display.value *= display.value;
}
function backspaceDisplay(value) {
    display.value = display.value.slice(0,-1);
}
