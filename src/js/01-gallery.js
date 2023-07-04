// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');

const createMarcup = items => {
    return items
    .map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
          data-source="${item.original}"
        />
      </a>
    </li>
  `)
  .join('');
};

gallery.innerHTML = createMarcup(galleryItems);

new simpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });


