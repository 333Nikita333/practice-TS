type Item = {
  url: string;
  alt: string;
};

const images: Item[] = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery') as HTMLUListElement;

const listOfImages = images
  .map(
    ({ url, alt }) => `<li style="display: flex; list-style: none;">
<img
  src='${url}'
  alt='${alt}'
  width = '400px'

/>
</li>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', listOfImages);

galleryEl.style.padding = '0';
galleryEl.style.margin = '0';
galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = 'wrap';
galleryEl.style.justifyContent = 'center';
galleryEl.style.gap = '30px';
