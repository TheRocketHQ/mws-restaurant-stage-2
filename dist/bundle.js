!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);urlsToCache=["/","index.html","restaurant.html","css/styles.css","https://fonts.googleapis.com/css?family=Roboto:300,400","data/restaurants.json","data/manifest.json","js/imghelper.js","js/cached-files.js","js/dbhelper.js","js/main.js","js/restaurant_info.js","img/1-mobile-s.webp","img/1-mobile-m.webp","img/1-mobile-l.webp","img/1-lrg-desktop.webp","img/1-desktop.webp","img/1-tablet.webp","img/2-mobile-s.webp","img/2-mobile-m.webp","img/2-mobile-l.webp","img/2-lrg-desktop.webp","img/2-desktop.webp","img/2-tablet.webp","img/3-mobile-s.webp","img/3-mobile-m.webp","img/3-mobile-l.webp","img/3-lrg-desktop.webp","img/3-desktop.webp","img/3-tablet.webp","img/4-mobile-s.webp","img/4-mobile-m.webp","img/4-mobile-l.webp","img/4-lrg-desktop.webp","img/4-desktop.webp","img/4-tablet.webp","img/5-mobile-s.webp","img/5-mobile-m.webp","img/5-mobile-l.webp","img/5-lrg-desktop.webp","img/5-desktop.webp","img/5-tablet.webp","img/6-mobile-s.webp","img/6-mobile-m.webp","img/6-mobile-l.webp","img/6-lrg-desktop.webp","img/6-desktop.webp","img/6-tablet.webp","img/7-mobile-s.webp","img/7-mobile-m.webp","img/7-mobile-l.webp","img/7-lrg-desktop.webp","img/7-desktop.webp","img/7-tablet.webp","img/8-mobile-s.webp","img/8-mobile-m.webp","img/8-mobile-l.webp","img/8-lrg-desktop.webp","img/8-desktop.webp","img/8-tablet.webp","img/9-mobile-s.webp","img/9-mobile-m.webp","img/9-mobile-l.webp","img/9-lrg-desktop.webp","img/9-desktop.webp","img/9-tablet.webp","img/10-mobile-s.webp","img/10-mobile-m.webp","img/10-mobile-l.webp","img/10-lrg-desktop.webp","img/10-desktop.webp","img/10-tablet.webp","img/icons/Icon-128x128.png","img/icons/Icon-144x144.png","img/icons/Icon-152x152.png","img/icons/Icon-196x196.png","img/icons/Icon-256x256.png"],n(5),n(4),n(3),n(2),n(1),n(10)},function(e,t){const n=["/","index.html","restaurant.html","restaurant.html?id=1","restaurant.html?id=2","restaurant.html?id=3","restaurant.html?id=4","restaurant.html?id=5","restaurant.html?id=6","restaurant.html?id=7","restaurant.html?id=8","restaurant.html?id=9","restaurant.html?id=10","css/styles.css","https://fonts.googleapis.com/css?family=Roboto:300,400","data/restaurants.json","data/manifest.json","js/img-helper.js","js/cached-files.js","js/db-helper.js","js/main.js","js/restaurant-info.js","img/1-mobile-s.webp","img/1-mobile-m.webp","img/1-mobile-l.webp","img/1-lrg-desktop.webp","img/1-desktop.webp","img/1-tablet.webp","img/2-mobile-s.webp","img/2-mobile-m.webp","img/2-mobile-l.webp","img/2-lrg-desktop.webp","img/2-desktop.webp","img/2-tablet.webp","img/3-mobile-s.webp","img/3-mobile-m.webp","img/3-mobile-l.webp","img/3-lrg-desktop.webp","img/3-desktop.webp","img/3-tablet.webp","img/4-mobile-s.webp","img/4-mobile-m.webp","img/4-mobile-l.webp","img/4-lrg-desktop.webp","img/4-desktop.webp","img/4-tablet.webp","img/5-mobile-s.webp","img/5-mobile-m.webp","img/5-mobile-l.webp","img/5-lrg-desktop.webp","img/5-desktop.webp","img/5-tablet.webp","img/6-mobile-s.webp","img/6-mobile-m.webp","img/6-mobile-l.webp","img/6-lrg-desktop.webp","img/6-desktop.webp","img/6-tablet.webp","img/7-mobile-s.webp","img/7-mobile-m.webp","img/7-mobile-l.webp","img/7-lrg-desktop.webp","img/7-desktop.webp","img/7-tablet.webp","img/8-mobile-s.webp","img/8-mobile-m.webp","img/8-mobile-l.webp","img/8-lrg-desktop.webp","img/8-desktop.webp","img/8-tablet.webp","img/9-mobile-s.webp","img/9-mobile-m.webp","img/9-mobile-l.webp","img/9-lrg-desktop.webp","img/9-desktop.webp","img/9-tablet.webp","img/10-mobile-s.webp","img/10-mobile-m.webp","img/10-mobile-l.webp","img/10-lrg-desktop.webp","img/10-desktop.webp","img/10-tablet.webp","img/Icon-128x128.png","img/Icon-144x144.png","img/Icon-152x152.png","img/Icon-196x196.png","img/Icon-256x256.png"];self.addEventListener("install",e=>{console.log("Service Worker: install"),e.waitUntil(caches.open("v26:restaurant-app").then(e=>e.addAll(n)).then(()=>{console.log("Service Worker: complete")}).catch(e=>{console.log("Service Worker: errorr",e)}))}),self.addEventListener("activate",e=>{console.log("Service Worker: activate");const t=["v26:restaurant-app","runtime"];e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(console.log(e,"cache name"),e=>!t.includes(e))return console.log(e,"delete cache name"),caches.delete(e)}))))}),self.addEventListener("fetch",e=>{console.log("WORKER: fetch event in progress.."),e.respondWith(caches.match(e.request).then(t=>t||caches.open("runtime").then(t=>fetch(e.request).then(e=>404==e.status?new Response("Page not found"):e).catch(()=>new Response("uh oh that wasnt supposed to happen")))))})},function(e,t){window.initMap=(()=>{n((e,t)=>{e?console.error(e):(self.map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:t.latlng,scrollwheel:!1}),r(),DBHelper.mapMarkerForRestaurant(self.restaurant,self.map))})}),window.addEventListener("loaded",function(e){const t=document.getElementById("restaurant-container"),n=document.querySelectorAll(".info-grid");let i=ImageHelper.lazyLoadImages(e.detail);i=document.createRange().createContextualFragment(i);t.childNodes[1];t.removeChild(t.childNodes[3]),n[0].insertBefore(i,n[0].childNodes[1])},!1);const n=e=>{if(self.restaurant)return void e(null,self.restaurant);const t=m("id");t?DBHelper.fetchRestaurantById(t,(t,n)=>{self.restaurant=n,n?(i(),e(null,n)):console.error(t)}):(error="No restaurant id in URL",e(error,null))},i=(e=self.restaurant)=>{const t=new CustomEvent("loaded",{detail:e}),n=document.getElementById("restaurant-container"),i=`\n    <h2 id="restaurant-name">${e.name}</h2>\n    <div class="loading-ball">\n      <div></div>\n    </div>\n    <div class="info-grid">\n      <p id="restaurant-cuisine">${e.cuisine_type}</p>\n    </div>\n    <div class="details-grid">\n      <p id="restaurant-address">${e.address}</p>\n    </div>\n  `;if(n.innerHTML=i,e.operating_hours){const e=document.querySelectorAll(".details-grid");e[0].insertBefore(o(),e[0].childNodes[2])}s(),window.setTimeout(()=>{window.dispatchEvent(t)},3e3)},o=(e=self.restaurant.operating_hours)=>{const t=document.createElement("table");t.setAttribute("id","restaurant-hours");let n="";return Object.keys(e).forEach(t=>{n+=`<tr><td>${t}</td><td>${e[t]}</td></tr>`}),t.innerHTML=n,t},s=(e=self.restaurant.reviews)=>{const t=document.getElementById("reviews-container");let n="\n    <h3>Reviews</h3>\n  ";if(!e)return n+="<p>No reviews yet!'</p>",void(t.innerHtml=n);const i=document.getElementById("reviews-list");e.forEach(e=>{i.insertAdjacentHTML("beforeend",l(e))}),t.appendChild(i)},l=e=>{return`\n    <li>\n      <p>${e.name}</p>\n      <p>${e.date}</p>\n      <p>Rating:${Array(e.rating).join(0).split(0).map((e,t)=>"\n      &#11088;\n    ").join("")}</p>\n      <p>${e.comments}</p>\n    </li>\n  `},r=(e=self.restaurant)=>{const t=document.getElementById("breadcrumb"),n=document.createElement("li");n.setAttribute("aria-current",e.name),n.innerHTML=e.name,t.appendChild(n)},m=(e,t)=>{t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");const n=new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}},function(e,t){document.addEventListener("DOMContentLoaded",e=>{console.log("test"),DBHelper.onWindowResize(),l(),n(),o(),registerSW()}),window.addEventListener("resize",e=>{DBHelper.onWindowResize()},!1),window.addEventListener("loaded",function(e){const t=document.querySelectorAll(".restaurant-item");let n=0;for(const i of t.entries()){const t=ImageHelper.lazyLoadImages(e.detail[n]),o=i[1].childNodes[1];i[1].removeChild(o),i[1].insertAdjacentHTML("beforeend",t),n++}},!1);const n=()=>{DBHelper.fetchNeighborhoods((e,t)=>{e?console.error(e):(self.neighborhoods=t,i())})},i=(e=self.neighborhoods)=>{const t=document.getElementById("neighborhoods-select");e.forEach(e=>{const n=document.createElement("option");n.innerHTML=e,n.value=e,t.append(n)})},o=()=>{DBHelper.fetchCuisines((e,t)=>{e?console.error(e):(self.cuisines=t,s())})},s=(e=self.cuisines)=>{const t=document.getElementById("cuisines-select");e.forEach(e=>{const n=document.createElement("option");n.innerHTML=e,n.value=e,t.append(n)})},l=()=>{console.log("running");const e=document.getElementById("cuisines-select"),t=document.getElementById("neighborhoods-select"),n=e.selectedIndex,i=t.selectedIndex,o=e[n].value,s=t[i].value;DBHelper.fetchRestaurantByCuisineAndNeighborhood(o,s,(e,t)=>{e?console.error(e,"error"):(console.log("get restaurants"),r(t),m())})},r=e=>{self.restaurants=[],document.getElementById("restaurants-list").innerHTML="",self.markers.forEach(e=>e.setMap(null)),self.markers=[],self.restaurants=e},m=(e=self.restaurants)=>{const t=new CustomEvent("loaded",{detail:e}),n=document.getElementById("restaurants-list");e.forEach(e=>{n.insertAdjacentHTML("beforeend",a(e))}),p(),window.setTimeout(()=>{window.dispatchEvent(t)},3e3)},a=e=>{let t=e.name.replace(/\s+/g,"-").toLowerCase();return`\n    <li class="restaurant-item">\n      <div class="loading-ball">\n        <div></div>\n      </div>\n      <h3 id="name-${t}">${e.name}</h3>\n      <p id="neighborhood-${t}">${e.neighborhood}</p>\n      <p id="address-${t}">${e.address}</p>\n      <a aria-labelledby="name-${t} neighborhood-${t} address-${t}"\n        href="${DBHelper.urlForRestaurant(e)}">View Details</a>\n    </li>\n  `},p=(e=self.restaurants)=>{e.forEach(e=>{const t=DBHelper.mapMarkerForRestaurant(e,self.map);google.maps.event.addListener(t,"click",()=>{window.location.href=t.url}),self.markers.push(t)}),google.maps.event.addListener(void 0,"tilesloaded",function(e){document.querySelectorAll("#map *").forEach(function(e){e.setAttribute("tabindex","-1")})},!1)}},function(e,t){},function(e,t){const n=e=>{const t=document.getElementById("status"),n=navigator.onLine?"online":"offline";"offline"===n?(console.log(n,"status"),t.className=n,t.insertAdjacentHTML("beforeend","Status: Website "+n),t.setAttribute("aria-live","assertive")):"online"===n&&(t.className="",t.innerHTML="",t.removeAttribute("aria-live"))};window.addEventListener("online",n),window.addEventListener("offline",n)},,,,,function(e,t){}]);