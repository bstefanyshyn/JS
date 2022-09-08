
let num = +prompt('Введіть номер місяця для визначення пори року', '');

if (num > 0 && num < 3 || num == 12 ) {
    alert('Це зима!');
 } else if (num >= 3 && num < 6) {
    alert('Це весна!');
 } else if (num >= 6 && num < 9) {
    alert('Це літо!');
 } else if (num >= 9 && num < 12) {
    alert('Це осінь!');
 } else  {
    alert('Введіть число від 1 до 12!')
 }