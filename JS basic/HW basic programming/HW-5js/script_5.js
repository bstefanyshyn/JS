// Task 1
/*
let num = +prompt('Введіть номер місяця для визначення пори року', '');
switch (num) {
    case 12:
    case 1:
    case 2:
        alert('Це зима!');
        break;
    case 3:
    case 4:
    case 5:
        alert('Це весна!');
        break;
    case 6:
    case 7:
    case 8:
        alert('Це літо!');
        break;
    case 9:
    case 10:
    case 11:
        alert('Це осінь!');
        break;
    default: alert('Введіть число від 1 до 12!');
}
*/



// Task 2
/*
function check_simle_number(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            console.log('Не є простим числом');
            return false;
        }
    };
    console.log('Так, це просте число!');
    return true;
}

check_simle_number(7);
*/



// Task 3
/*
function findMax() {
    let i;
    let max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
    return max;
}
findMax(1, 123, 500, 655, 44, 88);
*/