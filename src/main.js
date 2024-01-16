import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.getElementById("searchForm");
const galleryImages = document.querySelector("ul.gallery");
const loader = document.querySelector(".loader");

const BASE_API = "https://pixabay.com/api";
const API_Key = "41802498-7aef04e1b4b4791f33c618bc1";

searchForm.addEventListener("submit", searchFormSubmit);

function searchFormSubmit (evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.searchQuery.value.trim();

    const url = `${BASE_API}?key=${API_Key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    console.log(query);
    fetchImages(url)
    .then((data) => {
        if (!data.total) {
        return iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#ffffff',
            backgroundColor: '#EF4040',
            position: 'topRight',
            maxWidth: '432px',
            close: false
        });   
        }
        renderImages(data.hits);  
    })      
   .catch(onFetchError)
   .finally(() =>
   form.reset());
}

function fetchImages(url) {
  return fetch(url)
       .then((response) => {
        loader.style.display = "block";
           if (!response.ok) {
               throw new Error(response.status);
           }
           return response.json();
       })
    }    
     
function renderImages(images) {
galleryImages.innerHTML = "";

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

const lightbox = new SimpleLightbox(document.querySelectorAll('ul.gallery a'));

lightbox.refresh();

}


function onFetchError(error) {
    console.log(error);
}