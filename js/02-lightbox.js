import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const itemGallery = createGalleryItems(galleryItems);
galleryRef.innerHTML = itemGallery;

function createGalleryItems(galleryItems) {
    return galleryItems
        .map(item => 
        ` <li>
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`
    )
    .join('');
}

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});