// Task 1
// const square = document.getElementById('square');
// let index = 0;

// const colors = ['red', 'yellow', 'green'];

// square.addEventListener("mouseover", () => {
//     square.style.backgroundColor = colors[index];
//     if (index >= colors.length - 1) {
//         index = 0;
//     }
//     else {
//         index++;
//     }
//     // index = index >= colors.length - 1 ? 0 : index + 1;
// });
// square.addEventListener("mouseout", () => {
//     square.style.backgroundColor = "";
// });



// Task 2
// const overMouseText = document.getElementById("secretText");
// const overMouse = document.getElementById("secret");

// overMouse.addEventListener("mouseout", () => {
//     overMouse.style = "";
//     overMouseText.textContent = "У мене є секрет!";
//     overMouseText.style.color = "black";
// });

// overMouse.addEventListener("mouseover", () => {
//     overMouse.style.backgroundColor = "yellow";
//     overMouse.style.border = "7px ridge black";
//     overMouseText.textContent = "Хочеш знати який?";
//     overMouseText.style.color = "blue";
// });

// overMouse.addEventListener("mousedown", () => {
//     overMouse.style.backgroundColor = "black";
//     overMouse.style.border = "7px solid yellow";
//     overMouseText.textContent = "А я тобі не скажу!";
//     overMouseText.style.color = "white";
// });

// overMouse.addEventListener("mouseup", () => {
//     overMouse.style.backgroundColor = "yellow";
//     overMouse.style.border = "7px ridge black";
//     overMouseText.textContent = "Хочеш знати який?";
//     overMouseText.style.color = "blue";
// });



// Task 3
// const inputImage1 = document.getElementById("smallPictureBlock1");
// inputImage1.addEventListener("mousedown", () => {
//     var url1 = prompt('write url image');
//     document.getElementById("urlImage1").src = `${url1}`;
// });

// const inputImage2 = document.getElementById("smallPictureBlock2");
// inputImage2.addEventListener("mousedown", () => {
//     var url2 = prompt('write url image');
//     document.getElementById("urlImage2").src = `${url2}`;
//     inputImage2.style.backgroundImage = `url(${url2})`;

// });

// const inputImage3 = document.getElementById("smallPictureBlock3");
// inputImage3.addEventListener("mousedown", () => {
//     var url3 = prompt('write url image');
//     document.getElementById("urlImage3").src = `${url3}`;
//     inputImage3.style.backgroundImage = `url(${url3})`;
// });



// Task 4
// const listItems = document.querySelectorAll('.list-item');

// listItems.forEach(item => {
//     item.addEventListener('click', () => {
//         item.style.color = item.textContent;
//     });

// });