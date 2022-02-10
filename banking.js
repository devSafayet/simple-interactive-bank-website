// handle deposit button even
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the ammount deposited
    const depositInput= document.getElementById('deposit-input');
    const depositAmmount = depositInput.value;
    console.log(depositAmmount);

    const depositTotal= document.getElementById('deposit-total');
    depositTotal.innerText = depositAmmount;

    //clear the deposit input flied
    depositInput.value='';
})