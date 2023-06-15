import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = createGalleryItemsMarkup(galleryItems);
function createGalleryItemsMarkup(items) {
    return items
        .map(item => `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>`)
        .join('');
}
const settingsSimpleLightbox = {
    captionsData: 'alt',
    captionDelay: 250,
};
let gallerySimpleLightbox = new SimpleLightbox('.gallery a', settingsSimpleLightbox);
//# sourceMappingURL=02-lightbox.js.map