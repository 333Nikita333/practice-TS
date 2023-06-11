const ingredients: string[] = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(
  '#ingredients',
) as HTMLUListElement;

const itemsEl: HTMLLIElement[] = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;

  return itemEl;
});
console.log(itemsEl);

if (ingredientsEl) {
  ingredientsEl.append(...itemsEl);
}
