document.getElementById('btn-increase-phone').addEventListener('click', function(){
    updatePhone(true);
    calculateSubtotal();
    calculateTax();
    grandTotal();
});

document.getElementById('btn-decrease-phone').addEventListener('click', function () {
    updatePhone(false);
    calculateSubtotal();
    calculateTax();
    grandTotal();
});

document.getElementById('phone-amount-field').addEventListener('change', function(){
    changePhone();
    calculateSubtotal();
    calculateTax();
    grandTotal();
});

document.getElementById('case-amount-field').addEventListener('change', function () {
    changeCase();
    calculateSubtotal();
    calculateTax();
    grandTotal();
});