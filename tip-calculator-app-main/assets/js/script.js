// Get DOM elements
const billInput = document.getElementById('bill');
const customTipInput = document.getElementById('custom');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btns button');
const tipAmountDisplay = document.querySelector('.tipAmount');
const totalDisplay = document.querySelector('.total');
const resetButton = document.getElementById('resetBtn');

let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

function validateInputs() {
    let valid = true;

    if (billValue <= 0) {
        billInput.classList.add('input-error');
        valid = false;
    } else {
        billInput.classList.remove('input-error');
    }

    if (peopleValue <= 0) {
        peopleInput.classList.add('input-error');
        valid = false;
    } else {
        peopleInput.classList.remove('input-error');
    }

    return valid;
}

function calculateTip() {
    if (!validateInputs()) return;

    const tipAmount = (billValue * tipValue) / peopleValue;
    const total = (billValue + tipAmount * peopleValue) / peopleValue;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalDisplay.textContent = `$${total.toFixed(2)}`;
}

billInput.addEventListener('input', function() {
    billValue = parseFloat(billInput.value);
    calculateTip();
});

peopleInput.addEventListener('input', function() {
    peopleValue = parseInt(peopleInput.value);
    calculateTip();
});

tipButtons.forEach(button => {
    button.addEventListener('click', function() {
        tipValue = parseFloat(this.textContent) / 100;
        customTipInput.value = '';
        calculateTip();
    });
});

customTipInput.addEventListener('input', function() {
    tipValue = parseFloat(customTipInput.value) / 100;
    calculateTip();
});

resetButton.addEventListener('click', function() {
    billInput.value = '';
    customTipInput.value = '';
    peopleInput.value = '';
    tipAmountDisplay.textContent = '$0.00';
    totalDisplay.textContent = '$0.00';
    billValue = 0.0;
    tipValue = 0.15;
    peopleValue = 1;
    billInput.classList.remove('input-error');
    peopleInput.classList.remove('input-error');
});
