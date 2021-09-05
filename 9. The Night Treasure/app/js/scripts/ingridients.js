"use strict";

const featureCardsContainer = document.getElementById("feature__cards"),
  featureLeftBtn = document.getElementById("feature-left"),
  featureRightBtn = document.getElementById("feature-right"),
  featureCards = document.querySelectorAll(".feature__card");

if (document.documentElement.clientWidth <= 400) {
  let idx = 0;

  let interval = setInterval(run, 2000);

  function run() {
    idx++;
    changeImage();
  }

  function changeImage() {
    if (idx > featureCards.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = featureCards.length - 1;
    }

    featureCardsContainer.style.transform = `translateX(${-idx * 50}rem)`;
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  }

  featureRightBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval();
  });

  featureLeftBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval();
  });
}
