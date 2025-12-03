
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



document.addEventListener('DOMContentLoaded' , () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    
    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width + 10;
        //const moveAmount = slideWidth + 20;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    
    nextButton.addEventListener('click', () => {
        currentIndex +=  3
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlidePosition();
    });
    window.addEventListener('resize' , updateSlidePosition);
    });