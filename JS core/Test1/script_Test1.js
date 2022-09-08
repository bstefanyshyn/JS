// описуємо глобальні змінні
const save = document.getElementById('save');
const textarea = document.getElementById('textarea');
const textareaBlock = document.getElementById('textareaBlock');
const style = document.getElementById('style');
const styles = document.getElementById('styles');
const radioDiv = document.getElementById("radioDiv");
const colorBlockForFont = document.getElementById("colorBlockForFont");
const colorBlockItemsFF = document.querySelectorAll('.blockFF');
const colorBlockForBgr = document.getElementById("colorBlockForBgr");
const colorBlockItemsBg = document.querySelectorAll('.blockBg');
const option = document.getElementById('option');
const buttonsEditSave = document.getElementById('buttons');
const choose = document.getElementById('choose');
const table = document.getElementById('table');
const list = document.getElementById('list');
const createTableBtn = document.getElementById('createTableBtn');
const createListBtn = document.querySelector('.createListBtn');

const addItem = () => {
    const value = textarea.value;
    const result = document.getElementById('result');
    result.innerHTML = value;
    textareaBlock.style.display = 'none';
}
addItem();
// Зміна шрифту у вікні "result"
const getSelectValue = () => {
    const select = document.getElementById('select');
    var selectedValue = select.value;
    result.style.fontFamily = `${selectedValue}`;
};
// Функціонал кнопки "edit"
const edit = document.getElementById('edit');
edit.addEventListener('click', () => {
    textareaBlock.style.display = 'block';
    styles.style.display = 'none';

    save.addEventListener('click', addItem);
    // Функціонал кнопки "add"
    const add = document.getElementById('add');
    add.addEventListener('click', () => {
        result.style.display = 'none';
        buttonsEditSave.style.display = 'none';
        option.style.display = 'none';
        choose.style.display = 'block';
        // Створення таблиці
        const radioTable = document.getElementById('radioTable');
        radioTable.addEventListener("click", () => {
            table.style.display = 'block';
            list.style.display = 'none';
            createTableBtn.style.display = 'block';
            createListBtn.style.display = 'none';

            const countRow = document.querySelector('.countTR');
            const countCell = document.querySelector('.countTD');
            const widthTD = document.querySelector('.widthTD');
            const heightTD = document.querySelector('.heightTD');
            const borderWidth = document.querySelector('.borderWidth');
            const selectedBorderType = document.querySelector('.borderTypes');
            const selectedBorderColor = document.querySelector('.borderColors');
            const createTable = document.createElement('table');

            createTable.classList.add('tableStyle');

            createTableBtn.addEventListener('click', () => {
                const numberRows = countRow.value;
                const numberCells = countCell.value;
                result.style.display = 'block';
                option.style.display = 'block';
                buttonsEditSave.style.display = '';
                choose.style.display = 'none';

                for (let i = 0; i < numberRows; i++) {
                    const tableRow = document.createElement("tr");
                    createTable.append(tableRow);

                    for (let j = 0; j < numberCells; j++) {
                        const tableCell = document.createElement("td");
                        tableCell.textContent = 'TD';
                        tableCell.style.color = selectedBorderColor.value;
                        tableRow.append(tableCell);

                        tableCell.setAttribute("width", `${widthTD.value}px`);
                        tableCell.setAttribute("height", `${heightTD.value}px`);
                        tableCell.setAttribute("border", `${borderWidth.value}px`);

                        tableCell.style.borderColor = selectedBorderColor.value;
                        tableCell.style.borderStyle = selectedBorderType.value;
                    }
                }
                // Додаємо таблицю в textarea
                textarea.append(createTable);

                save.addEventListener('click', () => {
                    
                    result.append(createTable);
                });
            });
        });
        // Створення списку
        const radioList = document.getElementById('radioList');
        radioList.addEventListener("click", () => {
            list.style.display = 'block';
            table.style.display = 'none';
            createTableBtn.style.display = 'none';
            createListBtn.style.display = 'block';

            createListBtn.addEventListener('click', () => {
                const createList = document.createElement('ul');
                const countLI = document.querySelector('.countLI').value;
                const mark = document.querySelector('.marksList');

                createList.classList.add('ListStyle');
                result.style.display = 'block';
                option.style.display = 'block';
                buttonsEditSave.style.display = '';
                choose.style.display = 'none';

                for (let k = 0; k < countLI; k++) {
                    const createListItem = document.createElement('li');
                    createListItem.textContent = "list";
                    createList.append(createListItem);
                    createListItem.style.listStyleType = mark.value;
                }
                // Додаємо список в textarea
                textarea.append(createList.innerHTML);
            });
        });
    });
});
// Функціонал кнопки "style"
style.addEventListener('click', () => {
    textareaBlock.style.display = 'none';
    styles.style.display = 'block';
    // Зміна розміру шрифту у вікні "result"
    const changeFontSize = () => {
        const radioBtns = radioDiv.getElementsByClassName("radioButton");
        for (let i = 0; i < radioBtns.length; i++) {
            radioBtns[i].addEventListener("click", function () {
                result.style.fontSize = document.querySelector('input[name="size"]:checked').value;
            });
        }
    }
    changeFontSize();

    getSelectValue();
    // Палітра 1
    colorBlockItemsFF.forEach(item => {
        item.style.backgroundColor = item.textContent;
    });
    // Палітра 2
    colorBlockItemsBg.forEach(item => {
        item.style.backgroundColor = item.textContent;
    });
    // Зміна кольору тексту у вікні "result"
    const colorBtn = document.getElementById("color");
    colorBtn.addEventListener("click", () => {
        colorBlockForFont.style.display = "flex";
        colorBlockItemsFF.forEach(item => {
            item.addEventListener('click', () => {
                result.style.color = item.textContent;
                colorBlockForFont.style.display = "none";
            });
        });
    });
    // Зміна кольору фону у вікні "result"
    const bgrColorBtn = document.getElementById("background");
    bgrColorBtn.addEventListener("click", () => {
        colorBlockForBgr.style.display = "flex";
        colorBlockItemsBg.forEach(item => {
            item.addEventListener('click', () => {
                result.style.backgroundColor = item.textContent;
                colorBlockForBgr.style.display = "none";
            });
        });
    });
    // Зміна стилю текту у вікні "result"
    const checkboxBold = document.getElementById('bold');
    checkboxBold.addEventListener("click", () => {
        if (checkboxBold.checked) {
            result.style.fontWeight = checkboxBold.value;
        }
        else {
            result.style.fontWeight = '';
        }
    });

    const checkboxCursive = document.getElementById('cursive');
    checkboxCursive.addEventListener("click", () => {
        if (checkboxCursive.checked) {
            result.style.fontStyle = checkboxCursive.value;
        }
        else {
            result.style.fontStyle = '';
        }
    });
});
