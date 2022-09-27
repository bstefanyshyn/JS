// Global DOM elements

var form = document.querySelector('.form'),
    inputItems = document.querySelectorAll('.inputItem'),
    firstName = document.querySelector('.firstName'),
    lastName = document.querySelector('.lastName'),
    email = document.querySelector('.email'),
    password = document.querySelector('.password'),
    checkbox = document.querySelector('.inputItemCheckbox'),
    submit = document.querySelector('.actionBtn');

// regex configurations

const regexName = /^[A-Za-z]{3,21}$/,
    regexEmail = /[\w.-]{1,255}@[\w.-]{2,255}\.[\w.-]{2,64}/,
    regexPassword = /[\w]{9,16}/;

// validate input functions

function validateFirsName(firstName) {
    return regexName.test(String(firstName).toLowerCase());
}

function validateLastName(lastName) {
    return regexName.test(String(lastName).toLowerCase());
}

function validateEmail(email) {
    return regexEmail.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return regexPassword.test(String(password).toLowerCase());
}

// clases for validate inputs

function FildValid(regExp, fild) {

    if (!regExp.test(fild.value)) {
        fild.style.cssText = 'border: 3px solid red;';
        return false;
    } else {
        fild.style.cssText = 'border: 3px solid green;';
        return true;
    }
}

// conditions for validate forn

function checkInputs() {
    let firstVal = firstName.value,
        lastVal = lastName.value,
        emailVal = email.value,
        passVal = password.value;

    emptyInputs = Array.from(inputItems).filter(input => input.value === '');

    inputItems.forEach(function (input) {

        if (input.value === "") {
            input.classList.add('error'); //if input empty => add error style
        }
        else {
            input.classList.remove('error');//if input introduced => remove error style
            input.classList.add('ok'); 
        }
    });
    if (emptyInputs.length !== 0) {
        console.log('input not filled');
        return false;
    }
    if (!validateFirsName(firstVal)) {
        console.log('firstName not valid');
        firstName.classList.add('error');
        return false;
    }
    else {
        firstName.classList.remove('error');
    }
    if (!validateLastName(lastVal)) {
        console.log('lastName not valid');
        lastName.classList.add('error');
        return false;
    }
    else {
        lastName.classList.remove('error');
    }
    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        email.classList.add('error');
        return false;
    }
    else {
        email.classList.remove('error');
    }
    if (!validatePassword(passVal)) {
        console.log('password not valid');
        password.classList.add('error');
        return false;
    }
    else {
        password.classList.remove('error');
    }
    if (!checkbox.checked) {
        console.log('checkbox not checked');
        checkbox.classList.add('error');
        return false;
    }
    else {
        checkbox.classList.remove('error');
    }

    var accountModal = document.getElementById('accountModal'),
        startExploring = document.getElementById('startExploring');

    accountModal.style.display = 'block'; //show modal window

    startExploring.onclick = function () {
        accountModal.style.display = 'none';
        inputItems.forEach(function (input) {

            input.value = "";
            checkbox.checked = false;
            input.classList.remove('ok');
        });
    }
}

form.addEventListener('submit', e => {
    e.preventDefault(); // error checking

    checkInputs();
});