import{i as m,S as g}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.getElementById("searchForm"),a=document.querySelector("ul.gallery"),i=document.querySelector(".loader"),y="https://pixabay.com/api",p="41802498-7aef04e1b4b4791f33c618bc1";d.addEventListener("submit",h);function h(o){o.preventDefault();const t=o.currentTarget,s=t.elements.searchQuery.value.trim(),n=`${y}?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;console.log(s),b(n).then(e=>{if(!e.total)return m.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px",close:!1});L(e.hits)}).catch($).finally(()=>{i.style.display="none",t.reset()})}function b(o){return i.style.display="block",fetch(o).then(t=>{if(i.style.display="block",!t.ok)throw new Error(t.status);return t.json()})}function L(o){a.innerHTML="";const t=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:l,views:c,comments:u,downloads:f})=>`
 <li class="gallery-item">
 <a class="link-gallery" href="${e}">
 <img class="gallery-images" src="${n}" alt="${r}">
 </a>
 <div class="photo-info">
     <p class="info-number"><strong>Like</strong> ${l}</p>
     <p class="info-number"><strong>Views</strong> ${c}</p>
     <p class="info-number"><strong>Comments</strong> ${u}</p>
     <p class="info-number"><strong>Downloads</strong> ${f}</p> 
 </div>
 </li>
`).join("");a.insertAdjacentHTML("beforeend",t),new g(document.querySelectorAll("ul.gallery a")).refresh()}function $(o){console.log(o)}
//# sourceMappingURL=commonHelpers.js.map
