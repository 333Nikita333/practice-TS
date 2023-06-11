const inputEl = document.querySelector<HTMLInputElement>('#name-input')!;
const outputEl = document.querySelector<HTMLHeadingElement>('#name-output')!;

inputEl.addEventListener('input', event => {
  const target = event.currentTarget as HTMLInputElement;
  outputEl.textContent = target.value;

  if (outputEl.textContent === '') {
    outputEl.textContent = 'Anonymous';
  }
});
