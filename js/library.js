// declare variable and initialize
const totalPhonePriceField = document.getElementById('total-phone-price');
const totalCasePriceField = document.getElementById('total-case-price');
const subtotalElement = document.getElementById('sub-total');
const taxElement = document.getElementById('tax');
const grandTotalElement = document.getElementById('grand-total');
const phoneAmountField = document.getElementById('phone-amount-field');
const caseAmountField = document.getElementById('case-amount-field');

// update phone amount and price function
function updatePhone(isIncrement) {
    const phoneAmountString = phoneAmountField.value;
    let phoneAmount = parseInt(phoneAmountString);
    isIncrement ? phoneAmount++ : phoneAmount--;
    phoneAmountField.value = phoneAmount;
    const totalPhonePrice = phoneAmount * 1219;
    totalPhonePriceField.innerText = totalPhonePrice;
}

// change phone amount and price function
function changePhone() {
    const phoneAmountString = phoneAmountField.value;
    let phoneAmount = parseInt(phoneAmountString);
    const totalPhonePrice = phoneAmount * 1219;
    totalPhonePriceField.innerText = totalPhonePrice;
}

// update case amount and price function
function updateCase(isIncrement) {
    const caseAmountString = caseAmountField.value;
    let caseAmount = parseInt(caseAmountString);
    isIncrement ? caseAmount++ : caseAmount--;
    caseAmountField.value = caseAmount;
    totalCasePrice = caseAmount * 59;
    totalCasePriceField.innerText = totalCasePrice;
}

// change case amount and price function
function changeCase() {
    const caseAmountString = caseAmountField.value;
    let caseAmount = parseInt(caseAmountString);
    totalCasePrice = caseAmount * 59;
    totalCasePriceField.innerText = totalCasePrice;
}

// calculate subtotal function
function calculateSubtotal() {
    const subtotal = parseInt(totalPhonePriceField.innerText) + parseInt(totalCasePriceField.innerText);
    subtotalElement.innerText = subtotal;
}

// calculate tax function
function calculateTax() {
    const tax = parseInt(subtotalElement.innerText) * 0.15;
    taxElement.innerText = tax.toFixed(2);
}

// calculate grand total function
function grandTotal() {
    const grandTotal = parseFloat(subtotalElement.innerText) + parseFloat(taxElement.innerText);
    grandTotalElement.innerText = grandTotal.toFixed(2);
}