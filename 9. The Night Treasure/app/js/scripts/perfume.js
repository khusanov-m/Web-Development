const perfumes = document.getElementById("perfumes"),
  rightBtn = document.getElementById("right"),
  leftBtn = document.getElementById("left"),
  perfume2 = document.getElementById("bg-perfume-2"),
  perfume3 = document.getElementById("bg-perfume-3"),
  bgCircle3 = document.querySelector(".bg-circle--3");

let x = 0;

rightBtn.addEventListener("click", () => {
  perfumes.style.transform = `translateX(${x - 20}rem)`;
  perfume2.classList.remove("active");
  perfume3.classList.add("active");

  if (document.documentElement.clientWidth <= 1500) {
    perfumes.style.transform = `translateX(${x - 25}rem)`;
  }

  if (document.documentElement.clientWidth <= 900) {
    perfumes.style.transform = `translateX(${x - 50}rem)`;
  }

  if (document.documentElement.clientWidth <= 800) {
    perfumes.style.transform = `translateX(${x - 65}rem)`;
  }

  if (document.documentElement.clientWidth <= 700) {
    perfumes.style.transform = `translateX(${x - 85}rem)`;
  }

  if (document.documentElement.clientWidth <= 600) {
    perfumes.style.transform = `translateX(${x - 70}rem)`;
  }

  if (document.documentElement.clientWidth <= 500) {
    perfumes.style.transform = `translateX(${x - 74}rem)`;
  }

  if (document.documentElement.clientWidth <= 400) {
    perfumes.style.transform = `translateX(${x - 67}rem)`;
  }
});

leftBtn.addEventListener("click", () => {
  perfumes.style.transform = `translateX(${x}px)`;
  perfume3.classList.remove("active");
  perfume2.classList.add("active");
});
