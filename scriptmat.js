var slideIndexMat = 0;
showSlidesMat(slideIndexMat);

// Next/previous controls
function plusSlidesMat(n) {
    showSlidesMat(slideIndexMat += n);
    ga('send', 'event', 'galeria', 'next_prev', 'Titulo da página');
}

// Thumbnail image controls
function currentSlideMat(n) {
    showSlidesMat(slideIndexMat = n);
}

function showSlidesMat(n) {
    var i;
    var slidesMat = document.getElementsByClassName("minhaFotoMat");
    element = document.getElementById("matheus")
    element.classList.add("minhaFotoMat");

    if (n > slidesMat.length) {
        slideIndexMat = 1
    }
    if (n < 1) {
        slideIndexMat = slidesMat.length

    }
    for (i = 0; i < slidesMat.length; i++) {
        slidesMat[i].style.display = "none";
    }
    slidesMat[slideIndexMat - 1].style.display = "block";
}