import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { GalleryItem } from '../types/types.js';
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector<HTMLUListElement>('.gallery')!;
galleryEl.innerHTML = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items: GalleryItem[]): string {
  return items
    .map(
      item => `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>`,
    )
    .join('');
}
type SetLightBox = {
  captionsData: string;
  captionDelay: number;
};
const settingsSimpleLightbox: SetLightBox = {
  captionsData: 'alt',
  captionDelay: 250,
};
let gallerySimpleLightbox = new SimpleLightbox(
  '.gallery a',
  settingsSimpleLightbox,
);
