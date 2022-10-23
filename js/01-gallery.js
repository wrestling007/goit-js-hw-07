import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const itemGallery = createGalleryItems(galleryItems);
galleryRef.innerHTML = itemGallery;

function createGalleryItems(galleryItems) {
    return galleryItems
    .map(
      item =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join('');
}

galleryRef.addEventListener('click', imageClick);

function imageClick(evt) {

    blockAction(evt);

    if (evt.target.nodeName !== 'IMG') {
        return;
    } 
    const instance = basicLightbox.create(`
    <img class= "original-img" src='${evt.target.dataset.source}' width="1280">
`);
    instance.show();

    galleryRef.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
            }
    });
}
function blockAction(evt) {
    evt.preventDefault();
}
