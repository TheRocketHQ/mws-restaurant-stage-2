/**
 * Register Service Worker.
 */
const registerSW = () => {
  // ToDo: Add service worker to cache images, styles and js
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function () {
        console.log('Registration complete.');
      }, function () {
        console.log('Registration failure.');
      });
  } else {
    console.log('Service worker not supported.');
  }
}

/**
 * Update the User when the website is offline.
 *  https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events
 */
const updateStatus = (event) => {
  const status = document.getElementById("status");
  const condition = navigator.onLine ? "online" : "offline";

  if (condition === "offline") {
    console.log(condition, 'status');
    status.className = condition;
    status.insertAdjacentHTML("beforeend", "Status: Website " + condition);
    status.setAttribute("aria-live", "assertive");
  } else if (condition === "online") {
    status.className = '';
    status.innerHTML = '';
    status.removeAttribute("aria-live");
  }
}

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);


/**
 * Common database helper functions.
 */
class DBHelper {

  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   */
  static get DATABASE_URL() {
    const port = 1337 // Change this to your server port
    return `http://localhost:${port}/api/v1/restaurants`;
  }

  /** http://localhost:1337/api/v1/restaurants
   * Fetch all restaurants.
   */
  static fetchFromApi(callback, path) {
    const request = new Request(`${DBHelper.DATABASE_URL}${path}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    fetch(request)
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then((data) => {
            console.log(data);
            callback(null, data);
          });
        }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
        callback(`Request failed. Returned ${err}`, null);
      });

  }

  /**
   * Fetch a restaurant by its ID.
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find(r => r.id == id);
        if (restaurant) { // Got the restaurant
          callback(null, restaurant);
        } else { // Restaurant does not exist in the database
          callback('Restaurant does not exist', null);
        }
      }
    });
  }

  /**
   * Fetch restaurants by a cuisine type with proper error handling.
   */
  static fetchRestaurantByCuisine(cuisine, callback) {
    // Fetch all restaurants  with proper error handling
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given cuisine type
        // const results = restaurants.filter(r => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by a neighborhood with proper error handling.
   */
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given neighborhood
        // const results = restaurants.filter(r => r.neighborhood == neighborhood);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by a cuisine and a neighborhood with proper error handling.
   */
  static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        console.log('error from db');
        callback(error, null);
      } else {
        console.log(restaurants, 'restaurant');
        let results = restaurants
        if (cuisine != 'all') { // filter by cuisine
          results = results.filter(r => r.cuisine_type == cuisine);
        }
        if (neighborhood != 'all') { // filter by neighborhood
          results = results.filter(r => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * Fetch all neighborhoods with proper error handling.
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * Fetch all cuisines with proper error handling.
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
        callback(null, uniqueCuisines);
      }
    });
  }

  /**
   * Restaurant page URL.
   */
  static urlForRestaurant(restaurant) {
    return (`./restaurant.html?id=${restaurant.id}`);
  }

  /**
   * Restaurant image URL.
   */
  static imageUrlForRestaurant(restaurant) {
    return (`/img/${restaurant.photograph.replace(/\.jpg$/, ".webp")}`);
  }

  /**
   * Map marker for a restaurant.
   */
  static mapMarkerForRestaurant(restaurant, map) {
    const marker = new google.maps.Marker({
      position: restaurant.latlng,
      title: restaurant.name,
      url: DBHelper.urlForRestaurant(restaurant),
      map: map,
      animation: google.maps.Animation.DROP
    });
    return marker;
  }

  static onWindowResize() {
    let width = document.body.clientWidth;
    let mediaWidth = '';

    if (width >= 1024) {
      mediaWidth = 'lrg-desktop';
    } else if (width >= 768) {
      mediaWidth = 'desktop';
    } else if (width >= 425) {
      mediaWidth = 'mobile-l';
    } else if (width >= 375) {
      mediaWidth = 'mobile-m';
    } else if (width >= 320) {
      mediaWidth = 'mobile-s';
    }

    document.body.className = '';
    document.body.classList.add(mediaWidth);

    return mediaWidth;
  }


}
