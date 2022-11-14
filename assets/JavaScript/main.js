//navigation
//===============================================

window.onscroll = function showHeader() {
  let header = document.querySelector(".header");
  let leptop = document.querySelector(".main_laptop");
  let elementAni = document.querySelector(".element-animation");
  let textAni = document.querySelector(".text1");
  let textAni2 = document.querySelector(".text2");
  let textAni4 = document.querySelector(".text4");
  let textAni5 = document.querySelector(".text5");
  let textAni6 = document.querySelector(".text6");
  let textAni7 = document.querySelector(".text7");
  let works = document.querySelector(".works");
  let price = document.querySelector(".price");
  let card1 = document.querySelector(".card_price1");
  let card2 = document.querySelector(".card_price2");
  let card3 = document.querySelector(".card_price3");
  let media = document.querySelector(".media");
  let write = document.querySelector(".write_us_mail");
  let information = document.querySelector(".information");
  let mail = document.querySelector(".our_mail");

  if (window.pageYOffset > 0) {
    header.classList.add("header_fixed_down");
  } else {
    header.classList.remove("header_fixed_down");
  }
  if (window.pageYOffset > 350) {
    leptop.classList.add("animftion_lap");
    elementAni.classList.add("element-animation_ani");
  }
  if (window.pageYOffset > 1000) {
    textAni.classList.add("text1_ani");
    textAni2.classList.add("text1_ani");
  }
  if (window.pageYOffset > 1050) {
    textAni4.classList.add("text4_ani");
    textAni5.classList.add("text5_ani");
    textAni6.classList.add("text6_ani");
    textAni7.classList.add("text7_ani");
  }
  if (window.pageYOffset > 1650) {
    works.classList.add("works_ani");
  }
  if (window.pageYOffset > 2100) {
    price.classList.add("price_ani");
  }
  if (window.pageYOffset > 2200) {
    card1.classList.add("card_ani1");
    card2.classList.add("card_ani2");
    card3.classList.add("card_ani3");
  }
  if (window.pageYOffset > 3000) {
    media.classList.add("media_ani");
    write.classList.add("write_ani");
  }
  if (window.pageYOffset > 3700) {
    information.classList.add("info_ani");
  }
  if (window.pageYOffset > 4400) {
    mail.classList.add("mail_ani");
  }
};
//Laptop scroll
//=========================================
const slider = document.querySelector(".slider");
const before = document.querySelector(".before_slide");
const beforeImage = before.querySelector("img");
const change = document.querySelector(".change_slider");
const body = document.body;

let isActive = false;

document.addEventListener("DOMContentLoaded", () => {
  let width = slider.offsetWidth;
});

change.addEventListener("mousedown", () => {
  isActive = true;
});

body.addEventListener("mouseup", () => {
  isActive = false;
});

body.addEventListener("mouseleave", () => {
  isActive = false;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener("mousemove", (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

change.addEventListener("touchstart", () => {
  isActive = true;
});

body.addEventListener("touchend", () => {
  isActive = false;
});

body.addEventListener("touchcancel", () => {
  isActive = false;
});

body.addEventListener("touchmove", (e) => {
  if (!isActive) {
    return;
  }

  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
//Text what we do
//===============================================
function startingType() {
  let typed = new Typed(".typed", {
    typeSpeed: 100,
    startDelay: 700,
    loop: false,
    stringsElement: ".typed-strings",
  });
}
startingType();
//Laptop what we do and text answer
//===============================================
let i = 0;
let imagesSlide = [];
let timeSlide = 3000;

imagesSlide[0] = "assets/imges/slidePhoto/Slide1.png";
imagesSlide[1] = "assets/imges/slidePhoto/Slide2.png";
imagesSlide[2] = "assets/imges/slidePhoto/Slide3.png";
imagesSlide[3] = "assets/imges/slidePhoto/Slide4.png";

function changeImg() {
  document.slide.src = imagesSlide[i];

  if (i < imagesSlide.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", timeSlide);
}
window.onload = changeImg;

//media
//====================================
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

//politics confidant
//=============================================================

const vizibility = document.querySelector("#vizibility_con");
const cross = document.querySelector(".cross");
const politicsBtn = document.querySelector(".politics_btn");

politicsBtn.addEventListener("click", function () {
  vizibility.classList.remove("vizibility");
});

cross.addEventListener("click", function () {
  vizibility.classList.add("vizibility");
});
