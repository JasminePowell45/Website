document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // UPCOMING EVENTS - real, date-specific, RSVP-able events
    // Add next year's events here with their real dates. Once an
    // event's date passes, it disappears from this section on
    // its own - nothing to delete by hand.
    // =========================================================
    const events = [
        {
            title: "State of Black Macomb Forum",
            date: "2026-02-13",
            dateLabel: "Friday, February 13th 2026",
            img: "/images/State of Black Macomb 2026 Flyer.jpg",
            link: "https://www.eventbrite.com/e/mcbe-state-of-black-macomb-forum-registration-1978444227944?aff=erelexpmlt"
        },
        {
            title: "Black Business & Health Expo",
            date: "2026-02-21",
            dateLabel: "Saturday, February 21st 2026",
            img: "/images/Black Business Expo Vendors 2026 (1).jpg",
            link: "https://www.zeffy.com/en-US/ticketing/2026-mcbe-black-business-and-health-expo"
        },
        {
            title: "Gala",
            date: "2026-02-28",
            dateLabel: "Saturday, February 28th 2026",
            img: "/images/MCBE 2026 Gala Flyer.jpg",
            link: "https://www.eventbrite.com/e/macomb-celebration-of-black-excellence-awards-dinner-and-gala-tickets-1976404929347"
        }
    ];

    const today = new Date();
    const eventsList = document.getElementById('eventsList');
    const upcoming = events.filter(e => new Date(e.date) >= today);

    if (eventsList) {
        if (upcoming.length === 0) {
            eventsList.innerHTML = '<p class="no-events">No upcoming events right now — check back soon!</p>';
        } else {
            eventsList.innerHTML = upcoming.map(e => `
                <li class="event-card">
                    <a href="${e.link}" class="flyer-link" target="_blank" rel="noopener">
                        <img src="${e.img}" class="event-image" alt="${e.title} flyer">
                        <div class="flyer-overlay"><span>Click to Register</span></div>
                    </a>
                    <h3>${e.title}</h3>
                    <p class="event-date">${e.dateLabel}</p>
                </li>
            `).join('');
        }
    }

    // =========================================================
    // EVENT HIGHLIGHTS - real photos from the most recent Gala.
    // This is NOT a growing archive. Each year, once the next
    // Gala happens, REPLACE the whole "photos" array below with
    // that year's ~6 best photos (don't add to the old ones) and
    // update "year". That's the entire yearly update.
    // =========================================================
    const eventHighlights = {
        year: 2025,
        photos: [
            { img: "/images/MCBE2025GALA-RIADANMEDIA-224.jpg", caption: "Board members at the Gala" },
            { img: "/images/MCBE2024RIADANMEDIA-66.jpg", caption: "Welcoming remarks" },
            { img: "/images/MCBE2024RIADANMEDIA-211.jpg", caption: "Guest on the dance floor" },
            { img: "/images/MCBE2024RIADANMEDIA-30.jpg", caption: "Community picture" },
            { img: "/images/MCBE2024RIADANMEDIA-118.jpg", caption: "Legacy Award presentation" },
            { img: "/images/MCBE2024RIADANMEDIA-207.jpg", caption: "Guests on the dance floor" }
        ]
    };

    const highlightsTitle = document.getElementById('highlightsTitle');
    const highlightsRow = document.getElementById('highlightsRow');

    if (highlightsTitle) highlightsTitle.textContent = `${eventHighlights.year} Event Highlights`;
    if (highlightsRow) {
        highlightsRow.innerHTML = eventHighlights.photos.map(p => `
            <div class="event">
                <img src="${p.img}" alt="${p.caption}">
                <div class="caption">
                    <h3>${p.caption}</h3>
                </div>
            </div>
        `).join('');
    }

    // =========================================================
    // PAST EVENTS - the different activities from that year's
    // full week (Gospel Concert, Chef Challenge, HBCU Fair, etc).
    // Same rule as above: REPLACE this whole list each year with
    // that year's lineup, rather than adding to it.
    // =========================================================
    const pastEvents = {
        year: 2025,
        events: [
            { img: "/images/Gospel concert 2 (1).jpeg", caption: "Gospel Concert" },
            { img: "/images/Chef Challenge.jpeg", caption: "Ultimate Chef Challenge" },
            { img: "/images/HBCU Fair.jpeg", caption: "HBCU College Fair" },
            { img: "/images/emerging leaders day (1).jpeg", caption: "Emerging Leaders Day" },
            { img: "/images/Health and Wellness.jpeg", caption: "Health & Wellness Fair" },
            { img: "/images/BlackMacombForum.Final.png", caption: "Spoken Word and Q&A Session" },
            { img: "/images/Black Business Expo 2025 (1).png", caption: "Vendor & Resource Expo" }
        ]
    };

    const pastEventsTitle = document.getElementById('pastEventsTitle');
    const pastEventsRow = document.getElementById('pastEventsRow');

    if (pastEventsTitle) pastEventsTitle.textContent = `${pastEvents.year} Week of Activities`;
    if (pastEventsRow) {
        pastEventsRow.innerHTML = pastEvents.events.map(p => `
            <div class="event">
                <img src="${p.img}" alt="${p.caption}">
                <div class="caption">
                    <h3>${p.caption}</h3>
                </div>
            </div>
        `).join('');
    }

    // =========================================================
    // AWARD WINNERS - most recent year only, shown with photos.
    // Each year, REPLACE the "winners" array with the new
    // honorees (don't add to the old list). If you want a full
    // historical archive later, that belongs on its own separate
    // page, not stacked here.
    // =========================================================
    const currentWinners = {
        year: 2024,
        winners: [
            { award: "Artistic Impact Award", names: ["Micheal Pratt"], photo: "/images/winners/placeholder.jpg" },
            { award: "Athletic Leader Award", names: ["Vernard Snowden"], photo: "/images/winners/placeholder.jpg" },
            { award: "Business Impact Award", names: ["Randy Herring Jr."], photo: "/images/winners/placeholder.jpg" },
            { award: "Legacy Award", names: ["Lee V. Newby, Jr", "Sarah Stovall"], photo: "/images/winners/placeholder.jpg" },
            { award: "Educational Impact Award", names: ["Darnell Blackburn"], photo: "/images/winners/placeholder.jpg" },
            { award: "Rhonda M. Powell Visionary Leadership Award", names: ["Pastor Kevin W. Lancaster"], photo: "/images/winners/placeholder.jpg" },
            { award: "Community Advocate Award", names: ["The Seven's Committee"], photo: "/images/winners/placeholder.jpg" }
        ]
    };

    const winnersTitle = document.getElementById('winnersTitle');
    const winnersRow = document.getElementById('winnersRow');

    if (winnersTitle) winnersTitle.textContent = `${currentWinners.year} Award Recipients`;
    if (winnersRow) {
        winnersRow.innerHTML = currentWinners.winners.map(w => `
            <div class="winner-card">
                <img src="${w.photo}" alt="${w.names.join(' & ')}" class="winner-photo">
                <h3>${w.award}</h3>
                <p class="winner">${w.names.join(' & ')}</p>
            </div>
        `).join('');
    }

    // =========================================================
    // NOMINATION / VOTING PHASE
    // Update these three dates each year — everything else
    // (banner text, headings, buttons, links) updates itself.
    // =========================================================
    const nominationDeadline = new Date("2026-11-30");
    const votingOpens        = new Date("2026-12-01");
    const votingCloses       = new Date("2026-12-31");

    let phase;
    if (today < nominationDeadline) phase = "nominating";
    else if (today < votingOpens)   phase = "closed";
    else if (today <= votingCloses) phase = "voting";
    else                            phase = "ended";

    const NOMINATE_URL = "https://docs.google.com/forms/d/e/1FAIpQLScbGZ5vXYH-H5pMxd8ezLdNIgeA_U6XT1HtzBwt0cinaIyKag/viewform?pli=1";
    const VOTE_URL = "https://www.surveymonkey.com/r/Y7WVC9Q";

    const copy = {
        nominating: {
            bannerText: "Nominations are open — nominate a community leader today!",
            bannerBtnText: "Nominate Now",
            bannerBtnLink: NOMINATE_URL,
            eyebrow: "NOMINATIONS ARE OPEN",
            heading: "NOMINATE A TRAILBLAZER",
            body: "Know someone making a real impact in our community? Nominate them for a 2026 Celebration of Black Excellence award before nominations close.",
            btnText: "NOMINATE NOW",
            btnLink: NOMINATE_URL
        },
        closed: {
            bannerText: "Nominations have closed — voting opens December 1st.",
            bannerBtnText: null,
            bannerBtnLink: null,
            eyebrow: "NOMINATIONS ARE CLOSED",
            heading: "VOTING OPENS DECEMBER 1ST",
            body: "Nominations are officially closed. Check back December 1st to vote for this year's honorees.",
            btnText: null,
            btnLink: null
        },
        voting: {
            bannerText: "Voting is open — cast your vote for this year's honorees!",
            bannerBtnText: "Vote Now",
            bannerBtnLink: VOTE_URL,
            eyebrow: "TIME TO CELEBRATE BLACK EXCELLENCE",
            heading: "VOTING IS OFFICIALLY OPEN!",
            body: "You have the power to decide who will shine as our 2026 award winners at the Celebration of Black Excellence Gala! Every vote brings us closer to recognizing the trailblazers who inspire our community.",
            btnText: "CLICK HERE TO VOTE",
            btnLink: VOTE_URL
        },
        ended: {
            bannerText: "Voting has closed — winners will be announced at the Gala!",
            bannerBtnText: null,
            bannerBtnLink: null,
            eyebrow: "VOTING HAS CLOSED",
            heading: "WINNERS ANNOUNCED AT THE GALA",
            body: "Thank you to everyone who nominated and voted this year! This year's honorees will be revealed live at the Celebration of Black Excellence Gala.",
            btnText: null,
            btnLink: null
        }
    };

    const c = copy[phase];

    const bannerText = document.getElementById('bannerText');
    const bannerBtn = document.getElementById('bannerBtn');
    const infoEyebrow = document.getElementById('infoEyebrow');
    const infoHeading = document.getElementById('infoHeading');
    const infoBody = document.getElementById('infoBody');
    const actionBtn = document.getElementById('actionBtn');

    if (bannerText) bannerText.textContent = c.bannerText;
    if (bannerBtn) {
        if (c.bannerBtnText) {
            bannerBtn.textContent = c.bannerBtnText;
            bannerBtn.href = c.bannerBtnLink;
            bannerBtn.style.display = "inline-block";
        } else {
            bannerBtn.style.display = "none";
        }
    }
    if (infoEyebrow) infoEyebrow.textContent = c.eyebrow;
    if (infoHeading) infoHeading.textContent = c.heading;
    if (infoBody) infoBody.textContent = c.body;
    if (actionBtn) {
        if (c.btnText) {
            actionBtn.textContent = c.btnText;
            actionBtn.href = c.btnLink;
            actionBtn.style.display = "inline-block";
        } else {
            actionBtn.style.display = "none";
        }
    }
});
