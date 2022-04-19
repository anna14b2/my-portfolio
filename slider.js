const track = document.querySelector(".carusel_tracker");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

//when I click left, move slides to left
prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

//when I click right, move slides to the right
nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
});

/////////////
//SLIDER 2

const track2 = document.querySelector(".carusel_tracker2");
const slides2 = Array.from(track2.children);
const nextBtn2 = document.querySelector(".next2");
const prevBtn2 = document.querySelector(".prev2");

const slideWidth2 = slides[0].getBoundingClientRect().width;

//arrange slides next to one another
const setSlidePosition2 = (slide2, index) => {
  slide2.style.left = slideWidth * index + "px";
};

slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
  track2.style.transform = "translateX(-" + targetSlide2.style.left + ")";
  currentSlide2.classList.remove("current_slide2");
  targetSlide2.classList.add("current_slide2");
};

//when I click left, move slides to left
prevBtn2.addEventListener("click", (e) => {
  const currentSlide2 = track2.querySelector(".current_slide2");
  const prevSlide2 = currentSlide2.previousElementSibling;

  moveToSlide2(track2, currentSlide2, prevSlide2);
});

//when I click right, move slides to the right
nextBtn2.addEventListener("click", (e) => {
  const currentSlide2 = track2.querySelector(".current_slide2");
  const nextSlide2 = currentSlide2.nextElementSibling;

  moveToSlide2(track2, currentSlide2, nextSlide2);
});

/////////////
//SLIDER 3

const track3 = document.querySelector(".carusel_tracker3");
const slides3 = Array.from(track3.children);
const nextBtn3 = document.querySelector(".next3");
const prevBtn3 = document.querySelector(".prev3");

const slideWidth3 = slides[0].getBoundingClientRect().width;

//arrange slides next to one another
const setSlidePosition3 = (slide3, index) => {
  slide3.style.left = slideWidth * index + "px";
};

slides3.forEach(setSlidePosition3);

const moveToSlide3 = (track3, currentSlide3, targetSlide3) => {
  track3.style.transform = "translateX(-" + targetSlide3.style.left + ")";
  currentSlide3.classList.remove("current_slide3");
  targetSlide3.classList.add("current_slide3");
};

//when I click left, move slides to left
prevBtn3.addEventListener("click", (e) => {
  const currentSlide3 = track3.querySelector(".current_slide3");
  const prevSlide3 = currentSlide3.previousElementSibling;

  moveToSlide3(track3, currentSlide3, prevSlide3);
});

//when I click right, move slides to the right
nextBtn3.addEventListener("click", (e) => {
  const currentSlide3 = track3.querySelector(".current_slide3");
  const nextSlide3 = currentSlide3.nextElementSibling;

  moveToSlide3(track3, currentSlide3, nextSlide3);
});
