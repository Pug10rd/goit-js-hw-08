import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryDiv = document.querySelector('.gallery'); 
 
function createGalaryMarkup(arr) { 
    return arr.map((item) => `<a class="gallery__item" href="${item.original}"><img class="gallery__image"  
    src="${item.preview}  
    "alt="${item.description}"></a>`).join('') 
} 
 
galleryDiv.insertAdjacentHTML('beforeEnd', createGalaryMarkup(galleryItems)); 
 
let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt", 
    captionDelay: 250, 
});
console.log(galleryItems);

//trying to push this shit to GIT;
/*Алёна Берсенева @berseneva_sugar, [12 лют. 2023 р., 16:07:50]:
Npm run build

А потом как обычно git add .

git commit -m “название комита”

hit push

На сайте в гитхабе в pages выбери не main ветку, а должна появится вторая) */