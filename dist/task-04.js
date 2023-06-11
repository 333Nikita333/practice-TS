"use strict";
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};
decrementBtn.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value.toString();
});
incrementBtn.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value.toString();
});
//# sourceMappingURL=task-04.js.map