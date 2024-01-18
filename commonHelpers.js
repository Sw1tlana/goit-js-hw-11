import{i as m,S as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const g=document.getElementById("searchForm"),a=document.querySelector("ul.gallery"),i=document.querySelector(".loader");g.addEventListener("submit",y);i.style.display="none";function y(o){o.preventDefault(),a.innerHTML="";const t=o.currentTarget,s=`https://pixabay.com/api/?key=41802498-7aef04e1b4b4791f33c618bc1&q=${t.elements.searchQuery.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`;i.style.display="block",p(s).then(e=>{if(!e.total)return m.show({message:"❌Sorry, there are no images matching your search query.Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",maxWidth:"420px",close:!1}),a.innerHTML="";h(e.hits)}).catch(b).finally(()=>{i.style.display="none",t.reset()})}function p(o){return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(o){const t=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:c,comments:u,downloads:f})=>`
 <li class="gallery-item">
 <a class="link-gallery" href="${e}">
 <img class="gallery-images" src="${s}" alt="${r}">
 </a>
 <div class="photo-info">
     <p class="info-number"><strong>Like</strong> ${n}</p>
     <p class="info-number"><strong>Views</strong> ${c}</p>
     <p class="info-number"><strong>Comments</strong> ${u}</p>
     <p class="info-number"><strong>Downloads</strong> ${f}</p> 
 </div>
 </li>
`).join("");a.insertAdjacentHTML("beforeend",t),new d(document.querySelectorAll(".gallery a")).refresh()}function b(o){console.log(o),i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
