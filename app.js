const display = document.querySelector('#displayValue');
const operatorDisplay = document.querySelector('#operatorDisplay')
const valueBtns = document.querySelectorAll('.valueBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const equalsBtn = document.querySelector('.equalsBtn');
const clearBtn = document.querySelector('.clearBtn');

//display value should concatenate i.e.  use strings
//once an operator is chosen, display value should be saved to a variable
//clicked operator should be saved to a variable to know which function to use
//display currently selected operator next to display value
//clicking the equals sign should place the result of the operation in display value

let storedValue = 0;
let currentValue = 0;
let operator = '';
let begin = true;


//Have the calculator display the values being clicked
valueBtns.forEach(button => {
    button.addEventListener('click', () => {    
        if (begin === true) {
            display.textContent = '';
        }
        if (operator) {
        operatorDisplay.textContent = '';
        }

        begin = false;
        display.textContent += button.value;      
    })
})

//Have button decide which operation to use in the calculate function
//Clicking an operation passes the currently displayed value to storedValue
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.value;
        operatorDisplay.textContent = operator;
        storedValue = parseInt(display.textContent);
        begin = true;
    })
})

//calculate function to be used when the equals sign is clicked
const calculate = (storedValue, currentValue, operator) => {
    if (operator === '+') {
        return add(storedValue, currentValue);
    }

    if (operator === '-') {
        return sub(storedValue, currentValue);
    }

    if (operator === 'x') {
        return mult(storedValue, currentValue);
    }

    if (operator === '/') {
        return div(storedValue, currentValue);
    }

}

//When the equals sign is clicked, pass in the storedValue, currentValue, and operator selected
//Perform the selected operation, and return the result in the display
equalsBtn.addEventListener('click', () => {
    currentValue = parseInt(display.textContent);

    let result = calculate(storedValue, currentValue, operator);

    if (result === 'dbz') {
        result = storedValue;
    }

    storedValue = result;
    display.textContent = storedValue;
})




//Clear calculator back to initial conditions
clearBtn.addEventListener('click', () => {
    storedValue = 0;
    currentValue = 0;
    displayValue = '0';
    operator = '';
    begin = true;
    display.textContent = displayValue;
    operatorDisplay.textContent = operator;
})



const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => {
    if (b === 0) {        
        alert("Don't do that");
        return "dbz";
    } else {
        return a / b;
    }
}
