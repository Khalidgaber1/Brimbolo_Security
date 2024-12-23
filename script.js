function validateForm() {
    var name = document.getElementById('name').value;
    var name = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('address').value;
    var message = document.getElementById('message').value;
if (name === "" ||phone === "" || email === "" || address === "" || message === "") {
    alert("All fields must be filled out");
    return false;
}
if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address");
    return false;
}
if(message>=30||message<=300){
    alert("Please Enter characters between 30 and 300");
    return false;
}
    return true;
}
