"use strict";
const formEl = document.querySelector('.login-form');
function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem('email');
    const password = form.elements.namedItem('password');
    if (email.value === '' || password.value === '') {
        return alert('Attention! Fields must not be empty!');
    }
    const userInfo = { email: email.value, password: password.value };
    console.log(userInfo);
    form.reset();
}
formEl.addEventListener('submit', handleSubmit);
//# sourceMappingURL=task-08.js.map