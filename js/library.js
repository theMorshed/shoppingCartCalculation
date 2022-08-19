// update phone amount and price function
function updatePhone(isIncrement) {
    const phoneAmountField = document.getElementById('phone-amount-field');
    const totalPhonePriceField = document.getElementById('total-phone-price');
    const phoneAmountString = phoneAmountField.value;
    let phoneAmount = parseInt(phoneAmountString);
    isIncrement ? phoneAmount++ : phoneAmount--;
    phoneAmountField.value = phoneAmount;
    const totalPhonePrice = phoneAmount * 1219;
    totalPhonePriceField.innerText = totalPhonePrice;
}

// update case amounta and price function
function updateCase(isIncrement) {
    const caseAmountField = document.getElementById('case-amount-field');
    const totalCasePriceField = document.getElementById('total-case-price');
    const caseAmountString = caseAmountField.value;
    let caseAmount = parseInt(caseAmountString);
    isIncrement ? caseAmount++ : caseAmount--;
    caseAmountField.value = caseAmount;
    totalCasePrice = caseAmount * 59;
    totalCasePriceField.innerText = totalCasePrice;
}