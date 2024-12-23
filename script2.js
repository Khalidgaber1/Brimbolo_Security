function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let cardNumber = document.getElementById('card-number').value;
    let expiration = document.getElementById('expiration').value;
    let cvv = document.getElementById('cvv').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;
if (name === "" ||phone === "" || email === "" || address === "" || cardNumber === "" || expiration === "" || cvv === "" || city === ""|| state === "" || zip ==="") {
    alert("All fields must be filled out");
    return false;
}
if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address");
    return false;
}
if( phone.length >=0|| phone.length<=11){
    alert("Please Enter characters between 0 and 11");
    return false;
}
    return true;
}