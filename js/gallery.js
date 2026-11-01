// gallery.js
// Opens a gallery picture in a bigger view (lightbox)

const pictures = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeButton = document.getElementById("lightboxClose");
const previousButton = document.getElementById("lightboxPrevious");
const nextButton = document.getElementById("lightboxNext");

// the number of the picture that is open now (0 is the first picture)
let current = 0;

// puts the current picture in the lightbox
function showPicture() {
    lightboxImage.src = pictures[current].src;
    lightboxImage.alt = pictures[current].alt;
    lightboxCaption.textContent = pictures[current].alt;
}

// open the lightbox when a gallery picture is clicked
for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("click", function () {
        current = i;
        showPicture();
        lightbox.hidden = false;
    });
}

// next picture, and back to the first one after the last
nextButton.addEventListener("click", function () {
    current = current + 1;
    if (current >= pictures.length) {
        current = 0;
    }
    showPicture();
});

// previous picture, and to the last one before the first
previousButton.addEventListener("click", function () {
    current = current - 1;
    if (current < 0) {
        current = pictures.length - 1;
    }
    showPicture();
});

// close with the X button
closeButton.addEventListener("click", function () {
    lightbox.hidden = true;
});

// close when the dark area around the picture is clicked
lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.hidden = true;
    }
});