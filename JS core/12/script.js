// Global DOM elements

var form = document.querySelector('.form'),
    inputItems = document.querySelectorAll('.inputItem'),
    login = document.querySelector('.login'),
    email = document.querySelector('.email'),
    password = document.querySelector('.password'),
    submit = document.querySelector('.actionBtn');

// regex configurations

const regexName = /^[A-Za-z]{3,21}$/,
    regexPassword = /[\w]{9,16}/,
    regexEmail = /[\w.-]{1,255}@[\w.-]{2,255}\.[\w.-]{2,64}/;

// validate input functions

function validateFirsName(login) {
    return regexName.test(String(login).toLowerCase());
}

function validatePassword(password) {
    return regexPassword.test(String(password).toLowerCase());
}

function validateEmail(email) {
    return regexEmail.test(String(email).toLowerCase());
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
    let log = login.value,
        passVal = password.value,
        emailVal = email.value;


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
    if (!validateFirsName(log)) {
        console.log('login not valid');
        login.classList.add('error');
        return false;
    }
    else {
        login.classList.remove('error');
    }
    if (!validatePassword(passVal)) {
        console.log('password not valid');
        password.classList.add('error');
        return false;
    }
    else {
        password.classList.remove('error');
    }
    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        email.classList.add('error');
        return false;
    }
    else {
        email.classList.remove('error');
    }

    form.addEventListener('submit', e => {
        e.preventDefault(); // error checking

        checkInputs();
    });
}

//Дополнительный совет - не загрязняйте глобальное пространство переменными, лучше объявите функцию, которая будет добавлять вашу разметку в таблицу и объявляйте переменные в ней
function myFunc() {

    //Для начала, вам нужно найти элемент, в который нужно вставить вашу разметку. Вданном случае таблицу с id='table'.
    var table = document.querySelector('.table');

    //Тут выдерните ваше значение из locslStorage, я просто присвою 1.
    var faucet1 = 1;
    //Теперь создаем строку и присваиваем ее переменной.
    var tr = document.createElement("tr");

    if (faucet1 == 1) {

        //добавляем разметку в созданную строку
        tr.innerHTML = `<th>${1} </th> <th>${2}</th> <th> гег</th> <th> гег </th> <th> гег</th> <th> гег</th>`;

        //вставляем строку в таблицу
        table.appendChild(tr);

    } else {

        console.log('error');

    }

};

myFunc();