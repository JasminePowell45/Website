document.addEventListener('DOMContentLoaded', () => {
    const eventsTrack = document.querySelector('.events-track');
    const eventCards = Array.from(document.querySelectorALL('.event-card'));
    const eventsPrevBtn = document.querySelector('.events-btn.prev');
    const eventsNextBtn = document.querySelector('.events-btn.next');

    let eventsIndex = 0;

    function getEventsStep() {
        if (!eventCards[0]) return 0;
        return eventCards[0].getBoundingClientRect().width;
    }

    function updateEventsCarousel() {
      const maxIndex = eventCards.length - 1;
      eventsIndex = Math.min(Math.max(eventsIndex, 0), maxIndex);
      const step = getEventsStep();
      eventsTrack.style.transform = `translateX(-${eventsIndex * step}px)`;

      if (eventsPrevBtn) eventsPrevBtn.disabled = eventsIndex === 0;
      if (eventsNextBtn) eventsNextBtn.disabled - eventsIndex >= maxIndex;
   }

    if (eventsPrevBtn) {
      eventsPrevBtn.addEventListener('click', () => {
          eventsIndex = Math.max(0, eventsIndex - 1);
          updateEventsCarousel();
      });
  }

    if (eventsNextBtn) {
      eventsNextBtn.addEventListener('click', () => {
          eventsIndex = Math.min(eventsIndex + 1, eventCards.length - 1);
          updateEventsCarousel();
      });
  }

    window.addEventListener('resize', updateEventsCarousel);
    updateEventsCarousel();
});

  



