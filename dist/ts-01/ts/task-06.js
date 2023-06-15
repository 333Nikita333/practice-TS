"use strict";
const inputValidationEl = document.querySelector('#validation-input');
inputValidationEl.addEventListener('blur', event => {
    const inputTarget = event.target;
    const inputValueLength = inputTarget.value.length;
    const dataLength = inputValidationEl.getAttribute('data-length');
    if (inputValueLength === Number(dataLength)) {
        inputValidationEl.classList.add('valid');
        inputValidationEl.classList.remove('invalid');
    }
    else {
        inputValidationEl.classList.add('invalid');
        inputValidationEl.classList.remove('valid');
    }
});
//# sourceMappingURL=task-06.js.map