// https://css-tricks.com/serviceworker-for-offline/
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// https://www.safaribooksonline.com/library/view/building-progressive-web/9781491961643/ch04.html

const urlsToCache = [
  '/',
  'index.html',
  'restaurant.html',
  'restaurant.html?id=1',
  'restaurant.html?id=2',
  'restaurant.html?id=3',
  'restaurant.html?id=4',
  'restaurant.html?id=5',
  'restaurant.html?id=6',
  'restaurant.html?id=7',
  'restaurant.html?id=8',
  'restaurant.html?id=9',
  'restaurant.html?id=10',
  'css/styles.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400',
  'data/restaurants.json',
  'data/manifest.json',
  'js/img-helper.js',
  'js/cached-files.js',
  'js/db-helper.js',
  'js/main.js',
  'js/restaurant-info.js',
  'img/1-mobile-s.webp',
  'img/1-mobile-m.webp',
  'img/1-mobile-l.webp',
  'img/1-lrg-desktop.webp',
  'img/1-desktop.webp',
  'img/1-tablet.webp',
  'img/2-mobile-s.webp',
  'img/2-mobile-m.webp',
  'img/2-mobile-l.webp',
  'img/2-lrg-desktop.webp',
  'img/2-desktop.webp',
  'img/2-tablet.webp',
  'img/3-mobile-s.webp',
  'img/3-mobile-m.webp',
  'img/3-mobile-l.webp',
  'img/3-lrg-desktop.webp',
  'img/3-desktop.webp',
  'img/3-tablet.webp',
  'img/4-mobile-s.webp',
  'img/4-mobile-m.webp',
  'img/4-mobile-l.webp',
  'img/4-lrg-desktop.webp',
  'img/4-desktop.webp',
  'img/4-tablet.webp',
  'img/5-mobile-s.webp',
  'img/5-mobile-m.webp',
  'img/5-mobile-l.webp',
  'img/5-lrg-desktop.webp',
  'img/5-desktop.webp',
  'img/5-tablet.webp',
  'img/6-mobile-s.webp',
  'img/6-mobile-m.webp',
  'img/6-mobile-l.webp',
  'img/6-lrg-desktop.webp',
  'img/6-desktop.webp',
  'img/6-tablet.webp',
  'img/7-mobile-s.webp',
  'img/7-mobile-m.webp',
  'img/7-mobile-l.webp',
  'img/7-lrg-desktop.webp',
  'img/7-desktop.webp',
  'img/7-tablet.webp',
  'img/8-mobile-s.webp',
  'img/8-mobile-m.webp',
  'img/8-mobile-l.webp',
  'img/8-lrg-desktop.webp',
  'img/8-desktop.webp',
  'img/8-tablet.webp',
  'img/9-mobile-s.webp',
  'img/9-mobile-m.webp',
  'img/9-mobile-l.webp',
  'img/9-lrg-desktop.webp',
  'img/9-desktop.webp',
  'img/9-tablet.webp',
  'img/10-mobile-s.webp',
  'img/10-mobile-m.webp',
  'img/10-mobile-l.webp',
  'img/10-lrg-desktop.webp',
  'img/10-desktop.webp',
  'img/10-tablet.webp',
  'img/Icon-128x128.png',
  'img/Icon-144x144.png',
  'img/Icon-152x152.png',
  'img/Icon-196x196.png',
  'img/Icon-256x256.png',
];

// ToDO: Install ServiceWorker
const CACHE_VERSION = 'v26:restaurant-app';
const RUNTIME = 'runtime';

// Install the service worker and cache files
// ToDo add caching for Google map
self.addEventListener('install', (event) => {
  console.log('Service Worker: install');
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(urlsToCache);
    })
    .then(() => {
      console.log('Service Worker: complete');
    })
    .catch((err) => {
      console.log('Service Worker: errorr', err);
    })
  );
});


self.addEventListener("activate", (event) =>{
  console.log('Service Worker: activate');
  const currentCaches = [CACHE_VERSION, RUNTIME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log(cacheName, "cache name");
          if (cacheName => !currentCaches.includes(cacheName)) {
            console.log(cacheName, "delete cache name");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


// Check to see if we have a match request for event
// If match, return match from cache
self.addEventListener('fetch', (event) => {
  console.log('WORKER: fetch event in progress..');
  // Attempt to cache Google Map API

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            if (response.status == 404) {
              return new Response("Page not found");
            }
            // Put a copy of the response in the runtime cache.
              return response;
          }).catch(() => {
            return new Response("uh oh that wasnt supposed to happen");
          });
        });
      }
    )
  );
});
