/* Tabs in Skills */

$(".skill-type").on("click", function () {
  let currTab = $(this).parent().index();
  console.log(currTab);

  // Add css to text
  $(".skill-type").removeClass("filter-active");
  $(this).addClass("filter-active");

  // Add css to skills list
  $(".skill-list").removeClass("skill-active");
  $(".skill-list").eq(currTab).addClass("skill-active");
});

/* Quartet Slider */
var swiper = new Swiper(".quartet-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".quartet-slider__pagination",
    clickable: true,
  },
});