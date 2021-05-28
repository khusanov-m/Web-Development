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

// Slider

// const prev = document.getElementsByClassName('left-arrow'),
//     next = document.getElementByClassName('right-arrow'),
//     slides = document.querySelectorAll('.slide'),
//     dots = document.querySelectorAll('.proj-dot');

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots) {
//         dot.classList.remove('active');
//     }
//     dots[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//     activeSlide(index);
//     activeDot(index);
// }

// const nextSlide = () => {
//     if(index == slides.length - 1) {
//         index = 0;
//         prepareCurrentSlide(index);
//     }else {
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// const prevSlide = () => {
//     if(index == 0) {
//         index = slides.length - 1;
//         prepareCurrentSlide(index);
//     }else {
//         index--;
//         prepareCurrentSlide(index);
//     }
// }

// dots.forEach((item, indexDot) => {
//     item.addEventListener('click', () => {
//         index = indexDot;
//         prepareCurrentSlide(index);
//     })
// })

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);
// setInterval( nextSlide, 2000 );
