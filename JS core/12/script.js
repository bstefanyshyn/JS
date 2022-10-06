// Global DOM elements

var form = document.querySelector('.form'),
    inputItems = document.querySelectorAll('.inputItem'),
    login = document.querySelector('.login'),
    email = document.querySelector('.email'),
    password = document.querySelector('.password'),
    submit = document.querySelector('.actionBtn'),
    edit = document.querySelector('.edit'),
    counter = 0;

// regex configurations

const regexName = /^[A-Za-z]{3,21}$/,
    regexPassword = /[\w]{9,16}/,
    regexEmail = /[\w.-]{1,255}@[\w.-]{2,255}\.[\w.-]{2,64}/;

// validate input functions

function validateLogin(login) {
    return regexName.test(String(login).toLowerCase());
}
function validatePassword(password) {
    return regexPassword.test(String(password).toLowerCase());
}
function validateEmail(email) {
    return regexEmail.test(String(email).toLowerCase());
}

// conditions for validate form

function checkInputs() {
    let log = login.value,
        passVal = password.value,
        emailVal = email.value;

    inputItems.forEach(function (input) {

        if (input.value === "") {
            console.log('input not filled');
            input.classList.add('error'); //if input empty => add error style
        }
        else {
            input.classList.remove('error');//if input introduced => remove error style
            input.classList.add('ok');
        }
    })
    if (!validateLogin(log)) {
        console.log('login not valid');
        login.classList.remove('ok');
        login.classList.add('error');
        return false;
    }
    else {
        login.classList.add('ok');
    }
    if (!validatePassword(passVal)) {
        console.log('password not valid');
        password.classList.remove('ok');
        password.classList.add('error');
        return false;
    }
    else {
        password.classList.add('ok');
    }
    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        email.classList.remove('ok');
        email.classList.add('error');
        return false;
    }
    else {
        email.classList.add('ok');
    }
    counter++;
}

let users = [];
let index = 0;

function addUser() {
    var newUser = {
        position: counter,
        name: login.value,
        pasW: password.value,
        eAdr: email.value,
        editBtn: '',
        deleteBtn: ''
    };
    // console.log(Object(newUser));
    if (validateLogin(login.value) && validatePassword(password.value) && validateEmail(email.value)) {
        users.push(newUser);
    }
    console.log(users);

    render();
}

function render() {
    var table = document.querySelector('.table'),
        tr = document.createElement("tr");
    if (validateLogin(login.value) && validatePassword(password.value) && validateEmail(email.value)) {
        //add value to tr table
        tr.innerHTML = `<th>${counter} </th> <th>${users[users.length - 1]['name']}</th> <th> ${users[users.length - 1]['pasW']}</th> <th> ${users[users.length - 1]['eAdr']}</th> <th><button class="edit2">Edit</button></th> <th><button>Delete</button></th>`;
        //add tr into table
        table.appendChild(tr);
    } else {
        console.log('error');
    }
    inputItems.forEach(function (input) {
        input.value = "";
        input.classList.remove('ok');
    });
    submit.style["boxShadow"] = '0 0 6px green';
};

form.addEventListener('submit', e => {
    e.preventDefault(); // error checking

    checkInputs();
    addUser();

    inputItems.forEach(function (input) {
        input.value = "";
        input.classList.remove('ok');
    });
    submit.style["boxShadow"] = '0 0 6px green';
    let trata = document.querySelector('.edit2');//ПЕРЕЙМЕНУВАТИ
    trata.addEventListener('click', function () {
        
        // users.shift();// ВИДАЛЯЄ ЛИШЕ ПЕРШЕ ЗНАЧЕННЯ
        console.log(users);
        // var table = document.querySelector('.table');
        users.splice(0, 1);
        // table.deleteRow(1); // НЕ ЗМІНЮЄ ЗНАЧЕННЯ counter
        render();
    });
});

edit.addEventListener('click', function () {

    users.shift();// ВИДАЛЯЄ ЛИШЕ ПЕРШЕ ЗНАЧЕННЯ
    console.log(users);
    var table = document.querySelector('.table');
    table.deleteRow(1); // НЕ ЗМІНЮЄ ЗНАЧЕННЯ counter
    // render();
});
