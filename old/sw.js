self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("mws-restaurant-stage-1").then(cache => {
      return cache.addAll([
        "/mws-restaurant-stage-1/",
        "/mws-restaurant-stage-1/css/styles.css",
        "/mws-restaurant-stage-1/js/dbhelper.js",
        "/mws-restaurant-stage-1/js/main.js",
        "/mws-restaurant-stage-1/data/restaurants.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
