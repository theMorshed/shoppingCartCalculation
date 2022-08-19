document.getElementById('btn-increase-case').addEventListener('click', function(){
    updateCase(true);
    calculateSubtotal();
    calculateTax();
    grandTotal();
});

document.getElementById('btn-decrease-case').addEventListener('click', function () {
    updateCase(false);
    calculateSubtotal();
    calculateTax();
    grandTotal();
});