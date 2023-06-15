import basicLightbox from 'basiclightbox';
import { GalleryItem } from '../types/types';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector<HTMLDivElement>('.gallery')!;
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
addGallery(galleryItemsMarkup);
galleryEl.addEventListener('click', onSelectImg);

function createGalleryItemsMarkup(items: GalleryItem[]): string {
  return items
    .map(
      item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`,
    )
    .join('');
}

function addGallery(markup: string): void {
  galleryEl.innerHTML = markup;
}

function onSelectImg(evt: MouseEvent): void {
  evt.preventDefault();
  const target = evt.target as HTMLElement;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const selectedImage = target.dataset.source;
  const optionsBasicLightbox = {
    onShow: (): boolean => {
      document.addEventListener('keydown', onKeyEscape);
      return true;
    },
    onClose: (): boolean => {
      document.removeEventListener('keydown', onKeyEscape);
      return true;
    },
  };
  const instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`,
    optionsBasicLightbox,
  );
  instance.show();

  function onKeyEscape(evt: KeyboardEvent): void {
    if (evt.key === 'Escape') {
      instance.close();
    }
  }
}
