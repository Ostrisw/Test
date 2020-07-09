var cardIndex = 1;
showSlides(cardIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(cardIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(cardIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {cardIndex = 1}
if (n < 1) {cardIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[cardIndex-1].style.display = "block";
dots[cardIndex-1].className += " active";
} 