/* PARALLAX */

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


/* TABS */

$('.card').on('click',function(){
    var currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
});

/* SLIDER */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
    delay: 2000
    }
});

/* HAMBURGER */

$('.hamburger').on('click',function(){
    $('.head__menu').toggle();
})

$('#closeMenu').on('click',function(){
    $('.head__menu').hide();
});

/* Прибитая шапка */

$(window).on("scroll load resize",function () {
    var pixelTop = $(window).scrollTop();
    if(pixelTop > 0 && $(document).width() > 998) {
        $('.head').addClass('active');
    }else if(pixelTop < 1) {
        $('.head').removeClass('active');
    }
});


/* Проверка формы на валидность */

$.validator.addMethod("regex", function(value, element, regexp) {
        var regExsp = new RegExp(regexp);
        return regExsp.test(value);
    },"Please check your input."
);

$("form").validate({
    rules: {
        firstName: {
            required: true,
            regex : "[A-Za-z]{1,32}"   
        },
        phoneNumber: {
            digits : true,
            required: true,
            minlength: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    },
    messages: {
        firstName: "Введите ваше имя правильно",
        phoneNumber: "Введите ваш номер"
    }
});

/* 
    КАРТА
*/


ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [56.311748732999206,44.017157394555866],
        controls: ['zoomControl','geolocationControl'],
        zoom: 10
    });
    var myPlacemark = new ymaps.Placemark([56.311748732999206, 44.017157394555866], {}, {
        //iconLayout: 'default#imageWithContent',
        iconImageSize: [32, 40],
    });

    myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
        closeButton: false
    });

    myMap.geoObjects.add(myPlacemark);
}











