import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);

const markup = galleryItems
    .map((item) => `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
        </div>`)
    .join("");
  
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener(`click`, openBigPicture);
document.addEventListener(`keydown`, closeWindow);

const lightbox = basicLightbox.create(`<img class="lightbox__image"/>`)

function openBigPicture(evt) {
    if (evt.target.nodeName !== `IMG`) {
        return
    }
    evt.preventDefault()
    lightbox.element().querySelector('img').src = evt.target.getAttribute('data-source')
    lightbox.show()
}

function closeWindow(event) {
    if (event.code == `Escape`) {
        lightbox.close();
    }
}


console.log(galleryItems);
