let headerIndex = 1;
var headerTimer;

function plusHeaders(n) {
  console.log(n);
  if (headerTimer) window.clearTimeout(headerTimer);
  showHeaders(headerIndex += n-1);
}

function currentHeader(n) {
  console.log(n);
  if (headerTimer) window.clearTimeout(headerTimer);
  showHeaders(headerIndex = n);
}

function showHeaders() {
  let i;
  let head_slides = document.getElementsByClassName("header_slides");
  let dots = document.getElementsByClassName("header_dot");
  for (i = 0; i < head_slides.length; i++) {
    head_slides[i].style.display = "none";  
  }
  if (headerIndex > head_slides.length) {headerIndex = 1}    
  if (headerIndex < 1) {headerIndex = head_slides.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  head_slides[headerIndex-1].style.display = "block";  
  dots[headerIndex-1].className += " active";
  headerIndex++;
  headerTimer = setTimeout(showHeaders, 5000); // Change image every 5 seconds
}