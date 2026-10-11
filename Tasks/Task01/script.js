let email = prompt("enter your email");
if(email.endsWith("@gmail.com")) {
    alert("Valid email");
} else {
    alert("Invalid email");
}

let password = prompt("enter your password");
if(password.length >= 8) {
    alert("Valid password");

} else {
    alert("Invalid password");
}

