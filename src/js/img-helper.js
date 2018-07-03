/**
 * Common Image helper functions.
 */
class ImageHelper {

/**
 * Lazy Load Images
 */
static lazyLoadImages(restaurant) {
    const img = `
      <figure>
        ​<picture>
          <source srcset="${DBHelper.imageUrlForRestaurant(restaurant)
            .replace(/\.webp$/, "-lrg-desktop.webp")}"
            media="(min-width: 1024px)">
          <source srcset="${DBHelper.imageUrlForRestaurant(restaurant)
            .replace(/\.webp$/, "-desktop.webp")}"
            media="(min-width: 768px)">
          <source srcset="${DBHelper.imageUrlForRestaurant(restaurant)
            .replace(/\.webp$/, "-mobile-l.webp")}"
            media="(min-width: 425px)">
          <source srcset="${DBHelper.imageUrlForRestaurant(restaurant)
            .replace(/\.webp$/, "-mobile-m.webp")}"
            media="(min-width: 375px)">
          <source srcset="${DBHelper.imageUrlForRestaurant(restaurant)
            .replace(/\.webp$/, "-mobile-s.webp")}"
            media="(min-width: 320px)">
          <img class="restaurant-img fade-in" alt="Image of ${restaurant.name} Restaurant"
          src="${DBHelper.imageUrlForRestaurant(restaurant)
            .replace(/\.webp$/, "-lrg-desktop.webp")}" >
        </picture>
      </figure>
    `;
    return img;
  }
}
