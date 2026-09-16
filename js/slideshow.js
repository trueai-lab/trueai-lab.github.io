let slideIndex = 1;
var sliderTimer;

function plusSlides(n) {
  console.log(n);
  if (sliderTimer) window.clearTimeout(sliderTimer);
  showSlides(slideIndex += n-1);
}

function currentSlide(n) {
  console.log(n);
  if (sliderTimer) window.clearTimeout(sliderTimer);
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  slideIndex++;
  sliderTimer = setTimeout(showSlides, 3000); // Change image every 3 seconds
}