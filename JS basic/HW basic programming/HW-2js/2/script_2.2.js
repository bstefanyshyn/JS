let password;
let username;
username = prompt('Enter Your username', '');

if (username == "name") {
    password = prompt('Enter Your password', '');
}
else if (username == null) {
    alert('Login cancelled');
}
else {
    alert('I don"t know You');
}
if (password == "logos") {
    alert('Welcome!');
}
else if (password == null) {
    alert('Login cancelled');
}
else {
    alert('The password is incorrect');
}