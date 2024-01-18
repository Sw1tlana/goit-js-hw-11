import{i as m,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=document.getElementById("searchForm"),l=document.querySelector("ul.gallery"),a=document.querySelector(".loader"),g="https://pixabay.com/api",y="41802498-7aef04e1b4b4791f33c618bc1";p.addEventListener("submit",h);a.style.display="none";function h(o){o.preventDefault(),l.innerHTML="";const r=o.currentTarget,i=r.elements.searchQuery.value.trim(),n=`${g}?key=${y}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;a.style.display="block",b(n).then(e=>{if(!e.total)return m.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px",close:!1}),l.innerHTML="";L(e.hits)}).catch($).finally(()=>{a.style.display="none",r.reset()})}function b(o){return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function L(o){const r=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:c,comments:u,downloads:f})=>`
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
`).join("");l.insertAdjacentHTML("beforeend",r),new d(document.querySelectorAll(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})).refresh()}function $(o){console.log(o),a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
