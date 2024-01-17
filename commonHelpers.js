import{i as f,S as m}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.getElementById("searchForm"),i=document.querySelector("ul.gallery"),y="https://pixabay.com/api",g="41802498-7aef04e1b4b4791f33c618bc1";document.querySelector(".loader").style.display="none";d.addEventListener("submit",h);function p(){i.innerHTML=""}function h(o){o.preventDefault();const t=o.currentTarget,s=t.elements.searchQuery.value.trim();p();const n=`${y}?key=${g}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;document.querySelector(".loader").style.display="block",console.log(s),setTimeout(()=>{b(n).then(e=>{if(!e.total)return document.querySelector(".loader").style.display="none",f.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px",close:!1});document.querySelector(".loader").style.display="none",S(e.hits)}).catch(q).finally(()=>{t.reset()})},500)}function b(o){return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function S(o){const t=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:l,views:c,comments:a,downloads:u})=>`
 <li class="gallery-item">
 <a class="link-gallery" href="${e}">
 <img class="gallery-images" src="${n}" alt="${r}">
 </a>
 <div class="photo-info">
     <p class="info-number"><strong>Like</strong> ${l}</p>
     <p class="info-number"><strong>Views</strong> ${c}</p>
     <p class="info-number"><strong>Comments</strong> ${a}</p>
     <p class="info-number"><strong>Downloads</strong> ${u}</p> 
 </div>
 </li>
`).join("");i.insertAdjacentHTML("beforeend",t),new m(document.querySelectorAll("ul.gallery a")).refresh()}function q(o){console.log(o)}
//# sourceMappingURL=commonHelpers.js.map
