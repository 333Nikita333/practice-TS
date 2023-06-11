"use strict";
const inputSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputSizeEl.addEventListener('input', event => {
    const target = event.target;
    textEl.style.fontSize = target.value + 'px';
});
//# sourceMappingURL=task-07.js.map