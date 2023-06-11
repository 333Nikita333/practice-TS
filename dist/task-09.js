"use strict";
const bodyEl = document.querySelector('body');
const btnChangeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btnChangeColorEl.addEventListener('click', () => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    colorEl.textContent = bodyEl.style.backgroundColor;
});
//# sourceMappingURL=task-09.js.map