
const textarea = document.getElementById('textarea');
const buttons = document.querySelectorAll('.button');
const backspace = document.querySelector('.backspace');
const tab = document.querySelector('.tab');
const capslock = document.querySelector('.capslock');
const enter = document.querySelector('.enter');
const shift = document.querySelector('.shift');
const space = document.querySelector('.space');

let chars = [];

document.addEventListener('keydown', (event) => {
    textarea.value += event.key;
    chars = textarea.value.split('');
});

document.addEventListener('keydown', (event) => {

    if (event.key == "Backspace") {
        chars.pop();
        textarea.value = textarea.value.slice(0, -10);
    }
});

document.addEventListener('keydown', (event) => {

    if (event.key == 'CapsLock') {
        buttons.forEach(btn => {
            btn.classList.toggle('upper');
        });
        textarea.value = textarea.value.slice(0, -8);
    }
});

document.addEventListener('keydown', (event) => {

    if (event.key == "Tab") {
        chars.push(['     ']);
        textarea.value = textarea.value.slice(0, -3) + "    ";
    }
});

document.addEventListener('keydown', (event) => {

    if (event.key == "Shift") {
        textarea.value = textarea.value.slice(0, -5);
    }
});

document.addEventListener('keydown', (event) => {

    if (event.key == "Enter") {
        chars = textarea.value.split('');
        textarea.value = textarea.value.slice(0, -5) + '\n';
    }
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText;
        chars = textarea.value.split('');
    });
});

backspace.addEventListener('click', () => {
    chars.pop();
    textarea.value = chars.join('');
});

tab.addEventListener('click', () => {
    chars.push(['     ']);
    textarea.value = chars.join('');
});

capslock.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
    });
});

enter.addEventListener('click', () => {
    textarea.value += '\r\n';
    chars = textarea.value.split('');
});

shift.addEventListener('mousedown', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
    });
});

shift.addEventListener('mouseup', () => {
    buttons.forEach(btn => {
        btn.classList.remove('upper');
    });
});

space.addEventListener('click', () => {
    chars.push(' ');
    textarea.value = chars.join('');
});