/* Quartet Slider */
var swiper = new Swiper(".quartet-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".quartet-slider__pagination",
    clickable: true,
  },
});
