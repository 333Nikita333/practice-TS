import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
addGallery(galleryItemsMarkup);
galleryEl.addEventListener('click', onSelectImg);
function createGalleryItemsMarkup(items) {
    return items
        .map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`)
        .join('');
}
function addGallery(markup) {
    galleryEl.innerHTML = markup;
}
function onSelectImg(evt) {
    evt.preventDefault();
    const target = evt.target;
    if (target.nodeName !== 'IMG') {
        return;
    }
    const selectedImage = target.dataset.source;
    const optionsBasicLightbox = {
        onShow: () => {
            document.addEventListener('keydown', onKeyEscape);
            return true;
        },
        onClose: () => {
            document.removeEventListener('keydown', onKeyEscape);
            return true;
        },
    };
    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`, optionsBasicLightbox);
    instance.show();
    function onKeyEscape(evt) {
        if (evt.key === 'Escape') {
            instance.close();
        }
    }
}
//# sourceMappingURL=01-gallery.js.map