type Refs = {
  inputEl: HTMLInputElement;
  btnCreateBoxEl: HTMLButtonElement;
  btnDestroyBoxEl: HTMLButtonElement;
  boxСontainerEl: HTMLDivElement;
};

const refs: Refs = {
  inputEl: document.querySelector('input')!,
  btnCreateBoxEl: document.querySelector('button[data-create]')!,
  btnDestroyBoxEl: document.querySelector('button[data-destroy]')!,
  boxСontainerEl: document.querySelector('#boxes')!,
};

function getRandomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount: number): HTMLDivElement[] {
  let arrayBoxes: HTMLDivElement[] = [];

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.height = `${30 + 10 * i}px`;
    arrayBoxes.push(newBox);
  }

  return arrayBoxes;
}

function destroyBoxes(): void {
  refs.boxСontainerEl.innerHTML = '';
}

refs.btnCreateBoxEl.addEventListener('click', () => {
  const inputElValue = Number(refs.inputEl.value);

  if (inputElValue === 0) {
    return alert('Error! Please enter a valid value');
  }

  const newArrayBoxes = createBoxes(inputElValue);
  console.log(newArrayBoxes);
  refs.boxСontainerEl.append(...newArrayBoxes);
});

refs.btnDestroyBoxEl.addEventListener('click', () => {
  destroyBoxes();
  console.log(refs.boxСontainerEl);
});
