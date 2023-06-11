const bodyEl = document.querySelector<HTMLBodyElement>('body')!;
const btnChangeColorEl =
  document.querySelector<HTMLButtonElement>('.change-color')!;
const colorEl = document.querySelector<HTMLSpanElement>('.color')!;

function getRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColorEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = bodyEl.style.backgroundColor;
});
