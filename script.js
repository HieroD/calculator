// global variable
let currentOperator;
let prevOperator = "+";
let result= 0;
let currentNumber = 0;
let prevNumber = 0;

const textResult = document.getElementById("text-result");
const subtextResult = document.getElementById("subtext-result");
const containerBtn = document.getElementById("container");

function operate() {
    currentNumber = Number(currentNumber);
    switch (prevOperator) {
        case "+" :
            result = prevNumber + currentNumber;
            break;
        case "-" :
            result = prevNumber - currentNumber;
            break;
        case "x" :
            result = prevNumber * currentNumber;
            break;
        case "/" :
            result = prevNumber / currentNumber;
            break;
    }
    
    prevOperator = currentOperator;
    prevNumber = result;
    currentNumber = 0;  
}

containerBtn.addEventListener("click", (e) => {
    if(e.target.className === "number") {
        if(/\.$/.test(textResult.textContent)) {
            currentNumber = currentNumber + e.target.textContent;
        } 
        else if (currentNumber === 0){
            currentNumber = (10 * currentNumber) + Number(e.target.textContent);
        }
        else {
            currentNumber = currentNumber + e.target.textContent;
        }
        textResult.append(e.target.textContent );
    }
    if(e.target.className === "operator") {
        if(textResult.textContent === "") {}
        else {
            currentOperator = e.target.textContent;
            operate();
            if(currentOperator === "=") {
                textResult.textContent = result;
                subtextResult.innerHTML = "";
            }
            else {
                textResult.append(currentOperator);
                subtextResult.textContent = result;    
            }
        }
    }

    if(e.target.id === "decimal"){
        if(textResult.textContent === "") {}
        else if(/\.$/.test(textResult.textContent)) {}
        else {
            currentNumber = currentNumber + "."
            textResult.append(".");
        }
    }

    if(e.target.id === "clear") {
        textResult.innerHTML = "";
        subtextResult.innerHTML = "";
        prevOperator = "+";
        result= 0;
        currentNumber = 0;
        prevNumber = 0;
    }
    if(e.target.id === "delete") {
        textResult.innerHTML = "";
        prevOperator = "+";
        result= 0;
        currentNumber = 0;
        prevNumber = 0;
    }
})