//SLIDESHOW TUTORIAL: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 0;
showSlides(slideIndex);
autoSlide(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  if (slideIndex > slides.length) {slideIndex = 1}   

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot_active";
}

function autoSlide(n){
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  plusSlides(1);

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  if (slideIndex > slides.length) {slideIndex = 1}   

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot_active";

  setTimeout(function() {autoSlide(slideIndex)}, 4000); //repeat in 4 seconds
}

