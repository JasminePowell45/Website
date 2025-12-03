
document.addEventListener('DOMContentLoaded' , () => {
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children).filter(el => el.nodeType === 1);
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform =  `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
});
window.addEventListener('resize' , updateSlidePosition);
});







