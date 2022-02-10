// handle deposit event handler
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the ammount deposited
    const depositInput= document.getElementById('deposit-input');
    const NewDepositAmmountText = depositInput.value;
    const NewDepositAmmount = parseFloat(NewDepositAmmountText);
    // update deposit ammonut
    const depositTotal= document.getElementById('deposit-total');
    previousDepositText = depositTotal.innerText;
    previousDepositAmmout = parseFloat(previousDepositText);
    const newDepositTotal= NewDepositAmmount + previousDepositAmmout;
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const totalBalance= document.getElementById('total-balance');
    totalBalanceText= totalBalance.innerText;
    const previousBalanceToatal = parseFloat(totalBalanceText);
    newBalanceTotal= previousBalanceToatal + NewDepositAmmount;
    totalBalance.innerText= newBalanceTotal;

    //clear the deposit input flied
    depositInput.value='';
})

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput= document.getElementById('withdraw-input');
    const withdrawAmmoutText= withdrawInput.value;
    const newWithdrawAmmout= parseFloat(withdrawAmmoutText);
    console.log(newWithdrawAmmout);

    //set withdraw total
    const withdrawTotal= document.getElementById('withdraw-total');
    const previousWithdrawText= withdrawTotal.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawText);
    
    newWithdrawtotal= previousWithdrawTotal + newWithdrawAmmout;
    withdrawTotal.innerText= newWithdrawtotal;

    //update balance
    const totalBalance= document.getElementById('total-balance');
    const previousBalanceText= totalBalance.innerText;
    const previousTotalBalance= parseFloat(previousBalanceText);
    const newBalanceTotal= previousTotalBalance - newWithdrawAmmout;
    totalBalance.innerText=newBalanceTotal;

    //clear withdraw input
    withdrawInput.value= '';
})