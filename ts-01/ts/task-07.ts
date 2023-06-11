const inputSizeEl =
  document.querySelector<HTMLInputElement>('#font-size-control')!;
const textEl = document.querySelector<HTMLSpanElement>('#text')!;

inputSizeEl.addEventListener('input', event => {
  const target = event.target as HTMLInputElement;
  textEl.style.fontSize = target.value + 'px';
});
