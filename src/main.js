import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.getElementById("searchForm");
const galleryImages = document.querySelector("ul.gallery");
const loader = document.querySelector(".loader");

// const BASE_API = "https://pixabay.com/api";
// const API_Key = "41802498-7aef04e1b4b4791f33c618bc1";

searchForm.addEventListener("submit", searchFormSubmit);

loader.style.display = "none";

function searchFormSubmit (evt) {
    evt.preventDefault();
    galleryImages.innerHTML = "";
    const form = evt.currentTarget;
    const query = form.elements.searchQuery.value.trim();

    const url = `https://pixabay.com/api/?key=41802498-7aef04e1b4b4791f33c618bc1&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    loader.style.display = "block";

fetchImages(url)
    .then((data) => {
        if (!data.total) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: '#ffffff',
                backgroundColor: '#EF4040',
                position: 'topRight',
                maxWidth: '432px',
                close: false,
            });
                return galleryImages.innerHTML = "";
            }

                renderImages(data.hits);
            })
            .catch(onFetchError)
            .finally(() => {
                loader.style.display = "none";
                form.reset();
            });

}

function fetchImages(url) {
  return fetch(url)
       .then((response) => {
           if (!response.ok) {
               throw new Error(response.status);
           }
           return response.json();
       })
    }  
   
function renderImages(images) { 
const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
 <li class="gallery-item">
 <a class="link-gallery" href="${largeImageURL}">
 <img class="gallery-images" src="${webformatURL}" alt="${tags}">
 </a>
 <div class="photo-info">
     <p class="info-number"><strong>Like</strong> ${likes}</p>
     <p class="info-number"><strong>Views</strong> ${views}</p>
     <p class="info-number"><strong>Comments</strong> ${comments}</p>
     <p class="info-number"><strong>Downloads</strong> ${downloads}</p> 
 </div>
 </li>
`
}).join("");

galleryImages.insertAdjacentHTML("beforeend", markup);
    
const lightbox = new SimpleLightbox(document.querySelectorAll('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
}));

    lightbox.refresh();
}

function onFetchError(error) {
    console.log(error);
    loader.style.display = "none";
}