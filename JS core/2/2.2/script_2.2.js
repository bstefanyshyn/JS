// Task 1
let getArea = (number = prompt('Введіть радіус для обчислення площі круга', '')) => {
    if (number === null || number === ('')) {
        alert('Будь ласка, введіть число!');
    }
    else if (isNaN(number) === true) {
        alert('Повинно бути числове значення');
    }
    else {
        let pi = 3.14;
        let s = pi * Math.pow(number, 2);
        alert(`Площа дорівнює: ${s} квадратних одиниць`)
    }
}
// getArea();



// Task 2
let getSqrt = (number = prompt('Введіть число для визначення кореня квадратного', '')) => {
    if (number === null || number === ('')) {
        alert('Будь ласка, введіть число!');
    }
    else if (isNaN(number) === true) {
        alert('Повинно бути числове значення');
    }
    else if (number < 0) {
        alert('Введіть додатнє число');
    }
    else {
        let sqrt = Math.sqrt(number);
        alert(`Квадратний корінь з ${number} дорівнює: ${sqrt}`)
    }
}
// getSqrt();



// Task 3
let MyMath = {
    pi: function () {
        return numberPi = 3.14159265358979;
    },
    pow: function (number, power) {
        if (number === undefined || power === undefined) {
            return console.log('Будь ласка, введіть число!');
        }
        if (isNaN(number) === true || isNaN(power) === true) {
            return console.log(('Повинно бути числове значення'));
        }
        else {
            let result = number ** power;
            return result;
        }
    },
    abs: function (number) {
        if (number === undefined) {
            return console.log('Будь ласка, введіть число!');
        }
        else if (isNaN(number) === true) {
            return console.log('Повинно бути числове значення!');
        }
        else if (number <= 0) {
            return 0 - number;
        }
        else
            return number;
    },
    max: function () {
        let maxValue = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (maxValue < arguments[i]) {
                maxValue = arguments[i];
            }
        }
        return maxValue;
    },
    min: function () {
        let minValue = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (minValue < arguments[i]) {
                minValue = arguments[i];
            }
        }
        return minValue;
    },
}

MyMath.pi();
MyMath.pow(3, 2);
MyMath.abs(-10);
MyMath.max(-5, 2, 3);
MyMath.min(-5, 2, 3);