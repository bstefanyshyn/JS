//Task 1
/*let password = 'logos';
let answer;
let i = 5;
while (i > 0 && answer != password) {
    answer = prompt('Введіть пароль', '');
    i--;
    if (answer === password) {
        alert('Запрошуємо на сайт!');
    }
    else if (i == 0) {
        alert('Будь ласка спробуйте пізніше!');
    }
    else {
        alert(`Залишилось '${i}' спроби`);
    }
}
*/



//Task 2.1
/*let number = prompt('Введіть натуральне число', '');
if (number < 0) {
    alert(`Помилка! Факторіал для від'ємного числа не існує.`);
}
else if (number === 0) {
    alert(`Факторіал числа ${number} дорівнює 1.`);
}
else {
    let factorial = 1;
    let i = 1;
    while ( i <= number ) {
        factorial = factorial * i;
        i++;
    }
    alert(`Факторіал числа ${number} дорівнює ${factorial}.`);
}
*/



//Task 2.2
/*let i = 1000;
while (i <= 9999) {
    console.log(i);
    i += 3;
}
*/



//Task 2.3
/*let i = 0;
let j = 1;
while (i < 55) {
    j = 1 + (i * 2);
    console.log(i);
    i++;
}
*/



//Task 2.4
/*let i = 90;
while (i >= 0) {
    console.log(i);
    i -= 5;
}
*/



//Task 2.5
/*let j = 2;
let i = 1;
while (i <= 20) {
    console.log(j);
    j *= 2;
    i++;
}
*/



//Task 2.6
/*let a = 2;
while (a < 10000) {
    console.log(a);
    a = 2 * a - 1;
}
*/



//Task 2.7
/*let a = -166;
while (a < 100) {
    if (a > -100 && (a < -9 || a > 9))
        console.log(a);
    a = 2 * a + 200;
}
*/



//Task 2.8
/*let number = +prompt('Введіть число', '');
let power = +prompt('Введіть степінь', '');
let result = 1;
let up = power;
if (power < 0) {
    up = -power;
}
let i = 0;
while (i < up) {
    result = result * number;
    i++;
}
if (power < 0) {
    result = 1 / result;
}
alert(`${number} в ${power} степені дорівнює ${result}.`);
*/