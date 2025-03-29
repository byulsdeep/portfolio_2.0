let slideIndexes = [];

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let appSlides = [];
    let start = 0;

    // Loop through slides to gather each app's slides
    while (start < slides.length) {
        let end = start + slides[start].parentElement.querySelectorAll('.slide').length;
        appSlides.push(Array.from(slides).slice(start, end));
        start = end;
    }

    appSlides.forEach((slidesArray, idx) => {
        let slideIndex = slideIndexes[idx] || 0;
        slidesArray.forEach((slide, i) => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slidesArray.length) { slideIndex = 1; }
        slidesArray[slideIndex - 1].style.display = "block";
        slideIndexes[idx] = slideIndex;
    });

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();