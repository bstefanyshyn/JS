const date = new Date();
const fullDate = document.querySelector('.fullDate');
const time = document.querySelector('.time');
const showResultLoop = document.querySelector('.showResultLoop');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const value = document.querySelector('.value');

const showDate = () => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (day < 10) { day = "0" + day; }
    if (month < 10) { month = "0" + month; }

    fullDate.textContent = `${day}.${month}.${year}`;
};

showDate();

const clockInterval = setInterval(() => {
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
    showResultLoop.textContent += timeRef.innerHTML;
});

document.querySelector('.stopSec').addEventListener('click', () => {
    clearInterval(int);
});

document.querySelector('.resetSec').addEventListener('click', () => {
    clearInterval(int);
    [swMilliseconds, swSecond, swMinute, swHours] = [0, 0, 0];
    timeRef.innerHTML = '00 : 00 : 00';
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

    timeRef.innerHTML = ` ${m} : ${s} : ${ms}`;

}

// plus.addEventListener('click', () => {
//     clearInterval(int);
//     if (value.textContent < 60) {
//         value.textContent++;
//     }

// });

// minus.addEventListener('click', () => {
//     clearInterval(int);
//     if (value.textContent > 1) {
//         value.textContent--;
//     }
// });









// const startTimer = document.querySelector('.startTimer');
// const stopTimer = document.querySelector('.stopTimer');
// const resetTimer = document.querySelector('.resetTimer');
// const timerSetter = document.querySelector('.timer-setter');
// const timerAction = document.querySelector('.timerAction');

// let tmMinutes = 0;
// let tmSeconds = 0;

// function setTimer() {
//     if (tmMinutes >= 0) {
//         timerAction.innerHTML = `${tmMinutes}:${tmSeconds}`;
//     } else {
//         timerAction.innerHTML = '00:00';
//     }
// }
// setTimer();

// startTimer.addEventListener('click', () => {
//     timerAction.innerHTML = value.textContent + ": 00";
//     tmMinutes = parseInt(startTimer.value);
//     if (startTimer < 1) {
//         tmSeconds = startTimer.value.split('.')[1];
//     }



//     const interval = setInterval(() => {
//         if (tmSeconds > 0) {
//             tmSeconds--;
//         } else {
//             seconds = 59;
//             tmMinutes--;
//         }

//         setTimer();

//         if (tmMinutes < 0) {
//             setTimer()
//             clearInterval(interval);
//         }
//     }, 1000)
// })

const actionBtn = document.querySelector('.startTimer');
const timerSetter = document.querySelector('.timer-setter');
const timerAction = document.querySelector('.timerAction');

let minutes = 0;
let seconds = 0;

plus.addEventListener('click', () => {
    clearInterval(int);
    if (timerSetter.value < 60) {
        timerSetter.value++;
    }

});

minus.addEventListener('click', () => {
    clearInterval(int);
    if (timerSetter.value > 1) {
        timerSetter.value--;
    }
});

function setTimer() {
    if (minutes >= 0) {
        timerAction.innerHTML = `${minutes}:${seconds}`;
    } else {
        timerAction.innerHTML = '0:0';
    }
}

actionBtn.addEventListener('click', () => {

    minutes = parseInt(timerSetter.value);

    if (minutes < 1) {
        seconds = timerSetter.value.split('.')[1];
    }

    setTimer();

    const interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }

        setTimer();

        if (minutes < 0) {
            setTimer()
            clearInterval(interval);
        }
    }, 1000)
})

// const stopTimer = document.querySelector('.stopTimer');

// stopTimer.addEventListener('click', () => {
//     clearInterval(interval);
// });