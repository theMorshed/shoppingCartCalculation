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