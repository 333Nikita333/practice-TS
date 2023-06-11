"use strict";
const categoriesEl = document.querySelector('#categories');
console.log('Number of categories: ', categoriesEl.children.length);
const firstEl = categoriesEl.firstElementChild;
const titleOfFirstEl = firstEl.firstElementChild;
console.log('Category:', titleOfFirstEl.textContent);
const categoryListOfFirstEl = firstEl.lastElementChild.children;
console.log('Elements:', categoryListOfFirstEl.length);
const secondEl = firstEl.nextElementSibling;
const titleOfSecondEl = secondEl.firstElementChild;
console.log('Category:', titleOfSecondEl.textContent);
const categoryListOfSecondEl = secondEl.lastElementChild.children;
console.log('Elements:', categoryListOfSecondEl.length);
const thirdEl = categoriesEl.lastElementChild;
const titleOfThirdEl = thirdEl.firstElementChild;
console.log('Category:', titleOfThirdEl.textContent);
const categoryListOfThirdEl = thirdEl.lastElementChild.children;
console.log('Elements:', categoryListOfThirdEl.length);
//# sourceMappingURL=task-01.js.map