"use strict";
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const itemsEl = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;
    return itemEl;
});
console.log(itemsEl);
if (ingredientsEl) {
    ingredientsEl.append(...itemsEl);
}
//# sourceMappingURL=task-02.js.map