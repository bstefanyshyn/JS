
result = 0;
let question1 = prompt('Продовжіть числовий ряд: 10,12,9,11,8,10,...', '');
if (question1 == 7) {
    result ++;
}
else {

}
let question2 = prompt('Продовжіть числовий ряд: 24,21,19,18,15,13,...', '');
if (question2 == 12) {
    result ++;
}
else {

}
let question3 = prompt('Продовжіть числовий ряд: 111,90,59,75,54,23,...', '');
if (question3 == 39) {
    result ++;
}
else {

}
let question4 = prompt('Яке число пропущене в наступній послідовності: 85,110,135,...,185,210', '');
if (question4 == 160) {
    result ++;
}
else {

}
let question5 = prompt('Яке число пропущене в наступній послідовності: 62,84,106,...,150,172', '');
if (question5 == 128) {
    result ++;
}
else {

}
let question6 = prompt('Яке число пропущене в наступній послідовності: 325,436,547,...,769,880', '');
if (question6 == 658) {
    result ++;
}
else {

}
let question7 = prompt('Продовжіть числовий ряд: 3,6,8,16,18,36,...', '');
if (question7 == 38) {
    result ++;
}
else {

}
let question8 = prompt('Продовжіть числовий ряд: 12,7,10,5,8,3,...', '');
if (question8 == 6) {
    result ++;
}
else {

}
let question9 = prompt('Продовжіть числовий ряд: 8,16,9,18,11,...', '');
if (question9 == 22) {
    result ++;
}
else {

}
let question10 = prompt('Продовжіть числовий ряд: 10,6,9,18,14,...', '');
if (question10 == 17) {
    result ++;
}
else {

}
alert (`Ваш результат у балах: ${result}` , '');
if (result == 0) {
    alert('Вам потрібно ще багато працювати над собою')
}
if (result >= 1 && result <=3 ) {
    alert('У Вас початковий рівень')
}
if (result >= 4 && result <=6 ) {
    alert('У Вас середній рівень')
}
if (result >= 7 && result <=9 ) {
    alert('У Вас достатній рівень')
}
if (result == 10) {
    alert('У Вас високий рівень')
}