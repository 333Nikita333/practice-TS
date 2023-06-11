const decrementBtn = document.querySelector<HTMLButtonElement>(
  'button[data-action="decrement"]',
)!;
const incrementBtn = document.querySelector<HTMLButtonElement>(
  'button[data-action="increment"]',
)!;
const valueEl = document.querySelector<HTMLSpanElement>('#value')!;

type Counter = {
  value: number;
  decrement: () => void;
  increment: () => void;
};
const counterValue: Counter = {
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
