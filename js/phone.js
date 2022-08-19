document.getElementById('btn-increase-phone').addEventListener('click', function(){
    updatePhoneAmount(true);
});

document.getElementById('btn-decrease-phone').addEventListener('click', function () {
    updatePhoneAmount(false);
});