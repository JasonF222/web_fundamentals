//Log to Display //

let disp = "";

function press(numVal) {
    // I want number pressed to display in display window //
    var displayDiv = document.querySelector("#display");
        disp = disp + numVal.toString();
        displayDiv.innerText = disp;
}

// Performing Operations //

let values = [];
let curFun = "";
let sum = 0;

function setOP(OP) {
    
    if(values.length === 1) {
        var valTwo = parseFloat(disp);
        values.push(valTwo);
        calc(curFun);
        values = [];
        values.push(sum);
        disp = "";
        curFun = OP;
    }
    
    if(values.length === 0) {
        curFun = OP;
        var valOne = parseFloat(disp);
        values.push(valOne);
        disp = "";
    }
}


//This is where the operator does the math //

function calc(cal) {
    if(cal === "+") {
        sum = values[0] + values[1];
    }
    if(cal === "-") {
        sum = values[0] - values[1];
    }
    if(cal === "*") {
        sum = values[0] * values[1];
    }
    if(cal === "/") {
        sum = values[0] / values[1];
    }
    var total = document.querySelector("#display");
    total.innerText = sum;
}

// To Clear the Calculator //

function clr() {
    values = [];
    sum = 0;
    curFun = "";
    disp = "";
    var clearDisplay = document.querySelector("#display");
    clearDisplay.innerText = "0";
}

// To return final Value //

function calculate() {
    // when pressed it will return final value //
    var valTwo = parseFloat(disp);
        values.push(valTwo);
        calc(curFun);
}








