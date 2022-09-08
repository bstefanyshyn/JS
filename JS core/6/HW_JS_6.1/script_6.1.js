
const overMouseColor = document.getElementById("colorBlock");
const overMouse = document.getElementById("color");
const blockItems = document.querySelectorAll('.block');

overMouse.addEventListener("mousedown", () => {
    overMouseColor.style.display = "flex";
    getPictureBox.style.display = "none";
    document.body.style.backgroundImage = "none";
});

blockItems.forEach(item => {
    item.style.backgroundColor = item.textContent;
});

blockItems.forEach(item => {
    item.addEventListener('click', () => {
        document.body.style.backgroundColor = item.textContent;
    });
});

const getPictureBox = document.getElementById("pictureBox");
const chekPicture = document.getElementById("picture");
const imgItem = document.querySelectorAll(".image");

chekPicture.addEventListener("mousedown", () => {
    overMouseColor.style.display = "none";
    getPictureBox.style.display = "flex";
    document.body.style.backgroundColor = "white";
});

for (let items of imgItem) {
    items.addEventListener("click", () => {
        document.body.style.backgroundImage = "url(" + items.src + ")";
    });
}
