import{i as m,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=document.getElementById("searchForm"),l=document.querySelector("ul.gallery"),i=document.querySelector(".loader");p.addEventListener("submit",g);i.style.display="none";function g(o){o.preventDefault(),l.innerHTML="";const r=o.currentTarget,n=`https://pixabay.com/api/?key=41802498-7aef04e1b4b4791f33c618bc1&q=${r.elements.searchQuery.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`;i.style.display="block",y(n).then(e=>{if(!e.total)return m.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px",close:!1}),l.innerHTML="";h(e.hits)}).catch(b).finally(()=>{i.style.display="none",r.reset()})}function y(o){return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(o){const r=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:c,comments:u,downloads:f})=>`
 <li class="gallery-item">
 <a class="link-gallery" href="${e}">
 <img class="gallery-images" src="${n}" alt="${t}">
 </a>
 <div class="photo-info">
     <p class="info-number"><strong>Like</strong> ${s}</p>
     <p class="info-number"><strong>Views</strong> ${c}</p>
     <p class="info-number"><strong>Comments</strong> ${u}</p>
     <p class="info-number"><strong>Downloads</strong> ${f}</p> 
 </div>
 </li>
`).join("");l.insertAdjacentHTML("beforeend",r),new d(document.querySelectorAll(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})).refresh()}function b(o){console.log(o),i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
