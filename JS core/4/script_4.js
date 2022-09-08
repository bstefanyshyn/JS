document.getElementById('btn').onclick = () => {
    let backgroundBodyColor = prompt('1. Який фон будемо використаовувати для сторінки?');    // color: red, green, grey....
    let bodyFontStyle = prompt('2. Який стиль шрифту ти б хотів використати на сторінці');    // style: normal, italic, oblique
    let alignH1 = prompt('3. Як вирівняємо h1?');                                            // textAlign: left, right, center
    let backgroundLink = prompt('4. Вкажи колір фону параграфа з посиланнями');                 // color: red, green, grey....
    let colorParagraphLink = prompt('5. Вкажи колір тексту для параграфу з посиланнями');      // color: red, green, grey....
    let linkColor = prompt('6. Вибери колір тексту посилань');                                   // color: red, green, grey....
    let divTextColor = prompt('7. Вибери колір тексту для блоку');                           // color: red, green, grey....
    let divTextSize = prompt('8. Вкажи розмір тексту для блоку');                            // 10px or 18px or else with "px"
    let divTextWeight = prompt('9. Вибери товщину шрифту для блоку');                          // 100...900 or lighter...bolder
    let listStyle = prompt('10. Вкажи тип маркування списку');                                // circle, square, upper-roman, lower-alpha
    let link1 = prompt('Посилання 1');
    let link2 = prompt('Посилання 2');
    let link3 = prompt('Посилання 3');

    const body = document.body; 

    body.style.background = backgroundBodyColor;
    body.style.fontStyle = bodyFontStyle;
    body.firstElementChild.style.textAlign = alignH1;
    body.children[1].style.background = backgroundLink;
    body.children[1].style.color = colorParagraphLink;

    let ParagraphLink = document.getElementsByTagName('a');
    for (let i = 0; i < ParagraphLink.length; i++) {
        ParagraphLink[i].style.color = linkColor;
    }
    
    const bChild = document.body.children;

    bChild[2].style.color = divTextColor;
    bChild[2].style.fontSize = divTextSize;
    bChild[2].style.fontWeight = divTextWeight;
    bChild[2].children[0].style.listStyleType = listStyle;
    bChild[1].children[0].innerHTML = link1;
    bChild[1].children[0].href = 'http://' + link1;
    bChild[1].children[0].target = '_blank';
    bChild[1].children[1].innerHTML = link2;
    bChild[1].children[1].href = 'http://' + link2;
    bChild[1].children[1].target = '_blank';
    bChild[1].children[2].innerHTML = link3;
    bChild[1].children[2].href = 'http://' + link3;
    bChild[1].children[2].target = '_blank';
};
