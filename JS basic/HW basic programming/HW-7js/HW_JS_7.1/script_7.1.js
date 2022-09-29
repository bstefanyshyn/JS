const offsetHeight = document.body.offsetHeight;                // page height
const clientHeight = document.documentElement.clientHeight;     //  client height(user screen height)
const par1 = document.querySelector('.p1');
const par2 = document.querySelector('.p2');
const par3 = document.querySelector('.p3');
const img = document.querySelector('.image');

window.addEventListener('scroll', event => {

    const currentScroll = window.scrollY;                       // current position
    const visibleHeight = offsetHeight - clientHeight;
    const percentage = Math.round(currentScroll / visibleHeight * 100);

    if (percentage > 20) {
        par1.style.fontSize = `clamp(15px,${percentage}px,50px`;
    }
    if (percentage > 30) {
        par2.style.left = `clamp(20px,${percentage * 3}px,400px`;
        par2.style.width = `clamp(150px,${percentage * 7}px,400px`;
    }
    if (percentage > 40) {
        par3.style.fontSize = `${130 - percentage}px`;
    }
    if (percentage > 30) {
        img.style.right = `${percentage * 3}px`;
    }
})
let scrollDown = document.querySelector('.p1');
scrollDown.addEventListener('click', (ev) => {
    document.documentElement.scrollTo(0, 600)
})

let scrollUp = document.querySelector('.p3');
scrollUp.addEventListener('click', (ev) => {
    document.documentElement.scrollTo(0, 0)
})


