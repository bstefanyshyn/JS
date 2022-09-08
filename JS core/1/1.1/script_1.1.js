// Task 1
function findSpace(str) {
    let count = 0;
    let space = [' '];

    for (let char of str) {
        if (space.includes(char)) {
            count += 1;
        }
    }
    return count;
}
// console.log(findSpace(prompt('Введіть текст для визначення кількості пробілів','')));



// Task 2
function checkEmail() {
    let mail = prompt('Введіть адресу електронної скриньки', '');
    at = mail.indexOf('@');
    if (at == -1) {
        alert('Немає символу "@".');
        return false;
    }
    if ((mail.charAt(mail.length - 1) == '@')) {
        alert('Адресу електронної скриньки було введено не вірно.');
        return false;
    }
    if ((mail.charAt(0) == '@')) {
        alert('Адресу електронної скриньки було введено не вірно.');
        return false;
    }
    alert("Вітаємо!");
};
// checkEmail();



// Task 3
function wordCount(str = prompt('', '')) {
    return str.split('html').length - 1;
}
// console.log(wordCount());



// Task 4
function clearUrl(str = prompt('', '')) {
    if (str.charAt(4) == 's') {
        return str.substring(8);
    }
    if (str.charAt(3) == 'p') {
        return str.substring(7);
    }
}
// console.log(clearUrl());
