function checkNumber() {
    let result = document.getElementById("result");
    let passInput = document.getElementById("password").value;
    if (/^\+383\s\d{2}\s\d{3}\s\d{3}$/.test(passInput)) {
        result.innerHTML = "Number is valid";
        result.style.color = 'green';
    }
    else {
        result.innerHTML = "Number is invalid";
        result.style.color = 'red';
    }
}