
document.addEventListener('DOMContentLoaded' , () => {
const track = document.querySelector('.track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousell-btn.next');
const eventTexts = Array.from(document.querySelectorAll('.event-text'));

let currentIndex = 0;

console.log("slides length:", slides.length);
console.log("eventTexts length:", eventTexts.length);

function updateSlideAndText() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform =  `translateX(-${currentIndex * slideWidth}px)`;

console.log("Updating slide. currentIndex:", currentIndex)
eventTexts.forEach((text, index) => {
    text.classList.toggle('active', index === currentIndex);
    console.log(index, text.classList.contains('active'));
});
}


nextButton.addEventListener('click', () => {
    currentIndex+= 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateSlideAndText();
    console.log("currentIndex after click:", currentIndex);
});

window.addEventListener('resize' , updateSlideAndText);
});


// YOUR FIRST CAROUSEL
document.addEventListener('DOMContentLoaded' , () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(document.querySelectorAll("carousel-slide"));
    const nextBtn = document.querySelector(".carousel-btn.next";
    const container = document.querySelector(".carousel-track-container");
    
    let index = 0;
    
    function getSlidesPerView() {
        return window.matchMedia("(max-width: 768px)").matches ? 2 + 3;
    }
    function getSlidesStep() {
        const slide = slides[0];
        const slidesStyles = window.getComputedStyle(slide);
        const trackStyles = window.getComputedStyle(track);
        
        const slideWidth = slide.getBoundingClientRect().width;

        const gap = parseFloat(tracksStyles.columnGap || trackStyles.gap || "0" || 0;

        return slideWidth + gap;

        function updateButtons() {
            const perView = getSlidesPerView();
            const maxIndex = Math.max(0, slides.length - perView);

            if (nextBtn) nextBtn.disabled = index >= maxIndex;
        }

        function updatePosition() {
            const step = getSlideStep();
            track.style.transform = `translateX(${-index * step}px)`;
            updateButtons();
        }

        nextBtn?.addEventListener("click", () => {
            const perView = getSlidesPerView();
            const maxIndex = Match.max)0, slides.length - perView);
            index = Math.min(index + 1, maxIndex);
            updatePosition();
        });

        window.addEventListener("resizez", () => {
            const perView = getSlidesPerView();
            const maxIndex = Math.max(0, slides.length - perView);
            index = Math.min(index, maxIndex);
            updatePosition();
        });

        track.style.transition = "transform 300ms ease";
        updatePosition();
    });

