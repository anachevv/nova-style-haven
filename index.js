let slideIndex = 1;
showSlides(slideIndex);

// Set interval for automatic slide change
let slideInterval = setInterval(function() {
    plusSlides(1); // Call plusSlides function to move to the next slide
}, 3000); // Change slide every 3 seconds

// Function to change slide by a given amount
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to change slide to a specific index
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function to stop automatic slide change when user interacts with the slideshow
function stopSlideInterval() {
    clearInterval(slideInterval);
}

// Attach event listeners to slideshow elements to stop automatic slide change on user interaction
document.querySelectorAll('.mySlides, .dot').forEach(item => {
    item.addEventListener('mouseenter', stopSlideInterval);
    item.addEventListener('mouseleave', function() {
        slideInterval = setInterval(function() {
            plusSlides(1);
        }, 3000);
    });
});
