const inputValidationEl =
  document.querySelector<HTMLInputElement>('#validation-input')!;

inputValidationEl.addEventListener('blur', event => {
  const inputTarget = event.target as HTMLInputElement;
  const inputValueLength = inputTarget.value.length;
  const dataLength = inputValidationEl.getAttribute('data-length');

  if (inputValueLength === Number(dataLength)) {
    inputValidationEl.classList.add('valid');
    inputValidationEl.classList.remove('invalid');
  } else {
    inputValidationEl.classList.add('invalid');
    inputValidationEl.classList.remove('valid');
  }
});
