const display = document.querySelector('.display');
const valueBtns = document.querySelectorAll('.valueBtn');
const clearBtn = document.querySelector('.clearBtn');

let value1 = 0;
let value2 = 0;
let operator = '';
let displayValue = '';
let begin = true;

valueBtns.forEach(button => {
    button.addEventListener('click', e => {    
        if (begin === true) {
            display.textContent = '';
        }

        begin = false;
        display.textContent += button.value;
    })
})

clearBtn.addEventListener('click', () => {
    currentValue = 0;
    displayValue = 0;
    begin = true;
    display.textContent = displayValue;
})

//display value should concatenate i.e.  use strings
//once an operator is chosen, display value should be saved to a variable
//clicked operator should be saved to a variable to know which function to use
//clicking the equals sign should place the result of the operation in display value
//clicking a different operator should do the same

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => {
    if (b === 0) {
        alert("Don't do that");
    } else {
        return a / b;
    }
}
