"use strict";
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', event => {
    const target = event.currentTarget;
    outputEl.textContent = target.value;
    if (outputEl.textContent === '') {
        outputEl.textContent = 'Anonymous';
    }
});
//# sourceMappingURL=task-05.js.map