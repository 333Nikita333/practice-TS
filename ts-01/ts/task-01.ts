const categoriesEl = document.querySelector<HTMLUListElement>('#categories')!;
console.log('Number of categories: ', categoriesEl.children.length);

const firstEl = categoriesEl.firstElementChild as HTMLLIElement;
const titleOfFirstEl = firstEl.firstElementChild as HTMLHeadingElement;
console.log('Category:', titleOfFirstEl.textContent);
const categoryListOfFirstEl = firstEl.lastElementChild!.children;
console.log('Elements:', categoryListOfFirstEl.length);

const secondEl = firstEl.nextElementSibling as HTMLLIElement;
const titleOfSecondEl = secondEl.firstElementChild as HTMLHeadingElement;
console.log('Category:', titleOfSecondEl.textContent);
const categoryListOfSecondEl = secondEl.lastElementChild!.children;
console.log('Elements:', categoryListOfSecondEl.length);

const thirdEl = categoriesEl.lastElementChild as HTMLLIElement;
const titleOfThirdEl = thirdEl.firstElementChild as HTMLHeadingElement;
console.log('Category:', titleOfThirdEl.textContent);
const categoryListOfThirdEl = thirdEl.lastElementChild!.children;
console.log('Elements:', categoryListOfThirdEl.length);
