/* Tabs */

$(".card").on("click", function () {
  let currTab = $(this).parent().index();

  $(".card").removeClass("card-active");
  $(this).addClass("card-active");

  $(".tab-content").removeClass("active");
  $(".tab-content").eq(currTab).addClass("active");
});

/* Hamburger */

$(".hamburger").on("click", function () {
  $(".head__menu").toggle();
});

$(".menu-close").on("click", function () {
  $(".head__menu").hide();
});

/* Parallax */

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

/* Slider */

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  spaceBetween: 50,
  slidesPerView: 2,
  loop: true,
  stopOnLastSlide: false,
  autoplay: {
    delay: 1000,
  },
});

/* Yandex Map */

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [41.3, 69.3],
    zoom: 10,
    controls: ["zoomControl", "geolocationControl"],
  });
}

/* Validation */

$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
  },
  "Please check your input"
);

$("form").validate({
  rules: {
    firstName: {
      required: true,
      regex: "[A-Za-z]{1,32}",
    },
    phoneNumber: {
      digits: true,
      required: true,
      minlength: 10,
      maxlength: 11,
      regex: "[0-9]+",
    },
  },
  message: {
    firstName: "Введите имя не правильно",
    phoneNumber: "Введите ваш номер",
  },
});
