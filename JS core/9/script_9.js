const date = new Date();
const showResultLoopWindow = document.querySelector('.showResultLoopWindow');

const showDate = () => {
    const fullDate = document.querySelector('.fullDate');
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (day < 10) { day = "0" + day; }
    if (month < 10) { month = "0" + month; }

    fullDate.textContent = `${day}.${month}.${year}`;
};

showDate();

const clockInterval = setInterval(() => {
    const time = document.querySelector('.time');
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    const newTime = `${hours + ':' + minutes + ':' + seconds}`;
    time.innerHTML = newTime;

}, 1000);

let [swMilliseconds, swSecond, swMinute,] = [0, 0, 0];
let timeRef = document.querySelector('.mainTime');
let int = null;

document.querySelector('.startSec').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(mainTime, 10);
});

document.querySelector('.loopSec').addEventListener('click', () => {
    clearInterval(int);
    if (timeRef.innerText != '00:00:00') {
        showResultLoopWindow.textContent += timeRef.textContent;
    }
});

document.querySelector('.stopSec').addEventListener('click', () => {
    clearInterval(int);
});

document.querySelector('.resetSec').addEventListener('click', () => {
    clearInterval(int);
    [swMilliseconds, swSecond, swMinute, swHours] = [0, 0, 0];
    timeRef.innerHTML = '00:00:00';
    showResultLoopWindow.textContent = '';
});

function mainTime() {
    swMilliseconds += 10;
    if (swMilliseconds == 1000) {
        swMilliseconds = 0;
        swSecond++;

        if (swSecond == 60) {
            swSecond = 0;
            swMinute++;
            if (swMinute == 60) {
                swMinute = 0;
            }
        }
    }
    let m = swMinute < 10 ? "0" + swMinute : swMinute;
    let s = swSecond < 10 ? "0" + swSecond : swSecond;
    let ms = swMilliseconds < 10 ? "00" + swMilliseconds : swMilliseconds < 100 ? "0" + swMilliseconds : swMilliseconds;

    timeRef.innerHTML = ` ${m}:${s}:${ms}`;
}

const startTimer = document.querySelector('.startTimer');
const timerSetter = document.querySelector('.timerSetter');
const timerAction = document.querySelector('.timerAction');

var minutesTimer = 00;
var secondsTimer = 00;
// if (minutesTimer < 10) { minutesTimer = "0" + minutesTimer; }
// if (secondsTimer < 10) { secondsTimer = "0" + secondsTimer; }

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    clearInterval(int);
    if (timerSetter.value < 60) {
        timerSetter.value++;
    }
});

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    clearInterval(int);
    if (timerSetter.value > 1) {
        timerSetter.value--;
    }
});

function setTimer() {
    if (minutesTimer > 0) {
        timerAction.innerHTML = `${minutesTimer}:${secondsTimer}`;
    }
    else {
        timerAction.innerHTML = '00:00';
    }
}

startTimer.addEventListener('click', () => {
    minutesTimer = parseInt(timerSetter.value);

    if (minutesTimer < 1) {
        secondsTimer = timerSetter.value.split('.')[1];
    }

    setTimer();

    const interval = setInterval(() => {
        if (secondsTimer > 0) {
            secondsTimer--;
        }

        else {
            secondsTimer = 59;
            minutesTimer--;
        }

        setTimer();

        if (minutesTimer < 0) {
            setTimer()
            clearInterval(interval);
        }

    }, 1000)
    const stopTimer = document.querySelector('.stopTimer');
    stopTimer.addEventListener('click', () => {
        clearInterval(interval);
    });

    const resetTimer = document.querySelector('.resetTimer');
    resetTimer.addEventListener('click', () => {
        clearInterval(interval);
        timerAction.innerHTML = '00:00'
    });
})