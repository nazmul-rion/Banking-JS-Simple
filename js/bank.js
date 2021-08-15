const depositAmmountField = document.getElementById('deposit-ammount');
const withdrawAmmountField = document.getElementById('withdraw-ammount');
const balanceAmmountField = document.getElementById('balance-ammount');
const inputAmmountField = document.getElementById('input-ammount');
const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');

// Deposit Button
depositButton.addEventListener("click", function () {
    const inputAmmount = parseFloat(inputAmmountField.value);
    const depositAmmount = parseFloat(depositAmmountField.innerText);
    const balanceAmmount = parseFloat(balanceAmmountField.innerText);
    depositAmmountField.innerText = (depositAmmount + inputAmmount).toFixed(2);
    balanceAmmountField.innerText = (balanceAmmount + inputAmmount).toFixed(2);
    inputAmmountField.value = '';
})

// Withdraw Button
withdrawButton.addEventListener("click", function () {
    const inputAmmount = parseFloat(inputAmmountField.value);
    const withdrawAmmount = parseFloat(withdrawAmmountField.innerText);
    const balanceAmmount = parseFloat(balanceAmmountField.innerText);
    if (inputAmmount == NaN)
        inputAmmount = 0;
    withdrawAmmountField.innerText = (withdrawAmmount + inputAmmount).toFixed(2);
    balanceAmmountField.innerText = (balanceAmmount - inputAmmount).toFixed(2);
    inputAmmountField.value = '';
})