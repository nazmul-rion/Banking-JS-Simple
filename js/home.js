const emailField = document.getElementById('emailField');
const passField = document.getElementById('passwordField');
const loginbtn = document.getElementById('login-button');

loginbtn.addEventListener('click', function () {
    const email = emailField.value;
    const pass = passField.value;
    if (email == "nazmul" && pass == "rion") {
        window.location.href = "bank.html";
    }
})