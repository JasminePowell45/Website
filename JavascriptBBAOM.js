
document.addEventListener('DOMContentLoaded' , () => {

    // ========================================
    // TEAM CAROUSEL
    // ========================================
    
const teamTrack = document.querySelector('.team-track');
const teamSlides = Array.from(document.querySelectorAll('.team-slide'));
const teamPrevBtn = document.querySelector('.team-btn.prev');
const teamNextBtn = document.querySelector('.team-btn.next');

let teamIndex = 0;

function getTeamPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
}

function getTeamStep() {
    if (!teamsSlides[0]) return 0;
    const slideWidth = teamSlides[0].getBoundingClientRect().width;
    const trackStyles = window.getComputedStyle(teamTrack);
    const gap = parseFloat(trackStyles.gap || trackStyles.colummGap || '0');
    return slideWidth + gap;
}

function updateTeamCarousel() {
    const perView = getTeamPerView();
    const maxIndex = Math.max(0, teamSlides.length - perView);
    teamIndex = Math.min(teamIndex, maxIndex);
    
    const step = getTeamStep();
    teamTrack.style.transform = `translateX(-${teamIndex * step}px)`;

    if (teamPrevBtn) teamPrevBtn.disabled = teamIndex === 0;
    if (teamNextBtn) teamNextBtn.disabled = teamIndex >= maxIndex;
}

if (teamPrevBtn) {
    teamPrevBtn.addEventListener('click', () => {
        teamIndex = Math.max(0, teamIndex - 1); 
        updateTeamCarousel();
    });
}

if (teamNextBtn) {
    teamNextBtn.addEventListener('click' , () => {
        const perView = getTeamPerView();
        const maxIndex = Math.max(0, teamSlides.length - perView);
        teamIndex = Math.min(teamIndex + 1, maxIndex);
        updateTeamCarousel();
    });
}

window.addEventListener('resize', updateTeamCarousel);
updateTeamCarousel();

// =============================================
// EVENTS CAROUSEL 
// =============================================

const eventsTrack = document.querySelector('.events-track');
const eventSlides = Array.from(document.querySelectorAll('.event-slide'));
const eventPrevBtn = document.querySelector('.event-btn.prev');
const eventNextBtn = document.querySelector('.event-btn.next');
const eventDetails = Array.from(document.querySelectorAll('.event-detail'));

let eventIndex = 0;

function getEventStep() {
    if (!eventSlides[0]) return 0;
    return eventSlides[0].getBoundingClientRect().width;
}

function updateEventCarousel() {
    const maxIndex = eventSlides.length - 1;
    eventIndex = Math.min(Math.max(eventIndex, 0), maxIndex);

    const step = getEventStep();
    eventsTrack.style.transform = `translateX(-${eventIndex * step}px)`;

    // Update active event detail
    eventDetails.forEach((detail, i) => {
        detail.classList.toggle('active', i === eventIndex);
    });

    if (eventPrevBtn) eventPrevBtn.disabled = eventIndex === 0;
    if (eventNextBtn) eventNextBtn.disabled = eventIndex >= maxIndex;
}

if (eventPrevBtn) {
    eventPrevBtn.addEventListener('click', () => {
        eventIndex = Math.max(0, eventIndex - 1);
        updateEventCarousel();
    });
}

if (eventNextBtn) {
    eventNextBtn.addEventListner('click', () => {
        eventIndex = Math.min(eventIndex + 1, eventSlides.length - 1);
        updateEventsCarousel();
    });
}

window.addEventListener('resize', updateEventCarousel);
updateEventCarousel();

});

    


