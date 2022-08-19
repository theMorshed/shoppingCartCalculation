function updatePhoneAmount(isIncrement) {
    const phoneAmountField = document.getElementById('phone-amount-field');
    const totalPhonePrice = document.getElementById('total-amount-phone');
    const phoneAmountString = phoneAmountField.value;
    let phoneAmount = parseInt(phoneAmountString);
    isIncrement ? phoneAmount += 1 : phoneAmount -= 1;
    phoneAmountField.value = phoneAmount;
    const totalPriceNew = phoneAmount * 1219;
    totalPhonePrice.innerText = totalPriceNew;
}