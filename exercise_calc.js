let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';
const numberButtons = document.querySelectorAll('.numbers');

function addEventListenerToButtons() {
    // AC
    document.getElementById('reset').addEventListener('click', clearDisplay);

    // C
    document.getElementById('delete').addEventListener('click', clearDisplay);

    // Numbers
    numberButtons.forEach(button => {
        button.addEventListener('click', function () {
            appendNumber(button.textContent);
        });
    });

    // =
    document.getElementById('equals').addEventListener('click', calculate);
}

function modelo() {
    if (Se ha pulsado algún boton) {
        currentInput += number;
        updateDisplay();
    } else {
        updateDisplay()
    }
}

function updateDisplay() {
    document.getElementById("display").innerText = currentInput;
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    updateDisplay();
}

function calculate() {
    if (currentInput !== '') {
        secondOperand = currentInput;
        currentInput = '';

        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);

        switch (currentOperator) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '÷':
                if (num2 !== 0) {
                    currentInput = (num1 / num2).toString();
                } else {
                    currentInput = 'Error';
                }
                break;
            case '^':
                currentInput = Math.pow(num1, num2).toString();
                break;
        }

        updateDisplay();
    }
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (firstOperand === '') {
            firstOperand = currentInput;
            currentInput = '';
        } else {
            calculate();
        }
        currentOperator = operator;
    }
}

addEventListenerToButtons();
