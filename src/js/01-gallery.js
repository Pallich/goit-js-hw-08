// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryDestination = document.querySelector('.gallery');

const createGallery = createImage(galleryItems);
// galleryDestination.insertAdjacentHTML("beforeend", createGallery);
galleryDestination.innerHTML = createGallery;

function createImage(galleryItems) {
  return galleryItems
    .map(image => {
      return `
      <a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
`;
    })
    .join(' ');
}

new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  loop: true,
});
